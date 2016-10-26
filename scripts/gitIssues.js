"use strict";

function GitIssues() {
  this.repos = new GitRepos();
  this.issueHeaderId = "fix-issues";
  this.issueListIdPrefix = "issue-list-";
}

GitIssues.prototype.run = function() {
  var self = this;

  self.repos.getRepos().then(function(reposList) {
    var index;

    for(index = 0; index < reposList.length; index += 1) {
      self.render(reposList[index]);
    }
  });
};

GitIssues.prototype.render = function(repo) {
  var self = this;

  self.getData(repo).then(function(issues) {
    issues = issues.filter(bugFilter);

    if (issues.length === 0) {
      return;
    }

    self.appendIssueHeader(repo, issues);
    self.renderIssueList(repo, issues);

    function bugFilter(issue) {
      return issue.labels.find(findBug);
    }

    function findBug (label) {
      return label.name === "bug";
    }
  });
};

GitIssues.prototype.appendIssueHeader = function(repo, issues) {
  var minIssues = 3;
  var headerElement = document.getElementById(this.issueHeaderId);

  headerElement.appendChild(this.createRepoName(repo));
  headerElement.appendChild(this.createIssueList(repo));
  if (issues.length > minIssues) {
    headerElement.appendChild(this.createIssuesSeeAll(repo));
  }
};

GitIssues.prototype.createRepoName = function(repo) {
  var repoName = document.createElement("a");
  repoName.setAttribute("href", repo.html_url);
  repoName.setAttribute("class", "repo-name");
  repoName.innerHTML = repo.name;
  return repoName;
};

GitIssues.prototype.createIssuesSeeAll = function(repo) {
  var seeAll = document.createElement("a");
  seeAll.setAttribute("href", this.repos.getIssuesUrl(repo));
  seeAll.setAttribute("class", "repo-issues-see-all");
  seeAll.innerHTML = "See All";
  return seeAll;
};

GitIssues.prototype.getData = function(repo) {
  return $.ajax({
    url: this.repos.getIssuesApi(repo),
    method: "GET"
  });
};

GitIssues.prototype.renderIssueList = function(repo, issueList) {
  var index;
  var issue;
  var maxIssues = 3;
  var maxLength = (issueList.length > maxIssues) ? maxIssues : issueList.length;
  var repoIssueList = document.getElementById(this.issueListIdPrefix + repo.name);

  for (index = 0; index < maxLength; index += 1) {
    issue = issueList[index];

    repoIssueList.appendChild(this.createIssueItem(issue));
  }
};

GitIssues.prototype.createIssueList = function(repo) {
  var issueList = document.createElement("ul");
  issueList.setAttribute("id", this.issueListIdPrefix + repo.name);
  issueList.setAttribute("class", "issue-list");
  return issueList;
};

GitIssues.prototype.createIssueItem = function(issue) {
  var issueItem = document.createElement("li");
  issueItem.setAttribute("class", "issue-item");
  issueItem.appendChild(this.createIssueNumber(issue));
  issueItem.appendChild(this.createIssueTitle(issue));
  return issueItem;
};

GitIssues.prototype.createIssueNumber = function(issue) {
  var issueNumber = document.createElement("a");
  issueNumber.setAttribute("href", issue.html_url);
  issueNumber.setAttribute("class", "issue-number");
  issueNumber.innerHTML = issue.number;
  return issueNumber;
};

GitIssues.prototype.createIssueTitle = function(issue) {
  var issueTitle = document.createElement("p");
  issueTitle.setAttribute("class", "issue-title");
  issueTitle.innerHTML = issue.title;
  return issueTitle;
};

var issues = new GitIssues();
issues.run();
