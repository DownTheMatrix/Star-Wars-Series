document.getElementById('rebel-fanfare').addEventListener('click', music);

 function music() {
  let audioElem = document.getElementById("march");
   if (audioElem.paused) audioElem.play();
  else audioElem.pause();
}
