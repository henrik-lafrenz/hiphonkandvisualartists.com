// random links
$(document).ready(function() {
    var right = getRandomExcept([0]);
    $("#nav-right-link").attr("href", right + ".html");
    var left = getRandomExcept([0, right]);
    $("#nav-left-link").attr("href", left + ".html");
});
