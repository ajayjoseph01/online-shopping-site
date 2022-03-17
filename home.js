$(document).ready(function(){
    $(".as").click(function(){
        $(".menitems").toggle(1000);
     });
     $(".womens").click(function(){
        $(".womensitems").toggle(1000);
     });
     $(".kids").click(function(){
        $(".kidsitems").toggle(1000);
     });
     $(".house").click(function(){
        $(".houseitems").toggle(1000);
     });
});

    
$(document).ready(function(){
   $(window).scroll(function(){
       if($(this).scrollTop()>100){
           $('.fa-arrow-circle-up').fadeIn('slow')
       }
       else{
           $('.fa-arrow-circle-up').fadeOut('slow')
       }
   })
   
})