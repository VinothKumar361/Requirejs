  define(['jquery'],function($){
      return{
      addcart: function () {
            var values=[];
            var total=0;
           
             var serialized =$('form').serializeArray();
             $.each(serialized,function(i,elem){
                   values[i]=elem.value; })
                 $('#tab2').empty();
            for(var i=0;i<values.length;i=i+4){
                total+=(values[i+2]*values[i+3])
                           var $i=$("<tr><td id="+values[i+1]+"><a href='#'>" + values[i]+ "</a></td><td><a>" + values[i+1]+ "</a></td><td><a>" + values[i+2]+ "</a></td><td><a>" +' $ '+ values[i+3]+ "</a></td><td><a>"+' $ '+(values[i+2]*values[i+3])+"</a></td></tr>")
                           localStorage.setItem(values[i+1],JSON.stringify({'name':values[i],'id':values[i+1],'quantity':values[i+2],'price':values[i+3]}));
                           $("#tab2").append($i);
                       $('#total').text(total);
            } } 
        }

})