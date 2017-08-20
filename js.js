$(document).ready(function () {
    $('.modal').modal();
    Particles.init({
        selector: '.background',
        connectParticles: false,
        sizeVariations: 5,
        maxParticles:550,
        color: "#bdbdbd"
    });

    if ($(window).width() < 700){
        $(".app-icon").css("width", "60px")
        $(".app-icon").css("height", "60px")
    }

    $('a[href*="#"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({ scrollTop: target.offset().top }, 1000, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        };
                    });
                }
            }
        });
});

function openProject(projName){
    $(".modal-content").html('<object style="width:100%; height:100%" data="apps/index.html?app='+projName+'"/>');
    $('#modal1').modal('open');
}