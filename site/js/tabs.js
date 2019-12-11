(function() {

  var activeClass = 'uk-active';
  var hiddenClass = 'uk-hidden';

  function changeTab(tabsHeader, tabsContent, tabIndex) {
    for (var i = 0; i < tabsHeader.children.length; i++)
      tabsHeader.children[i].className = tabsContent.children[i].className = i === tabIndex ? activeClass : hiddenClass;
  }

  function attachClickEvent(anchorLink, tabsHeader, tabsContent, tabIndex) {
    anchorLink.onclick = function(ev) {
      ev.preventDefault();
      changeTab(tabsHeader, tabsContent, tabIndex);
    }
  }

  function processSingleGroup(tabsHeader, tabsContent) {
    for (var i = 0; i < tabsHeader.children.length; i++) {
      var tab = tabsHeader.children[i];
      var isActiveTab = tab.className === activeClass;

      tabsContent.children[i].className = isActiveTab ? activeClass : hiddenClass;

      attachClickEvent(tab.firstChild, tabsHeader, tabsContent, i);
    }
  }

  function getTabsContentId(tabsHeader) {
    var data = tabsHeader.getAttribute('data-uk-switcher');
    return data.substring(data.indexOf('\'') + 2, data.lastIndexOf('\''));
  }

  function init() {
    // Iterate over all tab groups (one page may have multiple)
    Array.from(document.getElementsByClassName('uk-tab')).forEach(function(tabsHeader) {
      var tabsContentId = getTabsContentId(tabsHeader);
      var tabsContent = document.getElementById(tabsContentId);

      processSingleGroup(tabsHeader, tabsContent);
    });
  }

  // The code snippets script initializes first as it relies on containers height.
  // And because of the HTML nature, height of hidden containers can't be measured.
  setTimeout(function() {
    init();
  })

})();
