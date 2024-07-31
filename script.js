// Tab switching functionality with sliding transitions
$(document).ready(function() {
    $('.nav-link').click(function() {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
        var target = $(this).attr('href');
        $('.tab-pane').removeClass('active').css('opacity', '0');
        $(target).addClass('active').css('opacity', '1');
    });
});
