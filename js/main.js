var lista = 0
var title = document.querySelector("#titulo")

var form = document.querySelector("#form-geral")
var button = document.querySelector("#submit")

var menuEx = document.getElementById("menu-exercicio")

var formIsEmpty = true
var menuIsEmpty = true

function selectList(){
    lista = Number(document.getElementById("lista-select").value)

    title.textContent = "Lista " + lista
    switch(lista){
        case 1: makeList(7)
        break
        case 2: makeList(8)
        break
        default: alert("Lista inexistente")
    }
}

function makeList(qtd){
    if(!menuIsEmpty){
        mChildren = menuEx.children
        for(var i = 0; menuEx.children.length > 0; i++){
            if(mChildren[i].tagName == "DIV"){
                menuEx.removeChild(mChildren[i])
                i--
            }
        }
        menuIsEmpty = true
    }
    menuIsEmpty = false
    for(var i = 0; i < qtd; i++){
        var newDiv = document.createElement("div")
        newDiv.id = "opt" + i 
        newDiv.textContent = i+1
        menuEx.appendChild(newDiv) 
        newDiv.addEventListener("click", function(){
            event.preventDefault()
            switch(lista){
                case 1: l1SelectExercicio(this.textContent)
                break
                case 2: l2SelectExercicio(this.textContent)
                break
                default: console.log("WTF!?")
            }
        })
    }
}

function insertInput(qtd, phs){
    formIsEmpty = false
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

function makeExercise(eTitle, phs, ex){
    if(!formIsEmpty){
        fChildren = form.children
        for(var i = 0; form.children.length > 1; i++){
            if(fChildren[i].tagName == "INPUT"){
                form.removeChild(fChildren[i])
                i--
            }
        }
        formIsEmpty = true
    }
    var titulo = document.getElementById("titulo-form")
    titulo.textContent = eTitle
    insertInput(phs.length, phs)
    button.addEventListener("click", function (){
        event.preventDefault()
        var res
        switch(lista){
            case 1: res = l1SelectResposta(ex)
            break
            case 2: res = l2SelectResposta(ex)
            break
        }
        var h2result = document.getElementById("result")
        h2result.textContent = "Result: " + res
    })
}