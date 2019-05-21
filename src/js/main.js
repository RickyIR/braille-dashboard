$(document).ready(function(){ 
   

    $( ".toggle" ).click(function() {

        if  ($('nav ul li span').css('display') === 'inline'){
            $('nav ul li span').hide();
            $('body').addClass('min');
        } else{
            $('nav ul li span').show();
            $('body').removeClass('min');
        }

        // $('nav').addClass('rko')
      });
}) 