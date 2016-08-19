$(document).ready(function () {

    $("#pingpong").submit(function (event) {
        var beginningNumber = parseInt($("#number").val());
        var endingNumber = parseInt($("#ending").val());

//User Logic End

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
//Business Logic End
