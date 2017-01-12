$(document).ready(function() {
  $("#celeb").submit(function(event) {
    $('#result').show();
    var age = parseInt($("#age").val());
    var gender = $("#gender").val();
    $('.picture').hide();

    if(gender === "female"){
      if (age >= 18 && age <=29) {
        $("#zacEfron").show();
      } else if (age >= 30 && age <=39) {
        $('#ryanGosling').show();
      } else if (age >= 40) {
        $('#georgeClooney').show();
      }
    } else if (gender === 'male') {
      if(age >= 18 && age <= 29) {
        $('#selenaGomez').show();
      } else if (age >= 30 && age <=39) {
        $('#scarlettJohansson').show();
      } else if (age >= 40) {
        $('#marissaTomei').show();
      }
    }
    event.preventDefault();
  });



});
