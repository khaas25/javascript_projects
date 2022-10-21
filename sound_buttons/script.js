const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach(function (sound) {
  const button = document.createElement("button");
  button.classList.add(".btn");
  button.innerText = sound;
  button.addEventListener("click", function () {
    document.getElementById(sound.play();
  });
  document.getElementById("buttons").appendChild(button);
});

function stopSounds(){
    sounds.forEach(function(sound){
        
    })
}