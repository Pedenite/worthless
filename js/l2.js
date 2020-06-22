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
    var phs = ["Ponto de origem do retângulo (x,y)", "Altura do retângulo", "Largura do retângulo", "Ponto P (x,y)"]
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
    return a > b? a : b
}

function l2res2(a, b, c){
    var r = a < b? a : b
    r = r < c? r : c
    return r
}

function l2res3(imc){
    if(imc < 18){
        return "abaixo do peso"
    } else if (imc < 25){
        return "saudável"
    } else if (imc < 30){
        return "peso em excesso"
    } else if (imc < 35){
        return "obeso"
    } else if (imc < 40){
        return "obesidade severa"
    } else {
        return "obesidade mórbida"
    }
}

function l2res4(x){
    if(x < -1){
        return 0
    } else if(x < 0){
        return 1
    } else if(x <= 1){
        return 2
    } else {
        return 3
    }
}

function l2res5(acb){
    var op
    if(acb.includes("+")){
        op = acb.split("+")
        return +op[0] + +op[1]
    } else if(acb.includes("-")){
        op = acb.split("-")
        return op[0] - op[1]
    } else if(acb.includes("*")){
        op = acb.split("*")
        return op[0] * op[1]
    } else if(acb.includes("/")){
        op = acb.split("/")
        return op[0] / op[1]
    } else {
        return "<span class=\"error\">não foi encontrado nenhum dos operadores válidos<br>(\"+\", \"-\", \"*\", \"/\")</span>"
    }
}

function l2res6(o, h, l, p){
    o = o.split(",")
    p = p.split(",")
    var ans
    if (o.length != 2 || p.length != 2){
        return "<span class=\"error\">Favor especificar os pontos no formato correto (x,y)</span>"
    }

    var or = +o[0] + +l
    var ou = +o[1] + +h 
    if(p[0] >= o[0] && p[0] <= or && p[1] >= o[1] && p[1] <= ou){
        if (p[0] == o[0] || p[0] == or || p[1] == o[1] || p[1] == ou){
            ans = "em alguma das linhas que definem o retâgulo"
        } else {
            ans = "dentro do retângulo"
        }
    }  else {
        ans = "fora do retângulo" 
    }
    return "P está " + ans
}

function l2res7(c){
    if(c == 'f' || c == 'F'){
        return "mulher"
    } else if (c == 'm' || c == 'M'){
        return "homem"
    } else {
        return "<span class=\"error\">caractere inválido!</span>"
    }
}

function l2res8(mf){
    var err = "<span class=\"error\">nota inválida!</span>"
    if (mf < 0){
        return err
    } else if (mf == 0){
        return "SR"
    } else if (mf < 3){
        return "II"
    } else if (mf < 5){
        return "MI"
    } else if (mf < 7){
        return "MM"
    } else if (mf < 9){
        return "MS"
    } else if (mf <= 10){
        return "SS"
    } else {
        return err
    }
}