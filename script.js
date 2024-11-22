// Predefined password
const correctPassword = "vela6"; // Change this to your desired password

// Check if password is already saved in localStorage
if (localStorage.getItem("isAuthenticated") === "true") {
  // If authenticated, show protected content immediately
  document.getElementById("passwordContainer").style.display = "none";
  document.getElementById("protectedContent").style.display = "block";
}

// Function to check password
function checkPassword() {
  const passwordInput = document.getElementById("passwordInput").value;
  const passwordContainer = document.getElementById("passwordContainer");
  const protectedContent = document.getElementById("protectedContent");

  if (passwordInput === correctPassword) {
    // Save authentication status in localStorage
    localStorage.setItem("isAuthenticated", "true");

    // Hide password container and show protected content
    passwordContainer.style.display = "none";
    protectedContent.style.display = "block";
  } else {
    alert("Incorrect password. Please try again.");
  }
}

// Function to handle Enter key press
function handleKeyPress(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent default form submission (if inside a form)
    checkPassword();
  }
}

function searchBlogs() {
  const searchValue = document.getElementById("search-box").value.toLowerCase();
  const blogs = document.querySelectorAll(".blog-item");

  blogs.forEach((blog) => {
    const title = blog.querySelector("h3").textContent.toLowerCase();
    if (title.includes(searchValue)) {
      blog.style.display = "block";
    } else {
      blog.style.display = "none";
    }
  });
}
function redirectTo(url) {
  window.location.href = url; // Redirects to the specified URL
}
