// Predefined password
const correctPassword = "vela6"; // Change this to your desired password

// Function to check password
function checkPassword() {
  const passwordInput = document.getElementById("passwordInput").value;
  const passwordContainer = document.getElementById("passwordContainer");
  const protectedContent = document.getElementById("protectedContent");

  if (passwordInput === correctPassword) {
    // Hide password container and show protected content
    passwordContainer.style.display = "none";
    protectedContent.style.display = "block";
  } else {
    alert("Incorrect password. Please try again.");
  }
}
