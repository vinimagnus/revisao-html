$(document).ready(function(){

    $('section').load('pages/home.html');

    $("#menuHome").click(function(){
        $('section').load('pages/home.html');
    });

    $("#menuProdutos").click(function(){
        $('section').load('pages/produtos.html');
    });

    $("#menuContato").click(function(){
        $('section').load('pages/contato.html');
    });

});


