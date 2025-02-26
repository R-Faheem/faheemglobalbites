document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const addRecipeBtn = document.getElementById('addRecipeBtn');
  const recipeContainer = document.querySelector('.recipe-container');
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  // Event: Add New Recipe (DOM Manipulation)
  addRecipeBtn.addEventListener('click', addNewRecipe);

  // Event: Click on Recipe Card (Event Handling & Window Management)
  recipeContainer.addEventListener('click', (e) => {
    const card = e.target.closest('.recipe-card');
    if (card) {
      // Add active highlight effect
      card.classList.add('active');
      setTimeout(() => card.classList.remove('active'), 300);
      // Open detailed view in a new window
      window.open('recipe-details.html', '_blank', 'width=800,height=600');
    }
  });

  // Event: Contact Form Submission (Form Handling)
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple client-side validation
    if (name === '' || email === '' || message === '') {
      formFeedback.textContent = "Please fill out all fields.";
      formFeedback.style.color = "red";
      return;
    }
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formFeedback.textContent = "Please enter a valid email address.";
      formFeedback.style.color = "red";
      return;
    }
    
    // Successful submission feedback
    formFeedback.textContent = "Thank you for your message!";
    formFeedback.style.color = "green";
    contactForm.reset();
  });
});

// Function to dynamically add a new recipe card
function addNewRecipe() {
  const recipeContainer = document.querySelector('.recipe-container');

  // Create a new recipe card element (dummy content for demonstration)
  const newCard = document.createElement('div');
  newCard.className = 'recipe-card';
  newCard.innerHTML = `
    <img src="https://via.placeholder.com/300x200.png?text=New+Recipe" alt="New Recipe" />
    <div class="recipe-info">
      <h3>New Delicious Recipe</h3>
      <h4>Ingredients:</h4>
      <ul>
        <li>Ingredient 1</li>
        <li>Ingredient 2</li>
        <li>Ingredient 3</li>
      </ul>
      <h4>Instructions:</h4>
      <ol>
        <li>Step 1: Do something.</li>
        <li>Step 2: Do another thing.</li>
        <li>Step 3: Serve and enjoy!</li>
      </ol>
    </div>
  `;

  // Append with a simple fade-in animation
  newCard.style.opacity = 0;
  recipeContainer.appendChild(newCard);
  setTimeout(() => {
    newCard.style.transition = 'opacity 0.5s ease';
    newCard.style.opacity = 1;
  }, 100);
}
