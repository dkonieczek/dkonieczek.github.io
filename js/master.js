$(document).ready(function () {
    particlesJS.load('particles-js', 'assets/particles.json');
});


$(document).on('click', '.navList a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
});

$(window).scroll(function() {
    var blurValue = ((window.pageYOffset) / (document.body.scrollHeight - window.innerHeight) * 5);
    $('#particles-js').css('filter', 'blur(' + blurValue + 'px) brightness(' + (100 + (blurValue * 50)) + '%)')
});