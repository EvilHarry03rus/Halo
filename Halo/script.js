$('body').on('mouseover', '#Success', function (e) {
    $(this).removeClass("btn-success");
    $(this).addClass("btn-danger");
    $(this).text('Deactivate?');
});
$('body').on('mouseover', '#Warning', function (e) {
    $(this).removeClass("btn-warning");
    $(this).addClass("btn-success");
    $(this).text('Activate?');
});
