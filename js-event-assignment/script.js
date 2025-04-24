// Event Handling
document.getElementById("clickBtn").addEventListener("click", () => {
    alert("Button Clicked! 🎯");
  });
  
  document.getElementById("hoverBtn").addEventListener("mouseover", () => {
    alert("You hovered! 🛸");
  });
  
  document.getElementById("keyInput").addEventListener("keypress", (e) => {
    console.log(`You pressed: ${e.key}`);
  });
  
  // Secret Action (Double click)
  document.getElementById("secretBtn").addEventListener("dblclick", () => {
    alert("🎉 Secret double-click action unlocked!");
  });
  
  // Interactive Elements
  document.getElementById("changeTextBtn").addEventListener("click", function () {
    this.textContent = "Changed!";
    this.style.backgroundColor = "#ffcc00";
  });
  
  // Simple Image Gallery
  const images = [
    "img/img2.png",
    "img/img3.png",
    "img/img4.png"
  ];
  let imgIndex = 0;
  document.getElementById("nextImgBtn").addEventListener("click", () => {
    imgIndex = (imgIndex + 1) % images.length;
    document.getElementById("galleryImg").src = images[imgIndex];
  });
  
  // Tabs
  document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab-content").forEach(content => content.classList.remove("active"));
      document.getElementById(tab.dataset.target).classList.add("active");
    });
  });
  
  // Form Validation
  document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (!email.includes("@")) {
      alert("Please enter a valid email.");
    } else if (password.length < 8) {
      alert("Password must be at least 8 characters.");
    } else {
      alert("Form submitted successfully!");
    }
  });
  
  // Real-time password feedback
  document.getElementById("password").addEventListener("input", function () {
    const feedback = document.getElementById("passwordFeedback");
    if (this.value.length < 8) {
      feedback.textContent = "Password too short!";
    } else {
      feedback.textContent = "Looking good!";
      feedback.style.color = "green";
    }
  });
  