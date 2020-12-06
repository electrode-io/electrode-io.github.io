"use strict";

function GitRepos() {
}

GitRepos.prototype.getRepos = function() {
  var electrodeReposUrl = "https://api.github.com/orgs/electrode-io/repos";
  return $.ajax({
    url: electrodeReposUrl,
    method: "GET"
  });
};

GitRepos.prototype.getIssuesApi = function(repo) {
  var numberId = "{/number}";
  return repo.issues_url.replace(numberId, "");
};

GitRepos.prototype.getIssuesUrl = function(repo) {
  var api = "api.";
  return repo.issues_url.replace(api, "");
};
