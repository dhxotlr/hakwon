import books from './booklist.js'

let list = document.querySelector("#content .list")
let openbutton=document.querySelector("#content h2 span")
let newbook = document.querySelector("#newbook")
let close = document.querySelector("#newbook form .close")
let add = document.querySelector("#newbook form .add")
let input =document.querySelectorAll("#newbook form div:nth-child(1) input")
let button=[]

init();

function init(){
    let booklist = "<ul>"
    for(let i=0; i<books.length; i++){
        booklist += "<li>"
        booklist += "<div>"
        booklist += `<p><img src="./images/${books[i].photo}" onerror="this.src='./images/noimage.gif'" alt="${books[i].subject}"></p>`
        booklist += `<p>${books[i].subject}</p>`
        booklist += `<p>${books[i].author}</p>`
        booklist += `<p>${books[i].publisher}</p>`
        booklist += `<p>${books[i].date}</p>`
        booklist += `<p>${books[i].price}</p>`
        booklist += `<p>${books[i].summary}</p>`
        booklist += `<p><button type="button">삭제</button></p>`
        booklist += "</div></li>"
        
        
    }
    booklist +="</ul>"
    list.innerHTML = booklist;
    button=document.querySelectorAll("#content .list ul li button")
    
}



// openbutton.onclick=function(){

// }
openbutton.addEventListener('click',function(){
    newbook.classList.add("on")
})
close.addEventListener('click',function(){
    newbook.classList.remove("on")
})
add.addEventListener('click',function(){
    let flag = true;
    for(let i=0; i<input.length; i++){
        if(!input[i].value){
           flag=false;
           alert("모든값을 입력하시오")
           return false;
        }
    }
    if(flag){
        let newlist={
            subject: input[0].value,
            author: input[1].value,
            publisher: input[2].value,
            date: input[3].value,
            price: input[4].value,
            summary: input[5].value,
            photo: input[6].value
        }
        books.push(newlist)
        init();

    }
})

for(let i=0; i<button.length; i++){
    button[i].onclick=function(){
       this.parentNode.parentNode.parentNode .remove()
    }
   
}


