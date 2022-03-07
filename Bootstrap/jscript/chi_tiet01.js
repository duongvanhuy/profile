function runImg(a){
    if(a==1){
        document.getElementById('Img').src = "../img/AH01.png";
    }
    if(a==2){
        document.getElementById('Img').src = "../img/AH02.png";
    }
    if(a==3){
        document.getElementById('Img').src = "../img/AH03.png";
    }
    if(a==4){
        document.getElementById('Img').src ="../img/AH04.png";
    }
    if(a==5){
        document.getElementById('Img').src = "../img/AH05.png";
    }
    if(a==6){
        document.getElementById('Img').src = "../img/AH06.png";
    }
    if(a==7){
        document.getElementById('Img').src = "../img/AH07.png";
    }
    if(a==8){
        document.getElementById('Img').src = "../img/AH08.png";
    }
    if(a==9){
        document.getElementById('runImg').src = "../img/BH01.jpg";
    }
    if(a==10){
        document.getElementById('runImg').src = "../img/BH02.jpg";
    }
    if(a==11){
        document.getElementById('runImg').src = "../img/BH03.jpg";
    }
    if(a==12){
        document.getElementById('runImg').src = "../img/BH04.jpg";
    }
    if(a==13){
        document.getElementById('runImg').src = "../img/BH05.jpg";
    }
    if(a==14){
        document.getElementById('runImg').src = "../img/BH06.jpg";
    }
    if(a==15){
        document.getElementById('runImg').src = "../img/BH07.jpg";
    }
    if(a==16){
        document.getElementById('runImg').src = "../img/BH08.jpg";
    }
    if(a==17){
        document.getElementById('runImg').src = "../img/BH09.jpg";
    }
    if(a==18){
        document.getElementById('runImg').src = "../img/BH10.jpg";
    }
    if(a==19){
        document.getElementById('runImg').src = "../img/BH11.jpg";
    }
    if(a==20){
        document.getElementById('runImg').src = "../img/BH12.jpg";
    }
    if(a==21){
        document.getElementById('runImg').src = "../img/BH13.jpg";
    }
    if(a==22){
        document.getElementById('runImg').src = "../img/BH14.jpg";
    }
    if(a==23){
        document.getElementById('runImg').src = "../img/BH15.jpg";
    }
}

$(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop()) {
        $('.f-header').addClass('sticky');
      } else {
        $('.f-header').removeClass('sticky');
      };
    });
});