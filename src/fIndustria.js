function fIndustria() {
    var f1 = document.getElementById('fi1').value;
    var f2 = document.getElementById('fi2').value;
    var f3 = document.getElementById('fi3').value;
    var f4 = document.getElementById('fi4').value;
    var f5 = document.getElementById('fi5').value;
    var f6 = document.getElementById('fi6').value;
    var f7 = document.getElementById('fi7').value;
    var f8 = document.getElementById('fi8').value;
    var f9 = document.getElementById('fi9').value;

    arrayFi=[f1,f2,f3,f4,f5,f6,f7,f8,f9];
    let suma_fi=0;
    let cant_fi=0;
    let promedio_fi;

    for (let i = 0; i < arrayFi.length; i++) {
        if(arrayFi[i]!=0 && arrayFi[i]!==null && arrayFi[i]!=''){
            cant_fi++;
            suma_fi=suma_fi+parseFloat(arrayFi[i]);
            console.log(arrayFi[i])

        }
    }
    console.log(cant_fi);
    promedio_fi=suma_fi/cant_fi;
    console.log(promedio_fi.toFixed(2))


    document.getElementById('valorFI').innerHTML = promedio_fi.toFixed(2);
    return promedio_fi;
    }