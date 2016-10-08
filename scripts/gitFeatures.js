"use strict";

function GitFeatures() {
  this.repos = this.getRepos();
  this.issueHeaderId = "help-features";
  this.issueListIdPrefix = "feature-list-";
}

GitFeatures.prototype = Object.create(GitIssues.prototype);
GitFeatures.prototype.constructor = GitFeatures;

GitFeatures.prototype.render = function(repo) {
  var self = this;

  self.getData(repo).then(function(issues) {
    var maxLength = 3;
    var features = issues.filter(enhancementFilter);

    if (features.length < maxLength) {
      return;
    }

    self.appendIssueHeader(repo);
    self.renderIssueList(repo, features);

    function enhancementFilter(issue) {
      return issue.labels.find(findEnhancement);
    }

    function findEnhancement (label) {
      return label.name === "enhancement";
    }
  });
};

var features = new GitFeatures();
features.run();
