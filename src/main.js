import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Tomagotchi } from './tomagotchi.js';

$(document).ready(function () {
  let myTomagotchi = new Tomagotchi();
  setInterval(() => {
    myTomagotchi.lowerStats();
    $("#tomagotchi-hunger").text(myTomagotchi.hunger);
    $("#tomagotchi-sleep").text(myTomagotchi.sleep);
    $("#tomagotchi-play").text(myTomagotchi.play);
    if (myTomagotchi.isDead === true) {
      $("#dead").fadeIn();
    }
  }, 1000);
  $('.orderTomaBtn').click(function() {
    myTomagotchi.name = $("#newTomagotchiName").val();
    myTomagotchi.tomagotchiReset();
    $('#tomagotchi1Name').text(myTomagotchi.name);
    $("#dead").hide();
    // Note - will need adjustment to create new one?
  });

  $('.feedToma1').click(function() {
    myTomagotchi.feedTomagotchi();
  });

  $('.napToma1').click(function() {
    myTomagotchi.napTomagotchi();
  });

  $('.playToma1').click(function() {
    myTomagotchi.playTomagotchi();
  });
  
});

//Cannot create more than 3