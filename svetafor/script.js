
function button() {
    document.getElementById("qizil").style.backgroundColor = "red";
    document.getElementById("sariq").style.backgroundColor = "yellow";
    document.getElementById("yashil").style.backgroundColor = "lime";

    setTimeout(function () {
        document.getElementById("qizil").style.backgroundColor = "#555";
        document.getElementById("sariq").style.backgroundColor = "#555";
        document.getElementById("yashil").style.backgroundColor = "#555";
    }, 2000);
}

let holat = 0;

function button() {

    let qizil = document.getElementById("qizil");
    let sariq = document.getElementById("sariq");
    let yashil = document.getElementById("yashil");

   
    qizil.style.backgroundColor = "#555";
    sariq.style.backgroundColor = "#555";
    yashil.style.backgroundColor = "#555";

  
    if (holat === 0) {
        qizil.style.backgroundColor = "red";
    }

    else if (holat === 1) {
        sariq.style.backgroundColor = "yellow";
    }

    else if (holat === 2) {
        yashil.style.backgroundColor = "lime";
    }

    holat++;

    if (holat > 2) {
        holat = 0;
    }
}
