const tagsElement = document.querySelector("#tags");
const textArea = document.querySelector("textarea");

textArea.focus();

textArea.addEventListener("keyup", function (event) {
  //   console.log(event);
  createTags(event.target.value);
  if (event.key === "Enter") {
    event.target.value = "";
    randomSelect();
  }
});

function createTags(input) {
  //   console.log(input);
  const tags = input.split(",");
  console.log(tags);
  tagsElement.innerHTML = "";
  tags.forEach(function (tag) {
    console.log(tag);
    const tagElement = document.createElement("span");
    tagElement.classList.add("tag");
    tagElement.innerText = tag;
    tagsElement.appendChild(tagElement);
  });
}

// function randomSelect() {
//   const times = 30;
//   const interval = setInterval(() => {
//     const randomTag = pickRandomTag();
//   }, 100);
//  setTimeout(() => {

//  }, timeout);
// }

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    if (randomTag !== undefined) {
      highlightTag(randomTag);

      setTimeout(() => {
        unHighlightTag(randomTag);
      }, 100);
    }
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();

      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  const randomTag = tags[Math.floor(Math.random() * tags.length)];
  return randomTag;
}
function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
