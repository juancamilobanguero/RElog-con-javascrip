function inicioRelog(){
    let today = new Date();
    let hr = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    ap = (hr < 12) ? "<spam>A.M</spam>" : "<spam>P.M</spam>"
    hr = (hr == 0) ? hr - 12 : hr;

    hr = checktime(hr)
    min = checktime(min)
    sec = checktime(sec)

    document.getElementById("hora").innerHTML= hr;
    document.getElementById("minutos").innerHTML= min;
    document.getElementById("segundos").innerHTML = sec;
    document.getElementById("ampm").innerHTML = ap;

    let tiempo = setTimeout(function(){inicioRelog()},500)
}

function checktime(i){
    if (i < 10){
        i = "0" + i;
    }
    return i;
}