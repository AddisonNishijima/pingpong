$(document).ready(function () {

    $("#pingpong").submit(function (event) {
        var start = parseInt($("#number").val());
        var ending = parseInt($("#ending").val());

        // check that the input values are numbers
        if (!isNaN(start) && !isNaN(ending)) {
            // loop through numbers
            var i;
            for (i = start; i <= ending; i++) {

                if (i % 3 === 0 && i % 5 === 0) {
                    $("#output").append("<span class='pingpong'>pingpong</span>");
                } else if (i % 3 === 0) {
                    $("#output").append("<span class='ping'>ping</span>");
                } else if (i % 5 === 0) {
                    $("#output").append("<span class='pong'>pong</span>");
                } else {
                    $("#output").append("<span>" + i + "</span>");
                }
            }
            $("#output span").fadeIn(400);
        } else {
            // if the inputs are not valid numbers
            $("#error").append("<p class='error'>Please enter a valid number in both boxes</p>");
        }
        // prevent form submission
        return false;
    });

    // empty the output & error divs
    $('input').on('focus', function () {
        $("#output span").fadeOut(400, function () {
            $("#output").empty();
        });
        $("#error").empty();
    });

}); // end ready
