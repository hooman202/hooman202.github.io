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
      const titlePara = document.createElement("span");

      // Set the text content and styling of the elements
      titlePara.innerHTML = `<b>[${newsItem.date}]: </b> ${newsItem.title}`;

      // Append the elements to the news container
      newsDiv.appendChild(titlePara);
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
      console.log("Error fetching news data:", error);
    });