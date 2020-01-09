//-------------------------------------//
//           EVENT LISTENERS           //
//-------------------------------------//

$('#addBurger').click(() => {
    const burgerName = $('#burgerName').val()
    $.ajax({
        url: '/api/burger/create',
        type: 'POST',
        data: { name: burgerName }
    }).done((res, rej) => {
        window.location = res.redirect;
    });
})

$("button.devour").click(() => {
    const burgerId = $(this).attr('data-burger-id');
    $.ajax({
        url: '/api/burger/devour',
        type: 'PUT',
        data: { id: burgerId }
    }).done((res, rej) => {
        window.location = res.redirect;
    });
});