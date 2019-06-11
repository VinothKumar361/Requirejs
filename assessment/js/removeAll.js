
define(['jquery'], function ($) {
    return {
        removeall: function () {
            $('#tb1').empty();
            $('#add').trigger('click');
            $("#tab2").empty();
            $('#total').text('');
        },


    }

})