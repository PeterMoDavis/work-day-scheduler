let todaysDateEl = $("#currentDay");
let container = $(".container");
let textArea = $("textarea");

let workDay = {
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
  let name = $(this).attr("name");
  let correctTextArea = $(`textarea[name = "${name}"]`);
  console.log(correctTextArea.val());
});

todaysDateEl.text(moment().format("dddd MMMM Do"));
