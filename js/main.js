var title = document.querySelector("#titulo")
title.textContent = "Lista 1"

var form = document.querySelector("#form-geral")
var button = document.querySelector("#submit")

var menuEx = document.getElementById("menu-exercicio")
var lista = 1

switch(lista){
    case 1: makeList(form, button, menuEx, 1, 7)
    break
}

function makeList(form, button, menu, lista, qtd){
    for(var i = 0; i < qtd; i++){
        var newDiv = document.createElement("div")
        newDiv.id = "opt" + i 
        newDiv.textContent = i+1
        menu.appendChild(newDiv)  
        newDiv.addEventListener("click", function(){
            event.preventDefault()
            selectExercicio(form, button, lista, this.textContent)
        })
    }
}

function selectExercicio(form, button, lista, num){
    if(lista == 1){
        switch(num){
            case "1": l1e1(form, button)
            break
            case "2": l1e2(form, button)
            break
        }
    }
}

function insertInput(form, qtd, phs){
    for(var i = 0; i < qtd; i++){
        var input = document.createElement("input")
        input.type = "text"
        input.name = "member" + i
        input.placeholder = phs[i]
        form.insertBefore(input, form.children[form.children.length-1])
        //var br = document.createElement("br")
        //form.insertBefore(br, form.children[form.children.length-1])
    }
}