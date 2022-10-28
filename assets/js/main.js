const log = console.log;
const link = $('.cabecalho__menu-item')

link.on('click', function menuAtivo() { 
    link.removeClass('ativo');
    $(this).addClass('ativo');
})
    

