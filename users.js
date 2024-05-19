/*
Задача 1:
Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка.
*/

function deleteUser(userId) {
  const userList = document.getElementById("userList");
  const userElement = document.getElementById("user_" + userId);

  userList.removeChild(userElement);
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const userList = document.getElementById("userList");

    if (userList) {
      users.forEach((user) => {
        const userElement = document.createElement("li");
        userElement.setAttribute("id", "user_" + user.id);
        userElement.innerHTML = user.name;

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Удалить";
        deleteButton.addEventListener("click", function () {
          deleteUser(user.id);
        });

        userElement.appendChild(deleteButton);
        userList.appendChild(userElement);
      });
    }
  })
  .catch((error) => {
    console.error("Произошла ошибка при загрузке списка пользователей:", error);
  });
