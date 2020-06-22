function l1SelectExercicio(num){
    switch(num){
        case "1": l1e1()
        break
        case "2": l1e2()
        break
        case "3": l1e3()
        break
        case "4": l1e4()
        break
        case "5": l1e5()
        break
        case "6": l1e6()
        break
        case "7": l1e7()
        break
        default: alert("Exercício inexistente")
    }
}

function l1SelectResposta(num){
    var res
    switch(num){
        case 1: res = l1res1(form.member0.value, form.member1.value, form.member2.value)
        break
        case 2: res = l1res2(form.member0.value, form.member1.value)
        break
        case 3: res = l1res3(form.member0.value, form.member1.value, form.member2.value, form.member3.value)
        break
        case 4: res = l1res4(form.member0.value, form.member1.value)
        break
        case 5: res = l1res5(form.member0.value, form.member1.value, form.member2.value)
        break
        case 6: res = l1res6(form.member0.value)
        break
        case 7: res = l1res7(form.member0.value, form.member1.value)
        break
        default: console.log("Impossible...")
    }
    return res
}

function l1e1(){
    var phs = ["a", "b", "c"]
    makeExercise("Exercício 1", phs, 1)
}

function l1e2(){
    var phs = ["num1", "num2"]
    makeExercise("Exercício 2", phs, 2)
}

function l1e3(){
    var phs = ["Ponto A coordenada x", "Ponto A coordenada y", "Ponto B coordenada x", "Ponto B coordenada y"]
    makeExercise("Exercício 3", phs, 3)
}

function l1e4(){
    var phs = ["Valor da compra", "Dias de atraso"]
    makeExercise("Exercício 4", phs, 4)
}

function l1e5(){
    var phs = ["Distância (metros)", "Horário de saída (hh:mm:ss)", "Horário de chegada (hh:mm:ss)"]
    makeExercise("Exercício 5", phs, 5)
}

function l1e6(){
    var phs = ["Tempo (segundos)"]
    makeExercise("Exercício 6", phs, 6)
}

function l1e7(){
    var phs = ["A (numerador/denominador)", "B (numerador/denominador)"]
    makeExercise("Exercício 7", phs, 7)
}

function l1res1(a, b, c){
    return (a**2-2*a*b+b**2)/((a-b)*(a-c))
}

function l1res2(num1, num2){
    return (parseInt(num1)+parseInt(num2))/2
}

function l1res3(ax, ay, bx, by){
    let a = ax - bx
    let b = ay - by
    return Math.sqrt(a**2 + b**2)
}

function l1res4(v, da){
    return +v + (da*0.05*v)
}

function l1res5(dm, ts, tc){
    var timeS = ts.split(":")
    var timeC = tc.split(":")
    if(timeS.length != 3 || timeC.length != 3){
        return "<span class=\"error\">Favor inserir os horários no formato hh:mm:ss</span>"
    }

    ts = +timeS[2] + +timeS[1]*60 + +timeS[0]*3600
    tc = +timeC[2] + +timeC[1]*60 + +timeC[0]*3600

    var total = tc - ts
    return (dm/1000)/(total/3600) + " km/h"
}

function l1res6(z){
    var x = Math.floor(z/3600)
    z %= 3600
    var y = Math.floor(z/60)
    z %= 60

    return x + " horas, " + y + " minutos, " + z + " segundos!"
}

function l1res7(a, b){
    var A = a.split("/")
    var B = b.split("/")
    if(![1, 2].includes(A.length) || ![1, 2].includes(B.length)){
        return "<span class=\"error\">formato incorreto</span>"
    }
    if(A.length == 1){
        A.push(1)
    }
    if(B.length == 1){
        B.push(1)
    }

    var num = A[0]*B[1] + B[0]*A[1]
    var den = A[1] * B[1]
    return num + "/" + den
}