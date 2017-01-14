$(document).ready(function() {
  var currPage = findGetParameter('page');
  currPage = currPage ? currPage : 0;
  currPage = parseInt(currPage, 10);
  var nextPage = currPage + 1;
  var prevPage = currPage - 1;

  var z = '';
  z += '<h2 class="custom-pager">';
  if (prevPage >= 0) {
    z += '<a href="?page=' + prevPage + '">&larr; Prev Page</a>';
  }
  z += '<a href="?page=' + nextPage + '">Next Page &rarr;</a>';
  z += '</h2>';
  $('.screens-pager').html(z);
});

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
    .substr(1)
        .split("&")
        .forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
    return result;
}