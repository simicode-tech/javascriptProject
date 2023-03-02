const number = document.querySelector("#number");
const btn = document.querySelector(".get-jokes");
const jokes = document.querySelector(".jokes");

btn.addEventListener("click", generateJokes);

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b1bd42a582mshd9511a17e623010p1bab27jsnfbd94689cff3",
    "X-RapidAPI-Host": "humor-jokes-and-memes.p.rapidapi.com",
  },
};
// const Url ="https://humor-jokes-and-memes.p.rapidapi.com/jokes/search?exclude-tags=nsfw&keywords=rocket&min-rating=7&include-tags=one_liner&number=3&max-length=200";
const Url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
function generateJokes(e) {
  e.preventDefault();
  fetch(Url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      jokes.textContent = data.joke;
    })
    .catch((err) => console.error(err));
}
