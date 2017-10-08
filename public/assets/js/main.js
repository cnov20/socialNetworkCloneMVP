document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  const button = document.getElementById('tweet');
  const feed = document.getElementById('Feed');

  button.addEventListener('click', function() {
      let list = document.createElement('ul');
      let tweet = window.prompt('Enter Tweet (140 Characters Max)');
//      tweet.style.fontWeight = 'bold';
      list.innerHTML = '<li>This is your tweet:\n';
      feed.append(list);
      feed.append(tweet);
  });

});
