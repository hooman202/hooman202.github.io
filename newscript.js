// Function to display the latest news
function displayLatestNews(newsData) {
    // Sort the newsData array by date in descending order
    const sortedNews = newsData.sort((a, b) => new Date(b.date) - new Date(a.date));
  
    // Get the container element
    const newsContainer = document.getElementById("news-container");
  
    // Clear the container
    newsContainer.innerHTML = "";
  
    // Iterate over the sorted news items and generate HTML markup
    for (let i = 0; i < sortedNews.length; i++) {
      const newsItem = sortedNews[i];
  
      // Create elements for the news item
      const newsDiv = document.createElement("div");
      const titleHeading = document.createElement("h2");
      const datePara = document.createElement("p");
      const contentPara = document.createElement("p");
  
      // Set the text content of the elements
      titleHeading.textContent = newsItem.title;
      datePara.textContent = newsItem.date;
      contentPara.textContent = newsItem.content;
  
      // Append the elements to the news container
      newsDiv.appendChild(titleHeading);
      newsDiv.appendChild(datePara);
      newsDiv.appendChild(contentPara);
      newsContainer.appendChild(newsDiv);
    }
  }
  
  // Fetch news data from a JSON file
  fetch("newsData.json")
    .then(response => response.json())
    .then(data => {
      // Call the function to display the latest news with the fetched data
      displayLatestNews(data);
    })
    .catch(error => {
      console.log("Hooman : Error fetching news data:", error);
    });