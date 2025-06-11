$(function() {

    abrirJanela();
    verificarCliqueFechar();

    function abrirJanela() {
      $('.date-btn a').click(function(e){
        e.stopPropagation();
         $('.opacity-modal').fadeIn();
      });
    }

    function verificarCliqueFechar() {
         var el = $('body,.close-btn');
         el.click(function(){
             $('.opacity-modal').fadeOut();
         })

         $('form').click(function(e){
             e.stopPropagation();
         });
    }
});