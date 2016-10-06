// //ajax GET call for electrode-io repo
$.ajax({url: "https://api.github.com/repos/electrode-io/electrode-io.github.io/issues", success: function(returndata){

  var issues = returndata;

  if(issues.length > 2) {
    var issueArray = $.map(issues, function(issue, index) {

        var issue = {
        issueTitle: issue.title,
        issueNumber: issue.number,
        issueUrl: issue.html_url,
        issueLabel: issue.labels
      };
      return issue;
    });

    document.getElementById('site-subheader').innerHTML = "Electrode-io";
    var siteA = document.createElement("a");
    siteA.setAttribute("href", "https://github.com/electrode-io/electrode-io.github.io");
    document.getElementById("site-subheader").appendChild(siteA);

    for (i = 0; i < 3; i++ ) {

      var siteOl = document.createElement("ol");
      siteOl.setAttribute("class", "issue-ol");
      var siteDiv = document.createElement("div");
      siteDiv.setAttribute("class", "row");

      var siteDivATag = document.createElement("div");
      siteDivATag.setAttribute("class", "issue-number col-xs-2 col-md-2");

      var siteDivTitle = document.createElement("div");
      siteDivTitle.setAttribute("class", "issue-title col-xs-10 col-md-10");
      siteDivTitle.innerHTML = issueArray[i].issueTitle;

      var siteDivUrl = document.createElement("a");
      siteDivUrl.setAttribute("href", issueArray[i].issueUrl);
      siteDivUrl.innerHTML = issueArray[i].issueNumber;


      siteDivATag.appendChild(siteDivUrl);
      siteDiv.appendChild(siteDivATag);
      siteDiv.appendChild(siteDivTitle);

      siteOl.appendChild(siteDiv);
      document.getElementById("issue-site").appendChild(siteOl);
    };
  }
}});

// //ajax GET call for electrode-electrify repo
$.ajax({url: "https://api.github.com/repos/electrode-io/electrode-electrify/issues", success: function(returndata){
  var issues = returndata;

  if(issues.length > 2) {
    var issueArray = $.map(issues, function(issue, index) {

        var issue = {
        issueTitle: issue.title,
        issueNumber: issue.number,
        issueUrl: issue.html_url,
        issueLabel: issue.labels
      };
      return issue;
    });

    document.getElementById('electrify-subheader').innerHTML = "Electrode-Electrify";
    var electrifyA = document.createElement("a");
    electrifyA.setAttribute("href", "https://github.com/electrode-io/electrode-electrify");
    document.getElementById("electrify-subheader").appendChild(electrifyA);

    for (i = 0; i < 3; i++ ) {

      var electrifyOl = document.createElement("ol");
      electrifyOl.setAttribute("class", "electrify-issue-ol");
      var electrifyDiv = document.createElement("div");
      electrifyDiv.setAttribute("class", "row");

      var electrifyDivATag = document.createElement("div");
      electrifyDivATag.setAttribute("class", "issue-number col-xs-2 col-md-2");

      var electrifyDivTitle = document.createElement("div");
      electrifyDivTitle.setAttribute("class", "issue-title col-xs-10 col-md-10");
      electrifyDivTitle.innerHTML = issueArray[i].issueTitle;

      var electrifyDivUrl = document.createElement("a");
      electrifyDivUrl.setAttribute("href", issueArray[i].issueUrl);
      electrifyDivUrl.innerHTML = issueArray[i].issueNumber;


      electrifyDivATag.appendChild(electrifyDivUrl);
      electrifyDiv.appendChild(electrifyDivATag);
      electrifyDiv.appendChild(electrifyDivTitle);

      electrifyOl.appendChild(electrifyDiv);
      document.getElementById("issue-electrify").appendChild(electrifyOl);
    };
  }
}});

// //ajax GET call for electrode-react-ssr-caching repo
$.ajax({url: "https://api.github.com/repos/electrode-io/electrode-react-ssr-caching/issues", success: function(returndata) {

  var issues = returndata;
  if(issues.length > 2) {
    var issueArray = $.map(issues, function(issue, index) {

        var issue = {
        issueTitle: issue.title,
        issueNumber: issue.number,
        issueUrl: issue.html_url,
        issueLabel: issue.labels
      };
      return issue;
    });

    document.getElementById('ssr-caching-subheader').innerHTML = "Electrode React-SSR-Caching";
    var ssrCachingA = document.createElement("a");
    ssrCachingA.setAttribute("href", "https://github.com/electrode-io/electrode-react-ssr-caching");
    document.getElementById("ssr-caching-subheader").appendChild(ssrCachingA);

    for (i = 0; i < 3; i++ ) {

      var ssrCachingOl = document.createElement("ol");
      ssrCachingOl.setAttribute("class", "issue-ol");
      var ssrCachingDiv = document.createElement("div");
      ssrCachingDiv.setAttribute("class", "row");

      var ssrCachingDivATag = document.createElement("div");
      ssrCachingDivATag.setAttribute("class", "issue-number col-xs-2 col-md-2");

      var ssrCachingDivTitle = document.createElement("div");
      ssrCachingDivTitle.setAttribute("class", "issue-title col-xs-10 col-md-10");
      ssrCachingDivTitle.innerHTML = issueArray[i].issueTitle;

      var ssrCachingDivUrl = document.createElement("a");
      ssrCachingDivUrl.setAttribute("href", issueArray[i].issueUrl);
      ssrCachingDivUrl.innerHTML = issueArray[i].issueNumber;


      ssrCachingDivATag.appendChild(ssrCachingDivUrl);
      ssrCachingDiv.appendChild(ssrCachingDivATag);
      ssrCachingDiv.appendChild(ssrCachingDivTitle);

      ssrCachingOl.appendChild(ssrCachingDiv);
      document.getElementById("issue-ssr-caching").appendChild(ssrCachingOl);
    };
  }
}});

// //ajax GET call for electrode-explorer repo
$.ajax({url: "https://api.github.com/repos/electrode-io/electrode-explorer/issues", success: function(returndata){
  var issues = returndata;
  if(issues.length > 2) {
    var issueArray = $.map(issues, function(issue, index) {

        var issue = {
        issueTitle: issue.title,
        issueNumber: issue.number,
        issueUrl: issue.html_url,
        issueLabel: issue.labels
      };
      return issue;
    });

    document.getElementById('explorer-subheader').innerHTML = "Electrode Explorer";
    var explorerA = document.createElement("a");
    explorerA.setAttribute("href", "https://github.com/electrode-io/electrode-react-ssr-caching");
    document.getElementById("explorer-subheader").appendChild(explorerA);

    for (i = 0; i < 3; i++ ) {

      var explorerOl = document.createElement("ol");
      explorerOl.setAttribute("class", "issue-ol");
      var explorerDiv = document.createElement("div");
      explorerDiv.setAttribute("class", "row");

      var explorerDivATag = document.createElement("div");
      explorerDivATag.setAttribute("class", "issue-number col-xs-2 col-md-2");

      var explorerDivTitle = document.createElement("div");
      explorerDivTitle.setAttribute("class", "issue-title col-xs-10 col-md-10");
      explorerDivTitle.innerHTML = issueArray[i].issueTitle;

      var explorerDivUrl = document.createElement("a");
      explorerDivUrl.setAttribute("href", issueArray[i].issueUrl);
      explorerDivUrl.innerHTML = issueArray[i].issueNumber;


      explorerDivATag.appendChild(explorerDivUrl);
      explorerDiv.appendChild(explorerDivATag);
      explorerDiv.appendChild(explorerDivTitle);

      explorerOl.appendChild(explorerDiv);
      document.getElementById("issue-ssr-caching").appendChild(explorerOl);
    };
  }
}});

// //ajax GET call for redux-router-engine repo
$.ajax({url: "https://api.github.com/repos/electrode-io/electrode-redux-router-engine/issues", success: function(returndata){
  var issues = returndata;
  if(issues.length > 2) {
    var issueArray = $.map(issues, function(issue, index) {

        var issue = {
        issueTitle: issue.title,
        issueNumber: issue.number,
        issueUrl: issue.html_url,
        issueLabel: issue.labels
      };
      return issue;
    });

    document.getElementById('redux-subheader').innerHTML = "Electrode Redux-Router-Engine";
    var reduxA = document.createElement("a");
    reduxA.setAttribute("href", "https://github.com/electrode-io/electrode-redux-router-engine");
    document.getElementById("redux-subheader").appendChild(reduxA);

    for (i = 0; i < 3; i++ ) {

      var reduxOl = document.createElement("ol");
      reduxOl.setAttribute("class", "issue-ol");
      var reduxDiv = document.createElement("div");
      reduxDiv.setAttribute("class", "row");

      var reduxDivATag = document.createElement("div");
      reduxDivATag.setAttribute("class", "issue-number col-xs-2 col-md-2");

      var reduxDivTitle = document.createElement("div");
      reduxDivTitle.setAttribute("class", "issue-title col-xs-10 col-md-10");
      reduxDivTitle.innerHTML = issueArray[i].issueTitle;

      var reduxDivUrl = document.createElement("a");
      reduxDivUrl.setAttribute("href", issueArray[i].issueUrl);
      reduxDivUrl.innerHTML = issueArray[i].issueNumber;


      reduxDivATag.appendChild(reduxDivUrl);
      reduxDiv.appendChild(reduxDivATag);
      reduxDiv.appendChild(reduxDivTitle);

      reduxOl.appendChild(reduxDiv);
      document.getElementById("issue-redux").appendChild(reduxOl);
    };
  }
}});

// //ajax GET call for stateless-csrf repo
$.ajax({url: "https://api.github.com/repos/electrode-io/electrode-csrf-jwt/issues", success: function(returndata){
  var issues = returndata;
  if(issues.length > 2) {
    var issueArray = $.map(issues, function(issue, index) {

        var issue = {
        issueTitle: issue.title,
        issueNumber: issue.number,
        issueUrl: issue.html_url,
        issueLabel: issue.labels
      };
      return issue;
    });

    document.getElementById('csrf-subheader').innerHTML = "Electrode Redux-Router-Engine";
    var csrfA = document.createElement("a");
    csrfA.setAttribute("href", "https://github.com/electrode-io/electrode-redux-router-engine");
    document.getElementById("csrf-subheader").appendChild(csrfA);

    for (i = 0; i < 3; i++ ) {

      var csrfOl = document.createElement("ol");
      csrfOl.setAttribute("class", "issue-ol");
      var csrfDiv = document.createElement("div");
      csrfDiv.setAttribute("class", "row");

      var csrfDivATag = document.createElement("div");
      csrfDivATag.setAttribute("class", "issue-number col-xs-2 col-md-2");

      var csrfDivTitle = document.createElement("div");
      csrfDivTitle.setAttribute("class", "issue-title col-xs-10 col-md-10");
      csrfDivTitle.innerHTML = issueArray[i].issueTitle;

      var csrfDivUrl = document.createElement("a");
      csrfDivUrl.setAttribute("href", issueArray[i].issueUrl);
      csrfDivUrl.innerHTML = issueArray[i].issueNumber;


      csrfDivATag.appendChild(csrfDivUrl);
      csrfDiv.appendChild(csrfDivATag);
      csrfDiv.appendChild(csrfDivTitle);

      csrfOl.appendChild(csrfDiv);
      document.getElementById("issue-csrf").appendChild(csrfOl);
    };
  }
}});
//

// //ajax GET call for electrode-confippet repo
$.ajax({url: "https://api.github.com/repos/electrode-io/electrode-confippet/issues", success: function(returndata){
  var issues = returndata;
  if(issues.length > 2) {
    var issueArray = $.map(issues, function(issue, index) {

        var issue = {
        issueTitle: issue.title,
        issueNumber: issue.number,
        issueUrl: issue.html_url,
        issueLabel: issue.labels
      };
      return issue;
    });

    document.getElementById('confippet-subheader').innerHTML = "Electrode Confippet";
    var confippetA = document.createElement("a");
    confippetA.setAttribute("href", "https://github.com/electrode-io/electrode-confippet");
    document.getElementById("confippet-subheader").appendChild(confippetA);

    for (i = 0; i < 3; i++ ) {

      var confippetOl = document.createElement("ol");
      confippetOl.setAttribute("class", "issue-ol");
      var confippetDiv = document.createElement("div");
      confippetDiv.setAttribute("class", "row");

      var confippetDivATag = document.createElement("div");
      confippetDivATag.setAttribute("class", "issue-number col-xs-2 col-md-2");

      var confippetDivTitle = document.createElement("div");
      confippetDivTitle.setAttribute("class", "issue-title col-xs-10 col-md-10");
      confippetDivTitle.innerHTML = issueArray[i].issueTitle;

      var confippetDivUrl = document.createElement("a");
      confippetDivUrl.setAttribute("href", issueArray[i].issueUrl);
      confippetDivUrl.innerHTML = issueArray[i].issueNumber;


      confippetDivATag.appendChild(confippetDivUrl);
      confippetDiv.appendChild(confippetDivATag);
      confippetDiv.appendChild(confippetDivTitle);

      confippetOl.appendChild(confippetDiv);
      document.getElementById("issue-confippet").appendChild(confippetOl);
    };
  }
}});

// //ajax GET call for above-the-fold repo
$.ajax({url: "https://api.github.com/repos/electrode-io/above-the-fold-only-server-render/issues", success: function(returndata){
  var issues = returndata;
  if(issues.length > 2) {
    var issueArray = $.map(issues, function(issue, index) {

        var issue = {
        issueTitle: issue.title,
        issueNumber: issue.number,
        issueUrl: issue.html_url,
        issueLabel: issue.labels
      };
      return issue;
    });

    document.getElementById('above-fold-subheader').innerHTML = "Electrode Above-the-Fold-Only-Server-Render";
    var aboveFoldA = document.createElement("a");
    aboveFoldA.setAttribute("href", "https://github.com/electrode-io/above-the-fold-only-server-render");
    document.getElementById("above-fold-subheader").appendChild(aboveFoldA);

    for (i = 0; i < 3; i++ ) {

      var aboveFoldOl = document.createElement("ol");
      aboveFoldOl.setAttribute("class", "issue-ol");
      var aboveFoldDiv = document.createElement("div");
      aboveFoldDiv.setAttribute("class", "row");

      var aboveFoldDivATag = document.createElement("div");
      aboveFoldDivATag.setAttribute("class", "issue-number col-xs-2 col-md-2");

      var aboveFoldDivTitle = document.createElement("div");
      aboveFoldDivTitle.setAttribute("class", "issue-title col-xs-10 col-md-10");
      aboveFoldDivTitle.innerHTML = issueArray[i].issueTitle;

      var aboveFoldDivUrl = document.createElement("a");
      aboveFoldDivUrl.setAttribute("href", issueArray[i].issueUrl);
      aboveFoldDivUrl.innerHTML = issueArray[i].issueNumber;


      aboveFoldDivATag.appendChild(aboveFoldDivUrl);
      aboveFoldDiv.appendChild(aboveFoldDivATag);
      aboveFoldDiv.appendChild(aboveFoldDivTitle);

      aboveFoldOl.appendChild(aboveFoldDiv);
      document.getElementById("issue-above-fold").appendChild(aboveFoldOl);
    };
  }
}});

// //ajax GET call for electrode-bundle-analyzer repo
$.ajax({url: "https://github.com/electrode-io/electrode-bundle-analyzer/issues", success: function(returndata){
  var issues = returndata;
  if(issues.length > 2) {
    var issueArray = $.map(issues, function(issue, index) {

        var issue = {
        issueTitle: issue.title,
        issueNumber: issue.number,
        issueUrl: issue.html_url,
        issueLabel: issue.labels
      };
      return issue;
    });

    document.getElementById('bundle-subheader').innerHTML = "Electrode Above-the-Fold-Only-Server-Render";
    var bundleA = document.createElement("a");
    bundleA.setAttribute("href", "https://github.com/electrode-io/above-the-fold-only-server-render");
    document.getElementById("bundle-subheader").appendChild(bundleA);

    for (i = 0; i < 3; i++ ) {

      var bundleOl = document.createElement("ol");
      bundleOl.setAttribute("class", "issue-ol");
      var bundleDiv = document.createElement("div");
      bundleDiv.setAttribute("class", "row");

      var bundleDivATag = document.createElement("div");
      bundleDivATag.setAttribute("class", "issue-number col-xs-2 col-md-2");

      var bundleDivTitle = document.createElement("div");
      bundleDivTitle.setAttribute("class", "issue-title col-xs-10 col-md-10");
      bundleDivTitle.innerHTML = issueArray[i].issueTitle;

      var bundleDivUrl = document.createElement("a");
      bundleDivUrl.setAttribute("href", issueArray[i].issueUrl);
      bundleDivUrl.innerHTML = issueArray[i].issueNumber;


      bundleDivATag.appendChild(bundleDivUrl);
      bundleDiv.appendChild(bundleDivATag);
      bundleDiv.appendChild(bundleDivTitle);

      bundleOl.appendChild(bundleDiv);
      document.getElementById("issue-bundle").appendChild(bundleOl);
    };
  }
}});
