(function() {
  var list = document.querySelector(".list");
  var closeModalBtn = document.querySelector(".modal-close");

  // listeners
  list.addEventListener("click", showModal);
  closeModalBtn.addEventListener("click", hideModal);

  // show modal function
  function showModal(e) {
    e.preventDefault();
    var target = event.target;
    var closestLink = target.closest(".list-item__link");

    if (target && closestLink) {
      var modal = document.querySelector(".modal");
      var imageUrl = closestLink
        .querySelector(".list-item__image")
        .getAttribute("src");
      var image = modal.querySelector(".modal-content__img");

      image.style.backgroundImage = "url(" + imageUrl + ")";
      modal.classList.add("is-active");
    }
  }

  // hide modal function
  function hideModal() {
    var modal = document.querySelector(".modal");

    modal.classList.remove("is-active");
  }
})();
