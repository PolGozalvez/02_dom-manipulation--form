const $inputTitle = window.document.querySelector("#title")
const $inputContent = window.document.querySelector("#content")
const $selectPriority = window.document.querySelector("#priority")

const $button = window.document.querySelector("button")
$button.addEventListener("click", function(event) {
    event.preventDefault();
    
    window.console.log($inputTitle.value);
    window.console.log($inputContent.value);
    window.console.log($selectPriority.value);
});
