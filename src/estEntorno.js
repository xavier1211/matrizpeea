function estEntorno() {
    var e1 = document.getElementById('ee1').value;
    var e2 = document.getElementById('ee2').value;
    var e3 = document.getElementById('ee3').value;
    var e4 = document.getElementById('ee4').value;
    var e5 = document.getElementById('ee5').value;
    var e6 = document.getElementById('ee6').value;
    var e7 = document.getElementById('ee7').value;
    var e8 = document.getElementById('ee8').value;

    arrayEe=[e1,e2,e3,e4,e5,e6,e7,e8];
    let suma_ee=0;
    let cant_ee=0;
    let promedio_ee;

    for (let i = 0; i < arrayEe.length; i++) {
        if(arrayEe[i]!=0 && arrayEe[i]!==null && arrayEe[i]!=''){
            cant_ee++;
            suma_ee=suma_ee+parseFloat(arrayEe[i]);
            console.log(arrayEe[i])

        }
    }
    console.log(cant_ee);
    promedio_ee=suma_ee/cant_ee;
    console.log(promedio_ee.toFixed(2))

    document.getElementById('valorEE').innerHTML = promedio_ee.toFixed(2);

    return promedio_ee;
    }