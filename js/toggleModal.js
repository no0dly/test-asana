(function() {
  var list = document.querySelector(".list");
  var closeModalBtn = document.querySelector(".modal-close");

  // listeners
  list.addEventListener("click", showModal);
  closeModalBtn.addEventListener("click", hideModal);

  // show modal function
  function showModal(e) {
    e.preventDefault();
    var target = e.target;
    var closestLink;

    // polifill for ie
    if (window.Element && !Element.prototype.closest) {
      Element.prototype.closest = function(s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
          i,
          el = this;
        do {
          i = matches.length;
          while (--i >= 0 && matches.item(i) !== el) {}
        } while (i < 0 && (el = el.parentElement));
        return el;
      };
    }
    closestLink = target.closest(".list-item__link");

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
