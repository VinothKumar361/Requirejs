define(['jquery'], function($) {
    return {
        description: function(event) {
            var $event = (event.currentTarget).closest('tr');
            var id = $event.children[0].id;
            window.open("pdp.html?" + id);
        }
    }
})