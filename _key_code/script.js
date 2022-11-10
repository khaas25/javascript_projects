const insert = document.getElementById("insert");

window.addEventListener("keydown", function (event) {
  console.log(event);
  insert.innerHTML = `
  <div class="key">
    ${event.key}
    <small>Event.Key</small>
  </div>
<div class="key">
    ${event.keyCode}
    <small>Event.KeyCode</small>
</div>
<div class="key">
    ${event.code}
    <small>Event.code</small>
</div>
`;
});

// {
//     keycode:75,
//     key:'k',
//     code:"keyk"

// }
