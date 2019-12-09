// Elementos Fixos logo que se empregou o "click"
// Riscar elementos ja concluidos da lista de afazeres 
// $("li").click(function(){
// //    if($(this).css("color")==="rgb(128, 128, 128)"){
// //         $(this).css({
// //             color: "black",
// //             textDecoration: "none"
// //         });
// //     } else {
// //         $(this).css({
// //             color: "gray",
// //             textDecoration: "line-through"
// //         });
// //    };

// // Substituido por >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//     $(this).toggleClass("completed");
// });

// // Apagar Elementos da lista 
// $("span").click(function(event){
//     $(this).parent().fadeOut(500 ,function(){
//         $(this).remove();
//     }); // a função parent remove alem do span, o li no qual ele se inclui 
//     event.stopPropagation();
// });


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// elemento dinamicos usando "on()"

$("ul").on("click", "li", function(){ // click - seleciona todos o li dentro do ul
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){ // click - seleciona todos os span's dentro do ul
    $(this).parent().fadeOut(500 ,function(){
        $(this).remove();
    }); // a função parent remove alem do span, o li no qual ele se inclui 
    event.stopPropagation();
});
// Coletando Input e Escrevendo inputs
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
       var todoText = $(this).val(); // armazenando input;
       $(this).val(""); // limpando caixa de input
       $("ul").append("<li><span id='btn'> <i class='fas fa-trash-alt'></i></span> "+todoText+"</li>");
    }
    
});

$(".fa-plus-square").click(function(){
    $("input[type='text']").fadeToggle();
});