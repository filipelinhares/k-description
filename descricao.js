var up = '-',
  down = '+';
(function($) {
  $.fn.descricao = function(options) {
    var normal = {
      heightDescricao: '100px',
      widthDescricao: '100%',
      marginTopDescricao: "100px",
      duracaoDescricao: 1000,
      direcaoEntrada: down,
      direcaoSaida: down,
      opacidadeDescricao: 1,
      easingDescricao: '',
      textoDescricao: "Plugin Descrição com jQuery - Desenvolvido por Filipe Linhares"
    },
      settings = $.extend({}, normal, options);

    return this.each(function() {
      $(this).css('overflow', 'hidden');
      $(this).append('<p class="descricao"><span class="textoDescricao"></span></p>');
      $("p.descricao span.textoDescricao").css('display', 'block').text(settings.textoDescricao);
      $("p.descricao").css({
        display: "block",
        width: settings.widthDescricao,
        height: settings.heightDescricao,
        opacity: settings.opacidadeDescricao,
        marginTop: settings.direcaoEntrada + settings.heightDescricao
      });
      $(this).hover(function() {
        $(this).find("p.descricao").stop().animate({
          width: settings.widthDescricao,
          height: settings.heightDescricao,
          marginTop: settings.marginTopDescricao
        }, settings.duracaoDescricao, settings.easingDescricao);

      }, function() {
        $(this).find("p.descricao").stop().animate({
          marginTop: settings.direcaoSaida + settings.heightDescricao

        }, settings.duracaoDescricao, settings.easingDescricao);
      });

    });


  };

})(jQuery);