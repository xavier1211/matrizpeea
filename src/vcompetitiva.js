function vcompetitiva() {
    var v1 = document.getElementById('vc1').value;
    var v2 = document.getElementById('vc2').value;
    var v3 = document.getElementById('vc3').value;
    var v4 = document.getElementById('vc4').value;
    var v5 = document.getElementById('vc5').value;
    var v6 = document.getElementById('vc6').value;
    var v7 = document.getElementById('vc7').value;
    var v8 = document.getElementById('vc8').value;
    var v9 = document.getElementById('vc9').value;

    arrayVc=[v1,v2,v3,v4,v5,v6,v7,v8,v9];
    let suma_vc=0;
    let cant_vc=0;
    let promedio_vc;

    for (let i = 0; i < arrayVc.length; i++) {
        if(arrayVc[i]!=0 && arrayVc[i]!==null && arrayVc[i]!=''){
            cant_vc++;
            suma_vc=suma_vc+parseFloat(arrayVc[i]);
            console.log(arrayVc[i])

        }
    }
    console.log(cant_vc);
    promedio_vc=suma_vc/cant_vc;
    console.log(promedio_vc.toFixed(2))

    document.getElementById('valorVC').innerHTML = promedio_vc.toFixed(2);
    return promedio_vc;
    }