$(document).ready(function() {
    $("#showCity").click(function() {
        $("#cityHeader").show();
        $("td:nth-child(3)").show();
        $("#showCity").show();
    });

    $("#hideCity").click(function() {
        $("#cityHeader").hide();
        $("td:nth-child(3)").hide();
        $("#hideCity").hide();
    });
});  