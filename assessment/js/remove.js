define(['jquery'], function ($) {
    return {
        remove: function (event) {

            var idd = $(event.currentTarget).closest('tr');
            console.log(idd);
            var sib = idd.nextAll();
            var siball = idd.siblings();
            console.log(sib.length);
            $(idd).remove();
            $("#cart").trigger('click');
            if($("#tb1 tr").length<1){
                $('#total').text('0');

            }
            

        }
    }
})