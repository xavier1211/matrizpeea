function financiero() {

    var vr1 = document.getElementById('f1').value;
    var vr2 = document.getElementById('f2').value;
    var vr3 = document.getElementById('f3').value;
    var vr4 = document.getElementById('f4').value;
    var vr5 = document.getElementById('f5').value;
    var vr6 = document.getElementById('f6').value;
    var vr7 = document.getElementById('f7').value;
    var vr8 = document.getElementById('f8').value;
    var vr9 = document.getElementById('f9').value;

    arrayf=[vr1,vr2,vr3,vr4,vr5,vr6,vr7,vr8,vr9];
    let suma_ff=0;
    let cant_ff=0;
    let promedio_ff;

    for (let i = 0; i < arrayf.length; i++) {
        if(arrayf[i]!=0 && arrayf[i]!==null && arrayf[i]!=''){
            cant_ff++;
            suma_ff=suma_ff+parseFloat(arrayf[i]);
            console.log(arrayf[i])

        }
    }
    console.log(cant_ff);
    promedio_ff=suma_ff/cant_ff;
    console.log(promedio_ff.toFixed(2))
    document.getElementById('valorFF').innerHTML = promedio_ff.toFixed(2);

    return promedio_ff;
    }