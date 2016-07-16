$(document).ready(function(){ 
   $(".clasicas").on('click',function(event){ 
      $(this).addClass("clases"); 
      $(".container").addClass("BB"); 
   }); 
   $(".clasicas").mouseenter( function(){ 
      $(".clasicas").removeClass("AA");       
   }); 
}); 