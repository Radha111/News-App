const apiKey = "YOUR_API_KEY";

function getNews() {
    const query = document.getElementById("searchInput").value || "india";
    const newsContainer = document.getElementById("newsContainer");

    newsContainer.innerHTML = "Loading...";

    fetch(`https://gnews.io/api/v4/search?q=${query}&lang=en&apikey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            newsContainer.innerHTML = "";

            data.articles.forEach(article => {
                const card = document.createElement("div");
                card.className = "news-card";

                card.innerHTML = `
                    <img src="${article.image}" alt="News Image">
                    <h3>${article.title}</h3>
                    <p>${article.description || ""}</p>
                    <a href="${article.url}" target="_blank">Read More →</a>
                `;

                newsContainer.appendChild(card);
            });
        })
        .catch(() => {
            newsContainer.innerHTML = "Failed to load news.";
        });
}
