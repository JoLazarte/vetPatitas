
//Mostrar y ocultar aside con btn-aside y icono-barras, usando jquery
$(document).ready(function(){
    $("#btn-aside").click(function(){
        $(".box-aside").show();
    });
});

$(document).ready(function(){
    $(".icono-barras").click(function(){
        $(".box-aside").hide();
    });
});

//Ocultar aside al seleccionar el menu aside, con jquery
$(document).ready(function(){
           
    $(".menu-solapa").click(function(){
        $(".box-aside").hide();
       
    });
});

$(document).ready(function(){
           
    $(".opS").click(function(){
        $(".box-aside").hide();
       
    });
});

$(document).ready(function(){
           
    $(".sp-btn").click(function(){
        $(".box-aside").hide();
       
    });
});


