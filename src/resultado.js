
function resultado (){

    //Finaciero

    var rff = financiero().toFixed(2);

    //Ventajda Competitiva

    var rvc = vcompetitiva().toFixed(2);

    // Estabilidad del Entorno

    var ree =  estEntorno().toFixed(2);

    //Fortaleza de la industria


    var rfi = fIndustria().toFixed(2);

    //resultado

    var cy=(parseFloat(rfi)+parseFloat(rvc));
    var cx=(parseFloat(ree)+parseFloat(rff));
    document.getElementById('vx').innerHTML = cx.toFixed(2) ;
    document.getElementById('vy').innerHTML = cy.toFixed(2) ;
    poligono(rff,rvc,ree,rfi,cx,cy);
    // chart(cx,cy);

}