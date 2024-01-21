function checkprice(){
    var price = 0;
    var first,second,third,fourth;
    
    first = document.getElementById("putih").value;
    if (first == "s"){
        price += 50;
    }
    else if (first == "m"){
        price += 100;
    }
    else if (first == "l"){
        price += 150;
    }

    second = document.getElementById("celana").value;
    if (second == "s"){
        price += 50;
    }
    else if (second == "m"){
        price += 100;
    }
    else if (second == "l"){
        price += 150;
    }

    third = document.getElementById("rok").value;
    if (third == "s"){
        price += 50;
    }
    else if (third == "m"){
        price += 100;
    }
    else if (third == "l"){
        price += 150;
    }

    fourth = document.getElementById("batik").value;
    if (fourth == "s"){
        price += 50;
    }
    else if (fourth == "m"){
        price += 100;
    }
    else if (fourth == "l"){
        price += 150;
    }

    if (price != 0){
        document.getElementById("sum").innerHTML = `Harga total: RP. ${price}.000`
    }
    else{
        document.getElementById("sum").innerHTML = ''
    }
}

function thanks(){
    alert("Terimakasih sudah membeli :)");
}