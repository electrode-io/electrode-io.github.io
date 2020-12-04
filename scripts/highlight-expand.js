var codeSnippetExpand = false;

function toggleCodeSnippetBox() {
  codeSnippetExpand = !codeSnippetExpand;

  if (codeSnippetExpand) {
    document.getElementById("highlight-code-btn").className = "fa fa-minus";
    document.getElementById("highlight-code-1").style.maxHeight = "640px";
    document.getElementById("highlight-code-2").style.maxHeight = "640px";
    document.getElementById("highlight-code-3").style.maxHeight = "640px";
  } else {
    document.getElementById("highlight-code-btn").className = "fa fa-expand";
    document.getElementById("highlight-code-1").style.maxHeight = "260px";
    document.getElementById("highlight-code-2").style.maxHeight = "260px";
    document.getElementById("highlight-code-3").style.maxHeight = "260px";
  }
}
