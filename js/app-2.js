/*
  Please add all Javascript code to this file.
*/
'use strict';
$('#searchButton').click(function(event){
  event.preventDefault();
  $('#search').toggleClass('active');
});

$('#popUp').removeClass('hidden');

(function() {
  var redditURL = "https://newsapi.org/v2/top-headlines?sources=reddit-r-all&apiKey=";
  // getReddit('');

$.getJSON(redditURL, function(response) {
  // console.log(response);
  $('#popUp').addClass('hidden');

      var i = []
      for (i=0; i<response.articles.length; i++) {
        var redding = [response.articles[i]]
        var allArticles = redding;
  allArticles.forEach(function(result){
    console.log(result)
  	var $eachArticle = $('<article>').attr('class', 'article');
  	var $articleTitle = result.title;
  	var $articleDescription = result.description
  	var $entireArticleElement = $($eachArticle).append($articleTitle).append($articleDescription);
  	$($entireArticleElement).appendTo('#main');
      })
    }

  })
})();
//

//
//     function getData(response) {
//       console.log('hi');
//       // var redding = response.articles;
//       // redding.forEach(function ( response ) {
//       //   var $eachArticle = $('<article>').attr('class', 'article');
//       //   var $articleTitle = response.articles.title;
//       //   var $articleDescription = response.articles.description;
//       //   var $entireArticleElement = $($eachArticle).append($articleTitle).append($articleDescription);
//       //   $('#main').append($entireArticleElement);
//       // })
//     }
// }


// console.log(redding)
    // $("<h1></h1>").text(redding).appendTo("#main");
    // $("article").text(response.articles[5].title).appendTo(".article");

    // var allArticles = redding;
    // console.log(allArticles);











//

// (function() {
//   var httpRequest;
//   document.getElementById('feedr').onclick = function() {
//   makeRequest('https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=be564cd5d7f74f1886718dfb8193487f');
// }
// function makeRequest(url) {
//   httpRequest = new XMLHttpRequest();
//
//   if (!httpRequest) {
//     console.log('cannot create an XMLHttpRequest');
//     return false;
//   }
//
//   httpRequest.onreadystatechange = responseMethod;
//   httpRequest.open('GET', url);
//   httpRequest.send();
// }
//
// function responseMethod() {
//   if (httpRequest.readyState === XMLHttpRequest.DONE) {
//     if (httpRequest.status === 200) {
//       console.log('hello?');
//       document.getElementById('main').innerHTML = httpRequest.responseText;
//     } else {
//       console.log('error there is prob');
//     }
//     }
//   }
// })();
