(function() {
  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-results');

    if (results.length) {
      var appendString = '';

      for (var i = 0; i < results.length; i++) {
        var item = store[results[i].ref];
        appendString += '<li style="margin-top: 20px">';
        appendString += '<a href="' + item.url + '"><h3>' + item.title + '</h3></a>';
        if (searchTerm) {
          var index = item.content.toLowerCase().indexOf(searchTerm.toLowerCase());
          if (index > -1) {
            var content = item.content.substr(index, 100).replace(/`/g, '');
            appendString += '<p>' + content + '...</p>';
          }
        }
        appendString += '</li>';
      }

      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<li>No results found</li>';
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQueryVariable('query');

  if (searchTerm) {
    document.getElementById('search-box').setAttribute("value", searchTerm);

    var idx = lunr(function () {
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

    var results = idx.search(searchTerm);
    displaySearchResults(results, window.store);
  }
})();
