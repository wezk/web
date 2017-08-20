$(document).ready(function () {
    var appName = findGetParameter("app");

    document.title = window[appName].title;


    var icon = $("#app-icon");
    var title = $("#title");
    var description = $("#description");
    var status = $("#status");
    var screenshot1 = $(".img1");
    var screenshot2 = $(".img2");
    var screenshot3 = $(".img3");
    var website = $("#website");
    var featured = $(".featured");
    var technologies = $(".technologies");

    icon.attr("src", window[appName].icon);
    title.text(window[appName].title);
    description.text(window[appName].description);
    website.attr("href", window[appName].website);
    screenshot1.attr("src", window[appName].screenshot1);
    screenshot2.attr("src", window[appName].screenshot2);
    screenshot3.attr("src", window[appName].screenshot3);
    featured.html(window[appName].featured);

    var techArray = window[appName].technologies;
    for (var i = 0; i < techArray.length; i++){
        technologies.append("• "+techArray[i]+"<br>");
    }

    if (window[appName].featured.length == 0) {
        $("#featuredCard").remove();
    }
    if (window[appName].website.length == 0) {
        website.attr("target","");
        website.attr("src","");
        website.css("opacity","0.3");
    }
    if (!window[appName].available){
        status.text("Discontinued")
    }else{
        status.remove();
    }
});

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}