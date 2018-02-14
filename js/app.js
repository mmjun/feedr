/*

new york times API: https://api.nytimes.com/svc/news/v3/content/content.json
news API: https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=be564cd5d7f74f1886718dfb8193487f
          https://newsapi.org/v2/top-headlines?sources=reddit-r-all&apiKey=be564cd5d7f74f1886718dfb8193487f

  Please add all Javascript code to this file.
*/
'use strict';
$('#searchButton').click(function(event){
  event.preventDefault();
  $('#search').toggleClass('active');
});

$('#popUp').removeClass('hidden');
(function() {
  var apiKey = config.REDDIT_API;
  var redditURL = "https://newsapi.org/v2/top-headlines?sources=reddit-r-all&apiKey=";
  getReddit('');

  function getReddit() {
    $.ajax({
      dataType: 'json',
      url: redditURL + apiKey,
      success: function(response) {
        getData(response);
      },
      error: function() {
        console.log('no')
      }
    })
  }
  // console.log(response.articles

    // function getData(response) {
    //   var i = []
    //   for (i=0; i<response.articles.length; i++) {
    //     var redding = response.articles[i];
    //     };
    // }

    //
    // redding.forEach(function(result){
    //   // var $eachArticle = $<'article>').attr('class', 'article');
    //   // var $articleTitle =
    // })
  function getData(response) {
      $('#popUp').addClass('hidden');
    var redding = response
    var i = []
    for (i=0; i<response.articles.length; i++) {
      var redding = [response.articles[i]]; // <<<<<

      redding.forEach(function(result) {
        // console.log(result.title);
        var $eachArticle = $("<article>").attr('class', 'article');
        var $articleTitle = result.title
        var $allReddit = $($eachArticle).append($articleTitle);
        // $("<h3></h3>").text($allReddit).appendTo("#here");
        $('.article').append($allReddit);


        // var $articleTitle = result.title;
        // $('.articleContent').append($articleTitle);
        // // var $articleAuthor = result.author;
        // var $articleURL = result.url;
        // var $articleDescription = result.description
        // var $entireArticleElement = $($eachArticle).append($articleTitle);
        // // var $entireArticleElement = $($articleTitle).append($articleAuthor);
        // // $($entireArticleElement).appendTo('.articleContent');
        // // $('.articleContent').append($entireArticleElement);
        // // console.log($articleTitle)
      });
}

    };
    // redding.forEach(function(result){
  	// // var $eachArticle = $('<article>').attr('class', 'article');
  	// // var $articleTitle = result.title;
  	// // var $articleDescription = result.description
  	// // var $entireArticleElement = $($eachArticle).append($articleTitle).append($articleDescription);
  	// // $($entireArticleElement).appendTo('#main');
    // console.log(result);



      // var redding = response.articles;
//       var redding = response.articles[i]
//       redding.forEach(function ( result ) {
//         	var $eachArticle = $('<article>').attr('class', 'article');
//         	var $articleTitle = result.title;
//         	var $articleDescription = result.description
//         	var $entireArticleElement = $($eachArticle).append($articleTitle).append($articleDescription);
//         	$($entireArticleElement).appendTo('#main');
//
// }
    // $("<h1></h1>").text(redding).appendTo("#main");
    // $("article").text(response.articles[5].title).appendTo(".article");

    // var allArticles = redding;
    // console.log(allArticles);
// }
})();









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
