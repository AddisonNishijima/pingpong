$(document).ready(function () {

    $("#pingpong").submit(function (event) {
        var beginningNumber = parseInt($("#number").val());
        var endingNumber = parseInt($("#ending").val());

        // check that the input values are numbers
        if (!isNaN(beginningNumber) && !isNaN(endingNumber)) {
            // loop through numbers
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
            $("#output span").show(400);
        } else {
            // if the inputs are not valid numbers
            $("#error").append("<p class='error'>Please enter a valid number in both boxes</p>");
        }
        // prevent form submission
        return false;
    });

}); // end ready
