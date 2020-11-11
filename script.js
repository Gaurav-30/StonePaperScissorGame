var img1 = 0;
var img2 = 0;
var img3 = 0;
function i1(){
    document.getElementById("para").innerHTML="";
    finalcheck1(1);
}
function i2(){
    document.getElementById("para").innerHTML="";
    finalcheck2(2);
}
function i3(){
    document.getElementById("para").innerHTML="";
    finalcheck3(3);
}

function finalcheck1(v){
    var x = Math.floor((Math.random()*3)+1);
    if(x==1){
        document.getElementById("i1").style.width = "180px";
        document.getElementById("i1").style.height = "180px";
        document.getElementById("top").style.display = "flex";
        document.getElementById("top").style.justifyContent = "center";
        document.getElementById("top1").style.display = "flex";
        document.getElementById("top1").style.justifyContent = "center";
        document.getElementById("mid-img").src = "rock.jpg";
        document.getElementById("para").innerHTML = "Draw";
    }

    else if(x==2){
        document.getElementById("i1").style.width = "180px";
        document.getElementById("i1").style.height = "180px";
        document.getElementById("top").style.display = "flex";
        document.getElementById("top").style.justifyContent = "center";
        document.getElementById("top1").style.display = "flex";
        document.getElementById("top1").style.justifyContent = "center";
        document.getElementById("mid-img").src = "paper.jpg";
        document.getElementById("para").innerHTML = "Computer Win";
        document.getElementById("count1").innerHTML = 1;
    }
    else if(x==3){
        document.getElementById("i1").style.width = "180px";
        document.getElementById("i1").style.height = "180px";
        document.getElementById("top").style.display = "flex";
        document.getElementById("top").style.justifyContent = "center";
        document.getElementById("top1").style.display = "flex";
        document.getElementById("top1").style.justifyContent = "center";
        document.getElementById("mid-img").src = "scissor.jpg";
        document.getElementById("para").innerHTML = "You Win";
        document.getElementById("count2").innerHTML = 1;
    }
}





function finalcheck2(v){
    var x = Math.floor((Math.random()*3)+1);
    if(x==1){
        document.getElementById("i2").style.width = "180px";
        document.getElementById("i2").style.height = "180px";
        document.getElementById("top").style.display = "flex";
        document.getElementById("top").style.justifyContent = "center";
        document.getElementById("top1").style.display = "flex";
        document.getElementById("top1").style.justifyContent = "center";
        document.getElementById("mid-img").src = "rock.jpg";
        document.getElementById("para").innerHTML = "You Win";
        document.getElementById("count2").innerHTML = 1;
    }

    else if(x==2){
        document.getElementById("i2").style.width = "180px";
        document.getElementById("i2").style.height = "180px";
        document.getElementById("top").style.display = "flex";
        document.getElementById("top").style.justifyContent = "center";
        document.getElementById("top1").style.display = "flex";
        document.getElementById("top1").style.justifyContent = "center";
        document.getElementById("mid-img").src = "paper.jpg";
        document.getElementById("para").innerHTML = "Draw";
    }
    else if(x==3){
        document.getElementById("i2").style.width = "180px";
        document.getElementById("i2").style.height = "180px";
        document.getElementById("top").style.display = "flex";
        document.getElementById("top").style.justifyContent = "center";
        document.getElementById("top1").style.display = "flex";
        document.getElementById("top1").style.justifyContent = "center";
        document.getElementById("mid-img").src = "scissor.jpg";
        document.getElementById("para").innerHTML = "Computer Win";
        document.getElementById("count1").innerHTML = 1;
    }
}


function finalcheck3(v){
    var x = Math.floor((Math.random()*3)+1);
    if(x==1){
        document.getElementById("i3").style.width = "180px";
        document.getElementById("i3").style.height = "180px";
        document.getElementById("top").style.display = "flex";
        document.getElementById("top").style.justifyContent = "center";
        document.getElementById("top1").style.display = "flex";
        document.getElementById("top1").style.justifyContent = "center";
        document.getElementById("mid-img").src = "rock.jpg";
        document.getElementById("para").innerHTML = "Computer Win";
        document.getElementById("count1").innerHTML = 1;
    }

    else if(x==2){
        document.getElementById("i3").style.width = "180px";
        document.getElementById("i3").style.height = "180px";
        document.getElementById("top").style.display = "flex";
        document.getElementById("top").style.justifyContent = "center";
        document.getElementById("top1").style.display = "flex";
        document.getElementById("top1").style.justifyContent = "center";
        document.getElementById("mid-img").src = "paper.jpg";
        document.getElementById("para").innerHTML = "You Win";
        document.getElementById("count2").innerHTML = 1;
    }
    else if(x==3){
        document.getElementById("i3").style.width = "180px";
        document.getElementById("i3").style.height = "180px";
        document.getElementById("top").style.display = "flex";
        document.getElementById("top").style.justifyContent = "center";
        document.getElementById("top1").style.display = "flex";
        document.getElementById("top1").style.justifyContent = "center";
        document.getElementById("mid-img").src = "scissor.jpg";
        document.getElementById("para").innerHTML = "Draw";
    }
    
}