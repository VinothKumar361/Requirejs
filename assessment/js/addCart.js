  define(['jquery'], function($) {
      var $flag = 0;
      return {

          addcart: function() {
              var values = [];
              var total = 0;
              var $tr = $('form tr');

              for (var i = 1; i < $tr.length - 1; i++) {
                  if (($($tr[i].children[1].children).val()) == ($('form tr:last input[name=p_skew]').val())) {
                      $($tr[i].children[2].children).val(Number($($tr[i].children[2].children).val()) + Number($('form tr:last input[name=quantity]').val()));
                      $flag = 1;
                  }
              }
              if ($flag == 1) {
                  alert('product already exist');
                  $('form tr:last').remove();
                  $flag = 0;
              }

              if (($('form tr:last input[name=p_name]').val() != '') && ($('form tr:last input[name=p_skew]').val() != '') && ($('form tr:last input[name=quantity]').val() != '') && ($('form tr:last input[name=price]').val() != '') && $flag != 1) {
                  var serialized = $('form').serializeArray();
                  $.each(serialized, function(i, elem) {
                      values[i] = elem.value;
                  })
                  $('#tab2').empty();
                  for (var i = 0; i < values.length; i = i + 4) {
                      total += (values[i + 2] * values[i + 3])
                      var $i = $("<tr><td id=" + values[i + 1] + "><a href='#'>" + values[i] + "</a></td><td><a>" + values[i + 1] + "</a></td><td><a>" + values[i + 2] + "</a></td><td><a>" + ' $ ' + values[i + 3] + "</a></td><td><a>" + ' $ ' + (values[i + 2] * values[i + 3]) + "</a></td></tr>")
                      localStorage.setItem(values[i + 1], JSON.stringify({ 'name': values[i], 'id': values[i + 1], 'quantity': values[i + 2], 'price': values[i + 3] }));
                      $("#tab2").append($i);
                      $('#total').text(total);
                      $flag = 0;
                  }
              }
          }
      }
  })