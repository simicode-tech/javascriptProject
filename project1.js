const number = document.querySelector("#number");
const btn = document.querySelector(".get-qoutes");

btn.addEventListener("click", generateQoutes);

// url
const Url = "https://type.fit/api/quotes";

function generateQoutes(e) {
  e.preventDefault();
  if (number.value.length == 0) {
    alert("Please enter a number");
  } else {
    fetch(Url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let output = "";
        data = shuffle(data);
        for (let i = 0; i < data.length; i++) {
          if (i == number.value) {
            break;
          }
          output += `
                <li>${data[i].text}</li>
                <li>${data[i].author}</li>
                <hr
                `;
        }
        document.querySelector(".qoutes").innerHTML = output;
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
}

function shuffle(qoutes) {
  let CI = qoutes.length,
    indexQoute,
    tempValue;

  while (CI > 0) {
    indexQoute = Math.floor(Math.random() * CI);
    CI--;
    // swap the last element with CI
    tempValue = qoutes[CI];
    qoutes[CI] = qoutes[indexQoute];
    qoutes[indexQoute] = tempValue;
  }
  return qoutes;
}
