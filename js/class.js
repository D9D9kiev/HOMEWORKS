class Card {
  constructor(user, post) {
    const { name, email } = user;
    const { title, body, id } = post;
    this.fullName = name;
    this.email = email;
    this.title = title;
    this.body = body;
    this.id = id;
  }

  render() {
    const card = document.createElement("div");
    card.className = "card";
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const nameEl = document.createElement("h2");
    nameEl.classList.add("card-title");
    nameEl.textContent = this.fullName;

    const emailEl = document.createElement("h6");
    emailEl.className = "card-subtitle";
    emailEl.innerHTML = this.email;

    const titleEl = document.createElement("p");
    titleEl.classList.add("card-text");
    titleEl.textContent = this.title;
    const bodyEl = document.createElement("p");
    bodyEl.textContent = this.body;

    const deleteEl = document.createElement("a");
    deleteEl.href = "#";
    deleteEl.className = "card-link";
    deleteEl.textContent = "delete";

    const editEl = document.createElement("a");
    editEl.href = "#";
    editEl.className = "card-link";
    editEl.textContent = "edit";

    card.appendChild(cardBody);
    cardBody.appendChild(nameEl);
    cardBody.appendChild(emailEl);
    cardBody.appendChild(titleEl);
    cardBody.appendChild(bodyEl);
    cardBody.appendChild(deleteEl);
    cardBody.appendChild(editEl);
    root.appendChild(card);

    deleteEl.addEventListener("click", (event) => {
      this.delete(this.id, event.target.parentElement);

      event.target.closest(".card").remove();
    });
  }

  delete(postId, post) {
    fetch(`https://ajax.test-danit.com/api/json/posts/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => {
      post.remove();
      console.log(res);
    });
  }
}

export default Card;
