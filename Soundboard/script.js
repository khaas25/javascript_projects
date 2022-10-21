const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

// goes through array above
sounds.forEach(function (sound) {
  console.log(sound);
  //   created an element button
  const button = document.createElement("button");
  //   added a class name to the element button just created
  button.classList.add("btn");
  //   gave the buttons text
  button.innerText = sound;
  //   added the sound using the eventlistener below with a function
  button.addEventListener("click", function () {
    stopSounds();
    document.getElementById(sound).play();
  });
  //   took the element by its id and added the child called button we created above.
  document.getElementById("buttons").appendChild(button);
});

function stopSounds() {
  sounds.forEach(function (sound) {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
