var lista = 0
var title = document.querySelector("#titulo")

var form = document.querySelector("#form-geral")
var button = document.querySelector("#submit")

var menuEx = document.getElementById("menu-exercicio")

var formIsEmpty = true
var menuIsEmpty = true

var insideFunc = false

function selectList(){
    lista = Number(document.getElementById("lista-select").value)

    title.textContent = "Lista " + lista
    switch(lista){
        case 1: makeList(7)
        break
        case 2: makeList(8)
        break
        case 3: makeList(7)
        break
        default: alert("Lista inexistente")
    }
}

function makeList(qtd){
    if(!menuIsEmpty){
        clearMenu()
    }
    menuIsEmpty = false
    for(var i = 0; i < qtd; i++){
        var newDiv = document.createElement("div")
        newDiv.id = "opt" + i 
        newDiv.textContent = i+1
        menuEx.appendChild(newDiv) 
        newDiv.addEventListener("click", function(){
            event.preventDefault()
            insideFunc = false
            switch(lista){
                case 1: l1SelectExercicio(this.textContent)
                break
                case 2: l2SelectExercicio(this.textContent)
                break
                case 3: l3SelectExercicio(this.textContent)
                break
                default: console.log("WTF!?")
            }
        })
    }
}

function clearMenu(){
    mChildren = menuEx.children
    for(var i = 0; menuEx.children.length > 0; i++){
        if(mChildren[i].tagName == "DIV"){
            menuEx.removeChild(mChildren[i])
            i--
        }
    }
    menuIsEmpty = true
}

function insertInput(i, qtd, phs){
    var inicial = i
    formIsEmpty = false
    for(; i < qtd+inicial; i++){
        var input = document.createElement("input")
        input.type = "text"
        input.name = "member" + Number(i-inicial)
        input.placeholder = phs[i-inicial]
        form.insertBefore(input, form.children[form.children.length-1])
        //var br = document.createElement("br")
        //form.insertBefore(br, form.children[form.children.length-1])
    }
}

function clearForm(){
    fChildren = form.children
    for(var i = 0; form.children.length > 1; i++){
        if(fChildren[i].tagName == "INPUT"){
            form.removeChild(fChildren[i])
            i--
        }
    }
    formIsEmpty = true
}

function makeExercise(eTitle, phs, ex){
    if(!formIsEmpty){
        clearForm()
    }
    var titulo = document.getElementById("titulo-form")
    titulo.textContent = eTitle
    insertInput(0, phs.length, phs)
    button.addEventListener("click", function (){
        event.preventDefault()
        var res
        if(!insideFunc){
            switch(lista){
                case 1: res = l1SelectResposta(ex)
                break
                case 2: res = l2SelectResposta(ex)
                break
                case 3: res = l3SelectResposta(ex)
                break
            }
            var h2result = document.getElementById("result")
            h2result.innerHTML = "Result: " + res
        }
    })
}
