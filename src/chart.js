
function chart(vx1,vy1){
//  let vx=vx1;
//  let vy= vy1;
 let vx=3;
 let vy= -2;
 let tipo_estr ;
 let r1;
 let r2;
 let r3;
 let r4;
 let msj;

if ( vx>=0 && vy>=0){
    //primer cuadrante
    tipo_estr="AGRESIVO";
    r1=" Diversificación concentrica";
    r2=" Intehración vertical";
    r3="Concentracion";
    r4=" Liderazgo en costos";
    msj=" La organización debe explotar su posicion favorable";
}
else if (vx<0 && vy>=0){
    //segundo cudrante
    tipo_estr="CONSERVADOR";
}
else if (vx<0 && vy<0){
    //tercer cudrante
    tipo_estr="DEFENSIVO";
}
else{
    tipo_estr="COMPETITIVO";
}
var ctx= document.getElementById("myChart").getContext("2d");
        var myChart= new Chart(ctx,{
            type:"line",
            data:{
                labels:['col1','col2'],
                datasets:[{
                        label:tipo_estr,
                        data: [{
                            x: 0,
                            y: 0
                        }, {
                            x: vx,
                            y: vy
                        },],
                        backgroundColor:[
                            'rgb(23, 23, 211, 0.1)'

                        ],
                        lineTension:1,
                        borderColor:[
                            'rgba(23, 23, 211, 1)'
                        ],


                }]
            },
            options:{
                scales: {
                xAxes: [{
                    type: 'linear',
                    position: 'bottom'
                    }],
                    yAxes: [{
                    type: 'linear',
                    position: 'bottom'
                    }]
                    }
                }
        });
    }