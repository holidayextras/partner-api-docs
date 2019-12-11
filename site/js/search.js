(function() {

  var idx = null;

  function displaySearchResults(searchTerm, searchResults, store) {
    var searchResultsElement = document.getElementById('search-results');

    if (searchResults.length) {
      var appendString = '';

      for (var i = 0; i < searchResults.length; i++) {
        var item = store[searchResults[i].ref];
        appendString += '<li>';
        appendString += '<a href="' + item.url + '"><h3>' + item.title + '</h3></a>';
        if (searchTerm) {
          var index = item.content.toLowerCase().indexOf(searchTerm.toLowerCase());
          if (index > -1)
            appendString += '<p>' + item.content.substr(index, 100).replace(/`/g, '') + '...</p>';
        }
        appendString += '</li>';
      }

      searchResultsElement.innerHTML = appendString;
      return;
    }

    searchResultsElement.innerHTML = '<li>No results found</li>';
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      if (pair[0] === variable)
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
    }
  }

  function search() {
    var searchTerm = getQueryVariable('query');
    if (searchTerm) {
      document.getElementById('search-box').setAttribute('value', searchTerm);

      var searchResults = idx.search(searchTerm);
      displaySearchResults(searchTerm, searchResults, window.store);
    }
  }

  function init() {
    idx = lunr(function() {
      this.field('id');
      this.field('title', { boost: 10 });
      this.field('content');
      for (var key in window.store) { 
        this.add({
          'id': key,
          'title': window.store[key].title,
          'content': window.store[key].content
        });
      }
    });

    // Once we're in the search page already, we don't need to do a real page reload (form submission)
    // because we already have the necessary data loaded and lunr instance.
    var isSearchPage = document.location.pathname.toLowerCase().indexOf('search') !== -1;
    if (isSearchPage) {
      var form = document.getElementById('search-form');
      form.onsubmit = function(ev) {
        ev.preventDefault();

        window.history.pushState('', '', '/search/?query=' + encodeURIComponent(document.getElementById('search-box').value));
        search();
      }
    }
  }

  init();
  search();

})();
