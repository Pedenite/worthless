function l3SelectExercicio(num){
    switch(num){
        case "1": l3e1()
        break
        case "2": l3e2()
        break
        case "3": l3e3()
        break
        case "4": l3e4()
        break
        case "5": l3e5()
        break
        case "6": l3e6()
        break
        case "7": l3e7()
        break
        default: alert("Exercício inexistente")
    }
}

function l3SelectResposta(num){
    var res
    switch(num){
        case 1: res = l3res1(form.member0.value)
        break
        case 2: res = l3res2(form.member0.value)
        break
        case 3: res = l3res3(form.member0.value, form.member1.value)
        break
        case 4: res = l3res4(form.member0.value)
        break
        case 5: res = l3res5(form.member0.value, form.member1.value)
        break
        case 6: res = l3res6()
        break
        case 7: res = l3res7(form.member0.value, form.member1.value, form.member2.value)
        break
        default: console.log("Impossible...")
    }
    return res
}

function l3e1(){
    var phs = ["n"]
    makeExercise("Exercício 1", phs, 1)
}

function l3e2(){
    var phs = ["n"]
    makeExercise("Exercício 2", phs, 2)
}

function l3e3(){
    var phs = ["a", "b"]
    makeExercise("Exercício 3", phs, 3)
}

function l3e4(){
    var phs = ["n"]
    makeExercise("Exercício 4", phs, 4)
}

function l3e5(){
    var phs = ["a", "b"]
    makeExercise("Exercício 5", phs, 5)
}

function l3e6(){
    var phs = []
    makeExercise("Exercício 6", phs, 6)
}

function l3e7(){
    var phs = ["a", "b", "c"]
    makeExercise("Exercício 7", phs, 7)
}

function l3res1(n){
    insideFunc = true
    if(n <= 0){
        return "<span class=\"error\">Inválido</span>"
    }
    clearForm()
    var phs = new Array(n*2)
    for(i = 0; i < n*2; i++){
        if(i%2 == 0){
            phs[i] = "Altura " + Number((i+1)>>1)
        } else {
            phs[i] = "Idade " + Number(i>>1)
        }
    }
    insertInput(1, n*2, phs)

    var valido = true
    button.addEventListener("click", function (){
        event.preventDefault()
        var ma = mi = 0
        for(i = 0; i < n*2; i+=2){
            valido = true
            let altura = form.children[i].value
            let idade = form.children[i+1].value
            if(altura <= 0 || idade <= 0){
                valido = false
                break
            }
            ma += Number(altura)
            mi += Number(idade)
        }
        var res
        if(valido){
            res = "<br>Média de alturas: " + (ma/n).toFixed(2) + "<br>Média de idades: " + mi/n
        } else {
            res = "<span class=\"error\">n, Altura e idade devem ser maiores que 0!</span>"
        }
        var h2result = document.getElementById("result")
        h2result.innerHTML = "Result: " + res
    })
    return "Digite os valores!"
}

function l3res2(n){
    var res = "<br>"
    while(n > 0){
        res = "<br>" + (n%10) + res
        n = Math.floor(n/10)
    }
    return res
}

function l3res3(a, b){
    if(a >= b){
        return "<span class=\"error\">Favor, respeitar a regra: a &lt; b</span>"
    }
    var res = 0
    for(i = Number(a); i <= b; i++){ // definitely not the best way to solve (n(n+1)/2)
        res += i
    }
    return res
}

function l3res4(n){
    if (n <= 2){
        return "<span class=\"error\">Favor, respeitar a regra: n > 2</span>"
    }
    var res = 0
    var n1 = n2 = 1
    for(let i = 3; i <= n; i++){
        res = n1 + n2
        n1 = n2
        n2 = res
    }
    return res
}

function l3res5(a, b){
    if(a >= b){
        return "<span class=\"error\">Favor, respeitar a regra: a &lt; b</span>"
    }
    var res = 0
    var ans = ""
    for(i = Number(a); i <= b; i++){
        res += i
        ans += res + " "
    }
    return ans
}

function l3res6(){
    var result = "<table><caption>Tabuada da multiplicação</caption>"
    for(i = 0; i <= 10; i++){
        result += "<tr>"
        for(j = 0; j <= 10; j++){
            result += "<td>" + j + "x" + i + " = " + Number(i*j) + "</td>"
        }
        result += "</tr>"
    }
    result += "</table>"
    return result
}

function l3res7(a, b, c){
    if(Number(a) >= Number(b) || Number(a) <= 0){
        return "<span class=\"error\">Favor, respeitar a regra: 0 &lt; a &lt; b</span>"
    }
    if(c != 'a' && c != 'b'){
        return "<span class=\"error\">c só pode ter os valores \"a\" ou \"b\"</span>"
    }
    var res = ""
    var n = Number(a)
    if(c == 'a'){
        while(n <= b){
            res += n + " "
            n += Number(a)
        }
    } else {
        if(n%2 == 0){
            n++
        }
        while(n <= b){
            res += n + " "
            n += Number(2)
        }
    }
    return res
}