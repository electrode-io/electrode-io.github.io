var gitbookMobileLink;

function changeIframeLink() {
  var native = "https://electrode.gitbooks.io/electrode-native/content",
      contribute = "https://electrode.gitbooks.io/electrode-native/overview/contributing.html",
      api = "https://electrode.gitbooks.io/electrode-native/platform-parts/apis.html",
      container = "https://electrode.gitbooks.io/electrode-native/platform-parts/container.html",
      cauldron = "https://electrode.gitbooks.io/electrode-native/platform-parts/cauldron.html",
      runner = "https://electrode.gitbooks.io/electrode-native/platform-parts/runner.html";

  if (gitbookMobileLink == "contribute") {
    document.getElementById("gitbook-iframe").src = "https://electrode.gitbooks.io/electrode-native/overview/contributing.html";
  } else if (gitbookMobileLink == "api") {
    document.getElementById("gitbook-iframe").src = api;
  } else if (gitbookMobileLink == "container") {
    document.getElementById("gitbook-iframe").src = container;
  } else if (gitbookMobileLink == "cauldron") {
    document.getElementById("gitbook-iframe").src = cauldron;
  } else if (gitbookMobileLink == "runner") {
    document.getElementById("gitbook-iframe").src = runner;
  } else {
    document.getElementById("gitbook-iframe").src = native;
  }
}

function changeIframeVariable(variable) {
  gitbookMobileLink = variable;
}
