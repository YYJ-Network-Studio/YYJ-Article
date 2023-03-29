function search() {
    let keyword = document.getElementById("searchBar").value.toLowerCase(); // Get <input type="text" id="searchBar">
    let articles = document.querySelectorAll(".article-list li"); // Get all li in .article-list
  
    articles.forEach(function(article) {
      let title = article.querySelector("a").textContent.toLowerCase();
      let hashtags = article.querySelectorAll(".hashtag"); // .querySelectorAll + for to get all .hashtags
      let match = false;

      // Search every title and hashtag
      if (title.includes(keyword)) {
        match = true;
      } else {
        hashtags.forEach(function(hashtag) {
          if (hashtag.textContent.toLowerCase().includes(keyword)) {
            match = true;
          }
        });
      }
      if (match) {
        article.style.display = "table";
      } else {
        article.style.display = "none";
      }
    });
  }  
function searchByHashtag(keyword) {
  let articles = document.querySelectorAll(".article-list li");
    
  articles.forEach(function(article) {
    let hashtags = article.querySelectorAll(".hashtag");
    let match = false;
    
    hashtags.forEach(function(hashtags) {
      if (hashtags.textContent.toLowerCase().includes(keyword)) {
        match = true;
      }
    });
    if (match) {
      article.style.display = "table";
    } else {
      article.style.display = "none";
    }
  });
}
  