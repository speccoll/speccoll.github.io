// Get modal elements
const modal = document.getElementById("passcodeModal");
const closeBtn = document.getElementById("closeModal");
const submitBtn = document.getElementById("submitPasscode");
const input = document.getElementById("passcodeInput");
const errorMsg = document.getElementById("errorMsg");

function checkSupplyOrderAccess(event) {
  event.preventDefault();
  errorMsg.style.display = "none";
  input.value = "";
  modal.style.display = "block";
  input.focus();
}

// Close modal when X is clicked
closeBtn.onclick = () => {
  modal.style.display = "none";
};

// Close modal when clicking outside modal content
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Check passcode when Submit is clicked
submitBtn.onclick = () => {
  const passcode = input.value;
  const correctPasscode = "sup1234";

  if (passcode === correctPasscode) {
    modal.style.display = "none";
    window.location.href = "supply_orders_landing_page.html";
  } else {
    errorMsg.style.display = "block";
    input.value = "";
    input.focus();
  }
};

// Listen for Enter key on passcode input
input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();  // Prevent default Enter key behavior (like form submission)
    submitBtn.click();       // Trigger the submit button click handler
  }
});
