$(document).ready(function() {

    $('.nav-togger').on('click', function() {

        $('.navbar ul').toggleClass('active');

    });

    $('.navbar ul li a').on('click', function() {

        $('.navbar ul li a').removeClass('active');

        $(this).addClass('active');

    });

});