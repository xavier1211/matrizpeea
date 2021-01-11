function poligono (rff1,rvc1,ree1,rfi1,vx1,vy1){

  let  rff = rff1;
  let  rvc =  rvc1;
  let ree = ree1;
  let rfi = rfi1;
  //vector
 let vx=vx1;
 let vy= vy1;
//  let vx=4;
//  let vy=-3;
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
    r3=" Concentración";
    r4=" Liderazgo en costos";
    msj=" La organización debe explotar su posición favorable";
    document.getElementById('op1').innerHTML = r1;
    document.getElementById('op2').innerHTML = r2;
    document.getElementById('op3').innerHTML = r3;
    document.getElementById('op4').innerHTML = r4;
    document.getElementById('msj').innerHTML = msj;

}
else if (vx<0 && vy>=0){
    //segundo cudrante
    tipo_estr="CONSERVADOR";

    r1=" Segmentación de los mercados";
    r2=" Diversificación conglomerada";
    r3=" Diversificación global";
    r4=" Status quo";
    msj=" Organización puede hacer algunas cosas mejores que su competidores y captura ciertos mercados";
    document.getElementById('op1').innerHTML = r1;
    document.getElementById('op2').innerHTML = r2;
    document.getElementById('op3').innerHTML = r3;
    document.getElementById('op4').innerHTML = r4;
    document.getElementById('msj').innerHTML = msj;

}
else if (vx<0 && vy<0){
    //tercer cudrante
    tipo_estr="DEFENSIVO";

    r1=" Reducción de costos";
    r2=" Fusión";
    r3=" Liquidación";
    r4=" Atrichenramiento";
    msj=" La organización debe buscar la supervivencia y salir de la situacion crítica";
    document.getElementById('op1').innerHTML = r1;
    document.getElementById('op2').innerHTML = r2;
    document.getElementById('op3').innerHTML = r3;
    document.getElementById('op4').innerHTML = r4;
    document.getElementById('msj').innerHTML = msj;

}
else if (vx>=0 && vy<0){
    tipo_estr="COMPETITIVO";

    r1=" Fusión concéntrica";
    r2=" Fusión conglomerada";
    r3=" Reconversión";
    r4=" Diferenciación ";
    msj=" La organización puede hacer las cosas mejor que sus competidores";
    document.getElementById('op1').innerHTML = r1;
    document.getElementById('op2').innerHTML = r2;
    document.getElementById('op3').innerHTML = r3;
    document.getElementById('op4').innerHTML = r4;
    document.getElementById('msj').innerHTML = msj;

}
else{
    alert('Faltan ingresar datos a las estrategias...')

}
//   let  rff = rff1;
//   let  rvc =  rvc1;
//   let ree = ree1;
//   let rfi = rfi1;
var ctx= document.getElementById("myPoligono").getContext("2d");
        var myChart= new Chart(ctx,{
            type:"line",
            data:{
                labels:['col1','col2'],
                datasets:[
                    {
                        label:'Matriz PEEA',
                        data: [{x:0,y:6},{x:-6,y:0},{x:0,y:-6}, {x:6,y:0},{x:0,y:6}],
                        backgroundColor:[
                            'rgb(255,0,0, 0)',

                        ],
                        lineTension:0,
                        borderColor:[
                            'rgba(255,0,0, 0)',
                        ],


                }
                    ,{
                        label:'POLÍGONO',
                        data: [{x:0,y:rff},{x:rvc,y:0},{x:0,y:ree}, {x:rfi,y:0},{x:0,y:rff}],
                        backgroundColor:[
                            'rgb(255,0,0, 0)',

                        ],
                        lineTension:0,
                        borderColor:[
                            'rgba(255,0,0, 0.6)',
                        ],


                },
                {
                    label:tipo_estr,
                        data: [{x:0,y:0},{x:vx,y:vy}],
                        backgroundColor:[
                            'rgb(0,0, 255, 0.2)',

                        ],
                        lineTension:0,
                        borderColor:[
                            'rgba(0,0, 255, 1)',
                        ],
                        showline: false,

                }


            ]
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