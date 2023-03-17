const loadData = () => {
  const url = "https://jsonplaceholder.typicode.com/users";

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayUsers(data));
};

const displayUsers = (users) => {
  // cards container
  const cardsContainer = document.getElementById("cards-container");
  users.forEach((user) => {
    // see users
    // console.log(user);
    const div = document.createElement("div");
    div.classList.add("col");
    //   adding things on div
    div.innerHTML = `
    <div class="card">
            <div class="card-body">
              <h5 class="card-title">${user.username}</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                
              </p>
            </div>
            <div class="card-footer">
            <address>
            City : ${user.address.city}
            Street : ${user.address.street}
            Zip : ${user.address.zipcode}
            Phone : ${user.phone}
            </address>
            </div>
          </div>
          <button onclick="details(${user.id})" class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#userModal">Users Details</button>
    `;
    cardsContainer.appendChild(div);
  });
};

// users details
const details = (id) => {
  const url = `https://randomuser.me/api/?results=${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => userDetails(data.results[0]));
};

const userDetails = (user) => {
  //   console.log(user);
  const title = document.getElementById("userModalLabel");
  title.innerText = `${user.name.first}`;
  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = `
  <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${user.picture.large}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
  
  `;
};

loadData();
