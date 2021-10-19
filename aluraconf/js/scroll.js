var sobre = $("#sobre").click(scrollSobre);

function scrollSobre(){ 

    var posicao = $(".painel-sobre").offset().top;

    $("html, body").animate({scrollTop: posicao + "px"}, 1000);

}

var palestrante = $("#palestrante").click(scrollPalestrante);

function scrollPalestrante(){

    console.log("fui clicado")

    var posicao = $(".about-palestrantes").offset().top;

    $("html, body").animate({scrollTop: posicao + "px"}, 1000);

}

var inscreva = $(".button").click(scrollInscreva);

function scrollInscreva(){

    var posicao = $(".formulario").offset().top;

    $("html, body").animate({scrollTop: posicao + "px"}, 1500);
    
}