import Card from "./class.js";

const root = document.getElementById("root");

function getContent() {
  // loader
  const loader = document.createElement("div");
  loader.className = "loader";
  document.body.append(loader);

  // Get list of users
  fetch("https://ajax.test-danit.com/api/json/users")
    .then((response) => response.json())
    .then((users) => {
      // Get posts for each user
      const promises = users.map((user) =>
        fetch(`https://ajax.test-danit.com/api/json/posts?userId=${user.id}`)
          .then((response) => response.json())
          .then((posts) =>
            posts.map((post) => {
              new Card(user, post).render();
            })
          )
      );

      // Render cards when all requests have completed
      Promise.all(promises);
    })
    .catch((error) => console.error(error))
    .finally(() => {
      document.querySelector(".loader").remove();
    });
}

getContent();
