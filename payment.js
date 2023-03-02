// JavaScript
const stripe = Stripe("YOUR_PUBLISHABLE_KEY");
const elements = stripe.elements();
const cardElement = elements.create("card");

cardElement.mount("#card-element");

const form = document.getElementById("payment-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const { token, error } = await stripe.createToken(cardElement);

  if (error) {
    const errorElement = document.getElementById("card-errors");
    errorElement.textContent = error.message;
  } else {
    // Send the token to your server to complete the payment
    const data = { token: token.id };
    const response = await fetch("/process-payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    // Handle the response from the server
  }
});
