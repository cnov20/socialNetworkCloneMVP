document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  const button = document.getElementById('tweet');
  const feed = document.getElementById('Feed');

  //const tweet = {};

  button.addEventListener('click', function () {
//      let list = document.createElement('ul');
      const tweet = window.prompt('Enter Tweet (140 Characters Max)');
      const div = document.createElement('div', saveTweet);
      div.innerHTML = tweet;
//      console.log(tweet);
//      tweet.style.fontWeight = 'bold';
//      list.innerHTML = '<li>This is your tweet:\n';

      function insertAfter(newNode, referenceNode) {
	  referenceNode.parentNode.insertBefore(newNode, referenceNode.nexSibling);
      }

      insertAfter(div, feed);

      function saveTweet(event) {

	let tweet = {
	    tweet: div.innerHTML
	}

	if (localStorage.getItem('tweets') === null) {

	    let tweets = [];

	    tweets.push(tweet);
//	console.log(tweet);
//	let tweet = window.prompt.value;
//	console.log(tweet);

	    localStorage.setItem('tweets', JSON.stringify(tweets));
	} else {
	    let tweets = JSON.parse(localStorage.getItem('tweets'));
	    tweets.push(tweet);
	    localStorage.setItem('tweets', JSON.stringify(tweets));
	}

    }

      saveTweet(button);
  });

});
