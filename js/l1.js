function makeExercise(eTitle, phs, ex){
    if(!isEmpty){
        fChildren = form.children
        for(var i = 0; form.children.length > 1; i++){
            if(fChildren[i].tagName == "INPUT"){
                form.removeChild(fChildren[i])
                i--
            }
        }
        isEmpty = true
    }
    var titulo = document.getElementById("titulo-form")
    titulo.textContent = eTitle
    insertInput(phs.length, phs)
    button.addEventListener("click", function (){
        event.preventDefault()
        var res
        switch(ex){
            case 1: res = l1res1(form.member0.value, form.member1.value, form.member2.value)
            break
            case 2: res = l1res2(form.member0.value, form.member1.value)
            break
        }
        var h2result = document.getElementById("result")
        h2result.textContent = "Result: " + res
    })
}

function l1e1(){
    var phs = ["a", "b", "c"]
    makeExercise("Exercício 1", phs, 1)
}

function l1e2(){
    var phs = ["num1", "num2"]
    makeExercise("Exercício 2", phs, 2)
}

function l1res1(a, b, c){
    return (a**2-2*a*b+b**2)/((a-b)*(a-c))
}

function l1res2(num1, num2){
    return (parseInt(num1)+parseInt(num2))/2
}