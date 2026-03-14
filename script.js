$(document).on("pagecreate", "#page1", function () {

    $("#loginForm").submit(function (e) {
        e.preventDefault();

        var user = $("#username").val();
        var pass = $("#password").val();

        if (user == "" || pass == "") {
            $("#popupMsg").popup("open");
        } else {
            $.mobile.changePage("#page2");
        }
    });

});
