define(['jquery'], function($) {
    return {
        remove: function(event) {
            var idd = $(event.currentTarget).closest('tr');
            $(idd).remove();
            $("#cart").trigger('click');
            if ($("#tb1 tr").length < 1) {
                $('#total').text('0');

            }


        }
    }
})