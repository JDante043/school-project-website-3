var price;

function checkprice(){
    var sum,firstp, secondp, thirdp, fourthp;
    var first,second,third,fourth;
    
    first = document.getElementById("putih").value;
    if (first == "s"){
         firstp = 50;
    }
    else if (first == "m"){
         firstp = 100;
    }
    else if (first == "l"){
         firstp =   150;
    }
    else{
        firstp = 0;
    }

    second = document.getElementById("celana").value;
    if (second == "s"){
        secondp = 50;
    }
    else if (second == "m"){
        secondp = 100;
    }
    else if (second == "l"){
        secondp = 150;
    }
    else{
        secondp = 0;
    }

    third = document.getElementById("rok").value;
    if (third == "s"){
        thirdp = 50;
    }
    else if (third == "m"){
        thirdp = 100;
    }
    else if (third == "l"){
        thirdp = 150;
    }
    else{
        thirdp = 0;
    }

    fourth = document.getElementById("batik").value;
    if (fourth == "s"){
        fourthp = 50;
    }
    else if (fourth == "m"){
        fourthp = 100;
    }
    else if (fourth == "l"){
        fourthp = 150;
    }
    else{
        fourthp = 0;
    }

    sum = firstp + secondp + thirdp + fourthp;
    price = sum;

    if (price != 0){
        document.getElementById("sum").innerHTML = `Harga total: RP. ${sum}.000`
    }
    else{
        document.getElementById("sum").innerHTML = ''
    }


}

function thanks(){
    alert("Terimakasih sudah membeli, total harga anda Rp." + price + ".000");
}