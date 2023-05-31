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
                required: "",
                firstname: ""
            },
            email: {
                required: "",
                email: ""
            }
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});