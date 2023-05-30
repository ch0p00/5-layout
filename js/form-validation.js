$(function() {
    $("form[name='feedback']").validate({
        rules: {
            firstname: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "This field is required",
                firstname: ""
            },
            email: {
                required: "This field is required",
                email: "Check your Email"
            }
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});