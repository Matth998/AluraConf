var botao = $("#inscrição").click(inscricao);

function inscricao(){

    var nome = $("#nome").val();
    var email = $("#email").val();

    if(nome <= 2){

        $(".validaNome").css("display", "block");
        

    }if(email < 15){

        $(".validaEmail").css("display", "block");

    }else{
        
        $(".validaNome").css("display", "none");
        $(".validaEmail").css("display", "none");

        $("input").val("")

    }



}

