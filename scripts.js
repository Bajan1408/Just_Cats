
const URL = "https://api.thecatapi.com/v1/images/search/";
const catBtn = document.getElementById("change-cat");

const getCats = async () => {
  const data = await fetch(URL)
    .then((response) => response.json())
    .catch((e) => console.log(e));


  return data[0].url;
};

const loadImage = async () => {
  const catImage = document.getElementById("cat");
  catImage.src = await getCats();
};

catBtn.addEventListener("click", loadImage);

loadImage();
