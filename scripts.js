const apiKey = process.env.NEWS_API_KEY;
let country = "us";
let category = "general";
let url = `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&country=${country}&category=${category}`;

document.querySelector("#btnUpdate").addEventListener("click", fetchNews);

async function fetchNews() {
    try {
      buildURL();
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      displayNews(data.articles);
    } catch (error) {
      console.error('There was an error!', error);
    }
  }

  function buildURL() {
    country = document.querySelector("#Country").value;
    category = document.querySelector("#Category").value;
    url = `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&country=${country}&category=${category}`;
    console.log(country);
    console.log(category);
    console.log(url);
  }

  function displayNews(articles) {
    const newsDiv = document.querySelector('#news');

    //Clear out the div.
    while (newsDiv.firstChild) {
      newsDiv.removeChild(newsDiv.firstChild);
    }

    //Populate the div.
    for (const article of articles) {
      if (article.title !== "[Removed]") {

        const articleDiv = document.createElement('div');

        //create and append a headline to the articleDiv
        const title = document.createElement('h4');
        title.textContent = article.title;
        articleDiv.appendChild(title);
    
        // TODO: Use document.createElement and appendChild to create and append more elements
    
        newsDiv.appendChild(articleDiv);
      }
    }
}
  
fetchNews();
