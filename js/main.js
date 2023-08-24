let elHeaderUsername = document.querySelector(".header__username");
let elProfileImage = document.querySelector(".header__profile-img");
let elSearchInput = document.querySelector(".search-input");
let elSearchModal = document.querySelector(".search-modal");

async function renderHeader() {
  let user = await fetchData("https://api.github.com/users/abdunabiyevahror");
  elHeaderUsername.textContent = user.login;
  elProfileImage.src = user.avatar_url;
}
renderHeader();

elSearchInput.addEventListener("input", function (e) {
  renderSearchModal(e.target.value);
});



async function renderSearchModal(str) {
  let users = await fetchData(`https://api.github.com/search/users?q=${str}`);
  users = users.items;
  users.forEach((el) => {
    let link = document.createElement("a");
    link.textContent = el.login;
    link.target = "_blank";
    link.href = el.html_url;
    elSearchModal.appendChild(link);
  });
}
