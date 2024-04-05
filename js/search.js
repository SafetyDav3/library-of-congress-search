const searchInput = document.getElementById("searchInput");
const selectBox = document.getElementById("selectBox");
const form = document.getElementById("mainForm");

function handleSubmit(e) {
  e.preventDefault();

  const searchQuery = searchInput.value;
  const selectValue = selectBox.value;
  //   console.log(searchQuery);
  //   console.log(selectValue);

  if (!searchQuery) {
    return;
  }

  window.location.href = `./search-results.html?searchQuery=${searchQuery}&format=${selectValue}`;
}

form.addEventListener("submit", handleSubmit);
