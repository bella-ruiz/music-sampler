// assign variables
let audioFiles = document.querySelectorAll('.audio-file');
let albumCovers = document.querySelectorAll('.album-cover');
let players = document.querySelectorAll('audio');


// function to hide all divs
function hideAll() {
  audioFiles.forEach(function(el) {
    el.style.display = 'none';
  });
}
// run that function right away
hideAll();

// when any animal is clicked, make the suitable div appear
albumCovers.forEach(function(el) {
  el.onclick = (e) => {
    // hide all the divs to ensure that only one will be open
    hideAll();

    // here is a switch statement to handle opening the right div

    switch (e.target.getAttribute('id')) {
      case 'albumOne':
        document.querySelector('#audioOne')
        	.style.display = 'block';
        break;

      case 'albumTwo':
        document.querySelector('#audioTwo')
        	.style.display = 'block';
        break;

      case 'albumThree':
        document.querySelector('#audioThree')
        .style.display = 'block';
        break;

      case 'albumFour':
        document.querySelector('#audioFour')
        .style.display = 'block';
        break;

    } // end of switch
    // switch does not need default for this
    players.forEach(function(el) {
            el.pause();
            el.currentTime = 0;
        });

  } // end of function for clicking

}); // end of forEach()
