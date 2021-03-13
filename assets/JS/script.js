let todaysDateEl = $("#currentDay");
let container = $(".container");
let textArea = $("textarea");

//save button////////////////////////////
container.on("click", "button", function (e) {
  e.preventDefault();
  //get name of the button
  let name = $(this).attr("name");
  console.log(name);
  //connect button with text area of the same name
  let correctTextArea = $(`textarea[name = "${name}"]`);

  //get out of storage or set as an object//////////
  let storagedTodos = JSON.parse(localStorage.getItem("todos")) || {};

  //add todo to the properly number key in the todos object
  storagedTodos[name] = correctTextArea.val();
  //set back into local storage///////////
  localStorage.setItem("todos", JSON.stringify(storagedTodos));
});

todaysDateEl.text(moment().format("dddd MMMM Do"));

// ---------------------------------------------------
//init function///////////////////////////////////////
function getStorage() {
  //get local storage
  let storagedTodos = JSON.parse(localStorage.getItem("todos")) || {};
  //loop through todo object and place todos on textarea////
  for (let todo in storagedTodos) {
    let correctTextArea = $(`textArea[name="${todo}"`);
    correctTextArea.text(storagedTodos[todo]);
  }
}
getStorage();
//set color coded time
let currentHourNum = parseInt(moment().format("HH"));

textArea.each((index) => {
  let currIndex = $(textArea[index]);
  let currIndexIdNum = parseInt(currIndex.attr("id"));

  if (currIndexIdNum === currentHourNum) {
    currIndex.addClass("present");
  } else if (currIndexIdNum < currentHourNum) {
    currIndex.addClass("past");
  } else {
    currIndex.addClass("future");
  }
});
