$(document).ready(function() {

  $("#getQuote").on("click", function(){


    $.getJSON("https://talaikis.com/api/quotes/random/", function(json) {
      let quote = [];
      quote = (JSON.stringify(json));
      $(".twitter-share-button.data-text").html(JSON.stringify(json));
      // $(".message").html(JSON.stringify(json.author));
      $(".randomQuote").html(json.quote);
      $(".author").html(json.author);
      $(".tweetQuote").removeAttr("disabled");
});
  });

});



function tweetQuote() {
  var quoteToTweet = document.getElementById('randomQuote').innerHTML;

if (quoteToTweet.length < 281) {
  var tweetUrl = ' https://twitter.com/intent/tweet?text=' + encodeURIComponent(quoteToTweet);
   window.open(tweetUrl);
} else {
  tooLongMessage = "Sorry, this quote exceeds Twitter's 280 character limit!";
  document.getElementById('tooLong').innerHTML = tooLongMessage;
}

}
