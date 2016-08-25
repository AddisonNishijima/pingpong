//business Logic
function pinpong(numbers) {
  var numbers = []
  for (i = beginningNumber; i <= endingNumber; i++) {

    if (i % 15 === 0) {
      numbers.push("pingpong");

    } else if (i % 5 === 0) {
      numbers.push("pong");

    } else if (i % 3 === 0) {
      numbers.push("ping");

    } else {
      numbers.push(i);
    }
  }
  return numbers
}
//user interface logic
$(document).ready(function () {
$("#pingpong").submit(function (event) {
  $("#output").show();
    var beginningNumber = parseInt($("#number").val());
    var endingNumber = parseInt($("#ending").val());

    if (!isNaN(beginningNumber) && !isNaN(endingNumber)) {
      var i;
      for (i = beginningNumber; i <= endingNumber; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            $("#output").append("<span class='pingpong'>pingpong,</span><br>");
        } else if (i % 3 === 0) {
            $("#output").append("<span class='ping'>ping,</span><br>");
        } else if (i % 5 === 0) {
            $("#output").append("<span class='pong'>pong,</span><br>");
        } else {
            $("#output").append("<br><span>" + i + ",</span><br>");
        }
      }
        $("#output span").show();
    } else {
      $("#error").append("<p class='error'>Please enter a valid number in both boxes</p>");
    }
    return false;
    });
});
