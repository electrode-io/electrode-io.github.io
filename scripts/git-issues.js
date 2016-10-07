"use strict";

function GitIssues() {
  this.repos = [
    {
      "id": "electrode-io",
      "name": "Electrode-io",
      "url": "https://github.com/electrode-io/electrode-io.github.io",
      "issuesUrl": "https://github.com/electrode-io/electrode-io.github.io/issues",
      "issuesApi": "https://api.github.com/repos/electrode-io/electrode-io.github.io/issues"
    },
    {
      "id": "electrode-electrify",
      "name": "Electrode-Electrify",
      "url": "https://github.com/electrode-io/electrode-electrify",
      "issuesUrl": "https://github.com/electrode-io/electrode-electrify/issues",
      "issuesApi": "https://api.github.com/repos/electrode-io/electrode-electrify/issues"
    },
    {
      "id": "electrode-react-ssr-caching",
      "name": "Electrode React-SSR-Caching",
      "url": "https://github.com/electrode-io/electrode-react-ssr-caching",
      "issuesUrl": "https://github.com/electrode-io/electrode-react-ssr-caching/issues",
      "issuesApi": "https://api.github.com/repos/electrode-io/electrode-react-ssr-caching/issues"
    },
    {
      "id": "electrode-explorer",
      "name": "Electrode Explorer",
      "url": "https://github.com/electrode-io/electrode-explorer",
      "issuesUrl": "https://github.com/electrode-io/electrode-explorer/issues",
      "issuesApi": "https://api.github.com/repos/electrode-io/electrode-explorer/issues"
    },
    {
      "id": "electrode-redux-router-engine",
      "name": "Electrode Redux-Router-Engine",
      "url": "https://github.com/electrode-io/electrode-redux-router-engine",
      "issuesUrl": "https://github.com/electrode-io/electrode-redux-router-engine/issues",
      "issuesApi": "https://api.github.com/repos/electrode-io/electrode-redux-router-engine/issues"
    },
    {
      "id": "electrode-csrf-jwt",
      "name": "Electrode CSRF-JWT",
      "url": "https://github.com/electrode-io/electrode-csrf-jwt",
      "issuesUrl": "https://github.com/electrode-io/electrode-csrf-jwt/issues",
      "issuesApi": "https://api.github.com/repos/electrode-io/electrode-csrf-jwt/issues"
    },
    {
      "id": "electrode-confippet",
      "name": "Electrode Confippet",
      "url": "https://github.com/electrode-io/electrode-confippet",
      "issuesUrl": "https://github.com/electrode-io/electrode-confippet/issues",
      "issuesApi": "https://api.github.com/repos/electrode-io/electrode-confippet/issues"
    },
    {
      "id": "above-the-fold-only-server-render",
      "name": "Electrode Above-the-Fold-Only-Server-Render",
      "url": "https://github.com/electrode-io/above-the-fold-only-server-render",
      "issuesUrl": "https://github.com/electrode-io/above-the-fold-only-server-render/issues",
      "issuesApi": "https://api.github.com/repos/electrode-io/above-the-fold-only-server-render/issues"
    },
    {
      "id": "electrode-bundle-analyzer",
      "name": "Electrode Bundle Analyzer",
      "url": "https://github.com/electrode-io/electrode-bundle-analyzer",
      "issuesUrl": "https://github.com/electrode-io/electrode-bundle-analyzer/issues",
      "issuesApi": "https://api.github.com/repos/electrode-io/electrode-bundle-analyzer/issues"
    }
  ];
}

GitIssues.prototype.run = function() {
  var index;

  for(index = 0; index < this.repos.length; index += 1) {
    this.render(this.repos[index]);
  }
};

GitIssues.prototype.render = function(repo) {
  var self = this;

  self.getData(repo).then(function(issues) {
    var maxLength = 3;

    if (issues.length < maxLength) {
      return;
    }

    var fixIssuesElement = document.getElementById('fix-issues');

    fixIssuesElement.appendChild(self.createRepoName(repo));
    fixIssuesElement.appendChild(self.createIssuesSeeAll(repo));
    fixIssuesElement.appendChild(self.createIssueList(repo));

    self.renderIssueList(repo, issues);
  });
};

GitIssues.prototype.createRepoName = function(repo) {
  var repoName = document.createElement("a");
  repoName.setAttribute("href", repo.url);
  repoName.setAttribute("class", "repo-name");
  repoName.innerHTML = repo.name;
  return repoName;
};

GitIssues.prototype.createIssuesSeeAll = function(repo) {
  var seeAll = document.createElement("a");
  seeAll.setAttribute("href", repo.issuesUrl);
  seeAll.setAttribute("class", "repo-issues-see-all");
  seeAll.innerHTML = "See All";
  return seeAll;
};

GitIssues.prototype.getData = function(request) {
  return $.ajax({
    url: request.issuesApi,
    method: "GET"
  });
};

GitIssues.prototype.renderIssueList = function(repo, issueList) {
  var index;
  var issue;
  var maxLength = (issueList.length > 3) ? 3 : issueList.length;
  var repoIssueList = document.getElementById("issue-list-" + repo.id);

  for (index = 0; index < maxLength; index += 1) {
    issue = issueList[index];

    repoIssueList.appendChild(this.createIssueItem(issue));
  }
};

GitIssues.prototype.createIssueList = function(repo) {
  var issueList = document.createElement("ul");
  issueList.setAttribute("id", "issue-list-" + repo.id);
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
