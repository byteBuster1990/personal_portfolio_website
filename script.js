<<<<<<< HEAD
function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    //Call showPopup here

    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Reset the value of the textarea
    recommendation.value = "";
  }
  showPopup(true);
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
=======
// ── Recommendation form ───────────────────────────────────────────────
function addRecommendation() {
  const nameInput = document.getElementById("rec-name");
  const textInput = document.getElementById("new_recommendation");

  const name = nameInput ? nameInput.value.trim() : "";
  const text = textInput ? textInput.value.trim() : "";

  if (!text) {
    if (textInput) textInput.focus();
    return;
  }

  const container = document.getElementById("all_recommendations");
  if (!container) return;

  const byline = name ? `— ${name}` : "— Anonymous";

  const card = document.createElement("div");
  card.classList.add("recommendation");
  card.innerHTML = `
    <span class="quote-mark">&#8220;</span>
    ${escapeHTML(text)}
    <span class="quote-mark">&#8221;</span>
    <p class="recommender">${escapeHTML(byline)}</p>
  `;

  container.appendChild(card);

  // Clear inputs
  textInput.value = "";
  if (nameInput) nameInput.value = "";

  showPopup(true);
}

// ── Popup ─────────────────────────────────────────────────────────────
function showPopup(show) {
  const popup = document.getElementById("popup");
  if (!popup) return;
  popup.classList.toggle("visible", show);
}

// ── Init on DOM ready ─────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", function () {

  // Close popup when clicking the backdrop
  const popup = document.getElementById("popup");
  if (popup) {
    popup.addEventListener("click", function (e) {
      if (e.target === popup) showPopup(false);
    });
  }

  // Active nav highlight on scroll (single-page sections only)
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("a.topmenu");

  if (sections.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              const href = link.getAttribute("href");
              if (href === `#${entry.target.id}`) {
                link.classList.add("active");
              } else if (href && href.startsWith("#")) {
                // Only remove active from same-page anchor links
                link.classList.remove("active");
              }
            });
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
  }
});

// ── Helpers ───────────────────────────────────────────────────────────
function escapeHTML(str) {
  return str
    .replace(/&/g,  "&amp;")
    .replace(/</g,  "&lt;")
    .replace(/>/g,  "&gt;")
    .replace(/"/g,  "&quot;")
    .replace(/'/g,  "&#039;");
>>>>>>> portfolio_dev
}
