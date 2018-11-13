// template function to render list of data
(function() {
  var listData = data.dogs;
  var list = document.querySelector(".list");

  list.innerHTML = "";
  listData.forEach(function(item) {
    var li = document.createElement("li");
    var markup =
      '<a href="#" class="list-item__link">' +
      '<img src=".' +
      item.image +
      '" class="list-item__image" alt="image">' +
      '<div class="overlay">' +
      '<div class="overlay__text">' +
      "click me" +
      "</div>" +
      "</div>" +
      "</a>";

    li.classList.add("list-item");
    li.innerHTML = markup;
    list.appendChild(li);
  });
})();
