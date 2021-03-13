let todaysDateEl = $("#currentDay");
let container = $(".container");
let textArea = $("textarea");

let todos = {
  9: "",
  10: "",
  11: "",
  12: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
};

container.on("click", "button", function (e) {
  e.preventDefault();
  //get name of the button
  let name = $(this).attr("name");
  console.log(name);
  //connect button with text area of the same name
  let correctTextArea = $(`textarea[name = "${name}"]`);
  //set storage
  //get the todos object out of storage
  let storagedTodos = JSON.parse(localStorage.getItem("todos"));
  //add todo to the properly number key in the todos object
  storagedTodos[name] = correctTextArea.val();

  //loop through todos object
  for (let todo in storagedTodos) {
    //get key value then get text area
    correctTextArea.text(storagedTodos[todo]);
  }
  localStorage.setItem("todos", JSON.stringify(storagedTodos));
});

todaysDateEl.text(moment().format("dddd MMMM Do"));

function getStorage() {
  //get local storage
  let storagedTodos = JSON.parse(localStorage.getItem("todos"));

  for (let todo in storagedTodos) {
    let correctTextArea = $(`textArea[name="${todo}"`);
    correctTextArea.text(storagedTodos[todo]);
  }
}

getStorage();
