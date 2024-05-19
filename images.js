/*
Задача 2:
Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.
*/
// Функция для загрузки картинок собак
function loadDogImages() {
  fetch("https://dog.ceo/api/breeds/image/random/10")
    .then((response) => response.json())
    .then((data) => {
      displayDogImages(data.message);
    })
    .catch((error) => {
      console.error("Произошла ошибка при загрузке картинок собак:", error);
    });
}

// Функция для отображения картинок собак на странице
function displayDogImages(images) {
  const dogImagesContainer = document.getElementById("dogImages");

  images.forEach((image) => {
    const imgElement = document.createElement("img");
    imgElement.src = image;
    dogImagesContainer.appendChild(imgElement);
  });
}

// Запуск загрузки картинок собак с интервалом в 3 секунды
const counter = 0;
const intervalId = setInterval(function () {
  if (counter < 10) {
    loadDogImages();
    counter++;
  } else {
    clearInterval(intervalId);
  }
}, 3000);
