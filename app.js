window.addEventListener("load",function(){
    var texto = document.getElementById("texto");
    var cita = document.getElementById("cita");
    var enlace = document.getElementById("enlace");
    var pastilla = document.getElementById("pastilla");
    var contenedorFormulario = document.getElementById("contenedorFormulario");

    texto.addEventListener("click",function(e){
        e.preventDefault();

        var divConten = document.createElement("div");
        contenedorFormulario.appendChild(divConten);

        var input = document.createElement("input");
        divConten.insertBefore(input, divConten.children[0]);
        input.classList.add("tituloo");

        var textarea = document.createElement("textarea");
        textarea.setAttribute("row","3");
        divConten.insertBefore(textarea, divConten.children[1]);

        var boton = document.createElement("button");
        boton.textContent = "hola";
        divConten.insertBefore(boton, divConten.children[2]);

    boton.addEventListener("click",function(e){
        divConten.remove();
//-----------------------------------------------------------------------------------
        var divContenSegundo = document.createElement("div");
        contenedorFormulario.appendChild(divContenSegundo);

        var divTitulo = document.createElement("div");
        divTitulo.textContent = input.value;
        divContenSegundo.insertBefore(divTitulo, divContenSegundo.children[0]);

        var divTexto = document.createElement("div");
        divTexto.textContent = textarea.value;
        divContenSegundo.insertBefore(divTexto, divContenSegundo.children[1]);

        var bodelete = document.createElement("button");
        bodelete.textContent = "Eliminar";
         divContenSegundo.insertBefore(bodelete, divContenSegundo.children[2]);

         bodelete.addEventListener("click",function(e){
            divContenSegundo.remove();
         })

    });

    });

})

