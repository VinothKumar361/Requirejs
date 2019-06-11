
define(['jquery'], function ($) {
    $('#total').text('0');
    return {
        addrow: function () {
            var row1 = $('<tr><td><input type="text" name="p_name"></td><td><input type="text" name="p_skew"></td><td><input type="number" min="0" name="quantity"></td><td><input type="number" min="0" name="price"></td><td><button id="remove">Remove</button></td></tr>');
            $("#tb1").append(row1);
            console.log($("#tb1 tr").length);

        },


    }
})
