const number = document.querySelector("#number");
const btn = document.querySelector(".get-quotes");
const quote = document.querySelector(".quotes");
btn.addEventListener("click", getQuotes);
// fetch api reques
const URL = "https://type.fit/api/quotes";

function getQuotes(e) {
  e.preventDefault();
  if (number.value.length == 0) {
    alert("Please enter a number");
  } else {
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data = shuffle(data);
        let output = "";
        for (let i = 0; i < data.length; i++) {
          if (i == number.value) {
            break;
          }
          output += `
                <li> Quote: ${data[i].text}</li>
                <li> Author: ${data[i].author}</li>
                <hr>
            `;
        }
        quote.innerHTML = output;
      });
  }
}

function shuffle(quote) {
  let CI = quote.length,
    randomIndex,
    tempValue;

  while (CI > 0) {
    randomIndex = Math.floor(Math.random() * CI);
    CI--;

    // swap the last element with CI
    tempValue = quote[CI];
    quote[CI] = quote[randomIndex];
    quote[randomIndex] = tempValue;
  }
  return quote;
}
