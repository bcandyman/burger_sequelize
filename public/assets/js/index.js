//-------------------------------------//
//           EVENT LISTENERS           //
//-------------------------------------//


// Sends the request to the api route
function createNewBurger() {

    // record name of the burger to be created.
    const burgerName = $('#burgerName').val().trim();

    // if burgerName string is not empty, make ajax post request.
    if (burgerName.length !== 0) {
        $.ajax({
            url: '/api/burger/create',
            type: 'POST',
            data: { name: burgerName }
        }).done((res, rej) => {

            // redirect browser to returned route.
            window.location = res.redirect;
        });
    };
};




//-------------------------------------//
//           EVENT LISTENERS           //
//-------------------------------------//

// text input field of burger to be created.
$('#burgerName').keypress(function (event) {

    // record keyCode value of user pressed key.
    const keyCode = event.keyCode;

    // if keyCode = 13 (keyCode 13 = Return key).
    if (keyCode === 13) {
        createNewBurger();
    };
});

// add burger button.
$('#addBurger').click(function () {
    createNewBurger();
});

// devour burger button.
$("button.devour").click(function () {

    // record name of the burger to be updated.
    const burgerId = $(this).attr('data-burger-id');

    // make ajax put request to update field that defines if burger has been devoured.
    $.ajax({
        url: '/api/burger/devour',
        type: 'PUT',
        data: { id: burgerId }
    }).done((res, rej) => {
        window.location = res.redirect;
    });
});