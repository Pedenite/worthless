function l2SelectExercicio(num){
    switch(num){
        case "1": l2e1()
        break
        case "2": l2e2()
        break
        case "3": l2e3()
        break
        case "4": l2e4()
        break
        case "5": l2e5()
        break
        case "6": l2e6()
        break
        case "7": l2e7()
        break
        case "8": l2e8()
        break
        default: alert("Exercício inexistente")
    }
}

function l2SelectResposta(num){
    var res
    switch(num){
        case 1: res = l2res1(form.member0.value, form.member1.value)
        break
        case 2: res = l2res2(form.member0.value, form.member1.value, form.member2.value)
        break
        case 3: res = l2res3(form.member0.value)
        break
        case 4: res = l2res4(form.member0.value)
        break
        case 5: res = l2res5(form.member0.value)
        break
        case 6: res = l2res6(form.member0.value, form.member1.value, form.member2.value, form.member3.value)
        break
        case 7: res = l2res7(form.member0.value)
        break
        case 8: res = l2res8(form.member0.value)
        break
        default: console.log("Impossible...")
    }
    return res
}

function l2e1(){
    var phs = ["a", "b"]
    makeExercise("Exercício 1", phs, 1)
}

function l2e2(){
    var phs = ["a", "b", "c"]
    makeExercise("Exercício 2", phs, 2)
}

function l2e3(){
    var phs = ["IMC"]
    makeExercise("Exercício 3", phs, 3)
}

function l2e4(){
    var phs = ["x"]
    makeExercise("Exercício 4", phs, 4)
}

function l2e5(){
    var phs = ["Sentença com operação"]
    makeExercise("Exercício 5", phs, 5)
}

function l2e6(){
    var phs = ["Ponto A (x,y)", "Altura do retângulo", "Largura do retângulo", "Ponto B (x,y)"]
    makeExercise("Exercício 6", phs, 6)
}

function l2e7(){
    var phs = ["C"]
    makeExercise("Exercício 7", phs, 7)
}

function l2e8(){
    var phs = ["Média final"]
    makeExercise("Exercício 8", phs, 8)
}

function l2res1(a, b){
    
}

function l2res2(a, b, c){
    
}

function l2res3(imc){
    
}

function l2res4(x){
    
}

function l2res5(acb){
    
}

function l2res6(A, h, l, B){
    
}

function l2res7(c){
    
}

function l2res8(mf){

}