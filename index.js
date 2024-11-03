const $inputTitle = document.querySelector("#title");
const $inputContent = document.querySelector("#content");
const $selectPriority = document.querySelector("#priority");
const $taskList = document.querySelector("#tasklist");

const $button = document.querySelector("button");
$button.addEventListener("click", function(event) {
    event.preventDefault();

    const $listItem = document.createElement("div");
    $listItem.classList.add("div__container");
    //console.log($listItem);

    const $titleElement = document.createElement("h3");
    $titleElement.textContent = `${$inputTitle.value}`;
    $listItem.appendChild($titleElement);

    const $contentElement = document.createElement("p");
    $contentElement.textContent = `${$inputContent.value}`;
    $listItem.appendChild($contentElement);

    const $priorityElement = document.createElement("p");
    $priorityElement.textContent = `${$selectPriority.value}`;
    $listItem.appendChild($priorityElement);

    $taskList.appendChild($listItem);

    $inputTitle.value = "";
    $inputContent.value = "";
    $selectPriority.value = "Priority";
});