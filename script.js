document.addEventListener("DOMContentLoaded", function () {
    // Search Functionality for Articles
    const searchBar = document.getElementById("searchBar");
    const articles = document.querySelectorAll(".article");

    searchBar.addEventListener("input", function () {
        const query = searchBar.value.toLowerCase();
        articles.forEach(article => {
            const title = article.querySelector("h2").innerText.toLowerCase();
            if (title.includes(query)) {
                article.style.display = "block";
            } else {
                article.style.display = "none";
            }
        });
    });

    // Show More Functionality for Articles
    const showMoreButtons = document.querySelectorAll(".show-more");
    showMoreButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Redirecting to full article...");
            // Here you can add logic to navigate to a full article page
        });
    });

    // Blog Posting Functionality
    const postButton = document.getElementById("postBlog");
    const blogContent = document.getElementById("blogContent");
    const blogPosts = document.getElementById("blogPosts");

    postButton.addEventListener("click", function () {
        const content = blogContent.value.trim();
        if (content) {
            const newPost = document.createElement("p");
            newPost.innerText = content;
            blogPosts.appendChild(newPost);
            blogContent.value = "";
        } else {
            alert("Please write something before posting.");
        }
    });
});
