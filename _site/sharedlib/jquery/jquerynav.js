$(function () {

    $("#navcall").load("sharedlib/jquery/navcall.html");

    function activeNav() {
        var pgurl = window.location.href.substring(window.location.href.lastIndexOf("/") + 1);
        $("#nav ul li a").each(function () {
            if ($(this).attr("href") == pgurl || $(this).attr("href") == '')
                $(this).addClass("active");
        });
    }

    setTimeout(function () {
        activeNav();
    }, 100);

});