
define(['table1'], function (tab1) {
    return {
        removeall: function () {
            $('#tb1').empty();
            $('#add').trigger('click');
            $("#tab2").empty()
        },
    }
})