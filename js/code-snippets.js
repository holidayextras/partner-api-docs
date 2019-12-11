(function() {

  var maxHeight = 150; // px (items below that height will be ignored)

  function toggle(anchorLink, snippetElem) {
    var isExpanded = anchorLink.href == 'javascript:1;';

    anchorLink.href = isExpanded ? 'javascript:0;'      : 'javascript:1;';
    anchorLink.text = isExpanded ? 'Expand the example' : 'Collapse the example';

    snippetElem.style.maxHeight = isExpanded ? maxHeight + 'px' : 'none';
  }

  function createToggleAnchorLink(snippetElem) {
    var anchorLink = document.createElement('a');
    anchorLink.text = 'Expand the example';
    anchorLink.href = 'javascript:0;';
    anchorLink.onclick = function(ev) {
      ev.preventDefault();
      toggle(anchorLink, snippetElem);
    }

    return anchorLink;
  }

  function init() {
    var codeSnippets = Array.from(document.getElementsByClassName('highlight')).filter(function(elem) {
      return elem.nodeName == 'PRE' && elem.offsetHeight > maxHeight;
    });

    for (var i = 0; i < codeSnippets.length; i++) {
      var elem = codeSnippets[i];
      var link = createToggleAnchorLink(elem);

      elem.style.maxHeight = maxHeight + 'px';
      elem.parentElement.insertBefore(link, elem);
    }
  }

  init();

})();
