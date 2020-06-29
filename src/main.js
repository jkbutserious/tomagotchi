import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Tomagotchi } from './src/tomagotchi.js'

$(document).ready(function () {
  $('.orderTomaBtn').click(function (event) {
    event.preventDefault();

    let tomagotchiName = $('.newTomagatchiName').val();
    $('.tomagatchi1Name').text(tomagotchiName);
    // Note - will need adjustment to create new one?
  });
});

//Cannot create more than 3