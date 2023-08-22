// head 구역에서 연결할때는 
// <script src="" defer></script> defer 속성을 추가하거나
// js파일 내에 window.onload = function(){ 코드를 작성}

    var img = document.getElementsByTagName('img');
    img[0].onmouseover = function(){
        this.src ='./source/6장/media/banana.png'
        this.style.border = '2px solid red'
    }
    img[0].onmouseout = function(){
        this.src='./source/6장/media/apple.png'
        this.style.border = '2px solid blue'
    }
       

