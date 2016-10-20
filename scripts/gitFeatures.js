"use strict";

function GitFeatures() {
  this.repos = new GitRepos();
  this.issueHeaderId = "help-features";
  this.issueListIdPrefix = "feature-list-";
}

GitFeatures.prototype = Object.create(GitIssues.prototype);
GitFeatures.prototype.constructor = GitFeatures;

GitFeatures.prototype.render = function(repo) {
  var self = this;

  self.getData(repo).then(function(issues) {
    issues = issues.filter(enhancementFilter);

    if (issues.length === 0) {
      return;
    }

    self.appendIssueHeader(repo, issues);
    self.renderIssueList(repo, issues);

    function enhancementFilter(issue) {
      return issue.labels.find(findEnhancement);
    }

    function findEnhancement (label) {
      return label.name === "enhancement" || label.name === "help wanted";
    }
  });
};

var features = new GitFeatures();
features.run();
