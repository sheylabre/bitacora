window.addEventListener("load",function(){
    var texto = document.getElementById("texto");
    var cita = document.getElementById("cita");
    var enlace = document.getElementById("enlace");
    var pastilla = document.getElementById("pastilla");
    var contenedorFormulario = document.getElementById("contenedorFormulario");
    var contenedorFormulario1 = document.getElementById("contenedorFormulario1");
    var contenedorFormulario2 = document.getElementById("contenedorFormulario2");
    var contenedorFormulario3 = document.getElementById("contenedorFormulario3");


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
//----------------------es la parte donde se imprime ---------------------------
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
//---------------- cita de bitacora---------------------------------------------
    cita.addEventListener("click",function(e){
        e.preventDefault();

        var divConten1 = document.createElement("div");
        contenedorFormulario1.appendChild(divConten1);

        var textarea1 = document.createElement("textarea");
        textarea1.setAttribute("row","3");
        divConten1.insertBefore(textarea1, divConten1.children[0]);

        var input1 = document.createElement("input");
        divConten1.insertBefore(input1, divConten1.children[1]);
        input1.classList.add("tituloo");

        var boton1 = document.createElement("button");
        boton1.textContent = "hola";
        divConten1.insertBefore(boton1, divConten1.children[2]);

    boton1.addEventListener("click",function(e){
        divConten1.remove();
//--------------es la parte donde se imprime------------------------------------
        var divContenSegundo1 = document.createElement("div");
        contenedorFormulario1.appendChild(divContenSegundo1);

        var divTexto1 = document.createElement("div");
        divTexto1.textContent = textarea1.value;
        divContenSegundo1.insertBefore(divTexto1, divContenSegundo1.children[0]);

        var divTitulo1 = document.createElement("div");
        divTitulo1.textContent = input1.value;
        divContenSegundo1.insertBefore(divTitulo1, divContenSegundo1.children[1]);

        var bodelete1 = document.createElement("button");
        bodelete1.textContent = "Eliminar";
         divContenSegundo1.insertBefore(bodelete1, divContenSegundo1.children[2]);

         bodelete1.addEventListener("click",function(e){
            divContenSegundo1.remove();
         })

    });
    });
//--------------Enlace Bitacora------------------------------------------------------
    enlace.addEventListener("click",function(e){
        e.preventDefault();

        var divConten2 = document.createElement("div");
        contenedorFormulario2.appendChild(divConten2);

        var input2 = document.createElement("input");
        divConten2.insertBefore(input2, divConten2.children[0]);
        input2.classList.add("tituloo");

        var inputsegundo2 = document.createElement("input");
        divConten2.insertBefore(inputsegundo2, divConten2.children[1]);
        inputsegundo2.classList.add("tituloo");

        var boton2 = document.createElement("button");
        boton2.textContent = "hola";
        divConten2.insertBefore(boton2, divConten2.children[2]);

    boton2.addEventListener("click",function(e){
        divConten2.remove();
//----------------------es la parte donde se imprime ---------------------------
        var divContenSegundo2 = document.createElement("div");
        contenedorFormulario2.appendChild(divContenSegundo2);

        var divTitulo2 = document.createElement("div");
        divTitulo2.textContent = input2.value;
        divContenSegundo2.insertBefore(divTitulo2, divContenSegundo2.children[0]);

        var divTitulosegundo2 = document.createElement("div");
        divTitulosegundo2.textContent = input2.value;
        divContenSegundo2.insertBefore(divTitulosegundo2, divContenSegundo2.children[0]);

        var bodelete2 = document.createElement("button");
        bodelete2.textContent = "Eliminar";
         divContenSegundo2.insertBefore(bodelete2, divContenSegundo2.children[2]);

         bodelete2.addEventListener("click",function(e){
            divContenSegundo2.remove();
         })

    });

    });

  //-------------------Pastilla Bitacora------------------------------------
        pastilla.addEventListener("click",function(e){
        e.preventDefault();

        var divConten3 = document.createElement("div");
        contenedorFormulario3.appendChild(divConten3);

        var textarea3 = document.createElement("textarea");
        textarea3.setAttribute("row","3");
        divConten3.insertBefore(textarea3, divConten3.children[0]);

        var boton3 = document.createElement("button");
        boton3.textContent = "hola";
        divConten3.insertBefore(boton3, divConten3.children[1]);

    boton3.addEventListener("click",function(e){
        divConten3.remove();
//--------------es la parte donde se imprime------------------------------------
        var divContenSegundo3 = document.createElement("div");
        contenedorFormulario3.appendChild(divContenSegundo3);

        var divTexto3 = document.createElement("div");
        divTexto3.textContent = textarea3.value;
        divContenSegundo3.insertBefore(divTexto3, divContenSegundo3.children[0]);

        var bodelete3 = document.createElement("button");
        bodelete3.textContent = "Eliminar";
         divContenSegundo3.insertBefore(bodelete3, divContenSegundo3.children[1]);

         bodelete3.addEventListener("click",function(e){
            divContenSegundo3.remove();
         })

    });
    });

})

