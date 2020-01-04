$('#addBurger').click(() => {
    const burgerName = $('#burgerName').val()
    $.ajax({
        url: '/',
        type: 'POST',
        data: { name: burgerName }
    })
});