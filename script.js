// Predefined password
const correctPassword = "vela6"; // Change this to your desired password

// Check if password is already saved in localStorage
if (localStorage.getItem("isAuthenticated") === "true") {
  document.getElementById("passwordContainer").style.display = "none";
  document.getElementById("protectedContent").style.display = "block";
}

// Function to check password
function checkPassword() {
  const passwordInput = document.getElementById("passwordInput").value;

  if (passwordInput === correctPassword) {
    localStorage.setItem("isAuthenticated", "true"); // Save authentication status
    document.getElementById("passwordContainer").style.display = "none";
    document.getElementById("protectedContent").style.display = "block";
  } else {
    alert("Incorrect password. Please try again.");
  }
}

// Function to handle Enter key press in password input
function handleKeyPress(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    checkPassword();
  }
}

// Function to filter blogs by search input
function searchBlogs() {
  const searchValue = document.getElementById("search-box").value.toLowerCase();
  const blogs = document.querySelectorAll(".blog-item");

  blogs.forEach((blog) => {
    const title = blog.querySelector("h3").textContent.toLowerCase();
    blog.style.display = title.includes(searchValue) ? "block" : "none";
  });
}

// Function to redirect to a blog's URL
function redirectTo(url) {
  window.location.href = url;
}

document.addEventListener("DOMContentLoaded", () => {
  // Select all category buttons and blog items
  const categoryButtons = document.querySelectorAll(".category-button");
  const blogItems = document.querySelectorAll(".blog-item");

  // Add click event listener to each button
  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove the "active" class from all buttons
      categoryButtons.forEach((btn) => btn.classList.remove("active"));

      // Add "active" class to the clicked button
      button.classList.add("active");

      // Get the selected category from the button's data-category attribute
      const selectedCategory = button.getAttribute("data-category");

      // Show or hide blogs based on the selected category
      blogItems.forEach((item) => {
        if (
          item.getAttribute("data-category") === selectedCategory ||
          selectedCategory === "All"
        ) {
          item.style.display = "block"; // Show matching blogs
        } else {
          item.style.display = "none"; // Hide non-matching blogs
        }
      });
    });
  });
});
