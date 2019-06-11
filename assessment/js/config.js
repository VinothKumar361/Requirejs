 
requirejs.config({
    paths:{
        jquery:"jquery",
        addRow:"addRow",
        addCart:"addCart",
        remove:"remove",
        removeAll:"removeAll",
        productDescription:'productDescription',
        reset:'reset'
    
      

    }
})

    require(['jquery','addCart','addRow','remove','removeAll','productDescription','reset'],function($,addCart,addRow,remove,removeAll,pdp,reset){
        
        $("#removeall").on('click',function(){removeAll.removeall()});
        $("#add").on('click',function(){addRow.addrow()});
        $("#cart").on('click',function(){addCart.addcart()});
        $("#tab1").on('click',"#remove",function(self=this){remove.remove(self)});
        $("#tab2").on('click','a',function(self=this){pdp.description(self)});
        $('#reset').on('click',function(){reset.reset()})
    })