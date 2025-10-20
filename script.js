const addItemBtn = document.getElementById("add-item-btn");
const clearAllItems = document.getElementById("clear-btn");
const itemInput = document.getElementById("item-input");
const list = document.getElementById("list");

const shoppingList = [];

addItemBtn.addEventListener("click", function () {
  if (shoppingList.includes(itemInput.value)) {
    console.log("no duplicates");
  } else {
    shoppingList.push(itemInput.value);
    render();
  }
  itemInput.value = "";
});


clearAllItems.addEventListener("click", function () {
  shoppingList.length = 0;
  render();
})

function render() {
  let html = "";
  for (let item of shoppingList) {
    html += `<li class="list-item">${item}</li>`;
  }
  list.innerHTML = html;
}

render();
