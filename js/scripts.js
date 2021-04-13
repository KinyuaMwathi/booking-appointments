$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    $("#message").text("Booking successful!");
  });
});