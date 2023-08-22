import books from './booklist.js';
let content = document.querySelector("#content .box")
let subejectId = document.querySelector("#section #addlist #subjectId")
let authorId= document.querySelector("#section #addlist #authorId")
let publisherId = document.querySelector("#section #addlist #publisherId")
let dateId = document.querySelector("#section #addlist #dateId")
let priceId = document.querySelector("#section #addlist #priceId")
let summaryId = document.querySelector("#section #addlist #summaryId")
let photoId = document.querySelector("#section #addlist #photoId")
let elbtn1 =document.querySelector("#section #addlist #btn1")
let bookbtn =document.querySelector("#bookbtn")
init()
function init(){
    let litable ="<ul>"
    for(let i=0; i<books.length; i++){
        litable+="<li>"

        litable+=`<div><img src='./images/${books[i].photo}' onerror="this.src='./images/noimage.gif'"></img></div>`
        litable+=`<div><p>${books[i].subject}</p>`
        litable+=`<p>${books[i].author}</p>`
        litable+=`<p>${books[i].publisher}</p>`
        litable+=`<p>${books[i].date}</p>`
    
        litable+=`<p>${books[i].summary}</p>`
        litable+=`<span>${books[i].price}원</span></div>`
        litable+=`<p><button type="button" onclick="remove">Delete</button><p>`
        litable+="</li>"
        }
        litable+="</ul>"
       content.innerHTML = litable
    }
    elbtn1.addEventListener('click',add)
    let newbooks={}
    bookbtn.onclick =function(){
        this.classList.toggle('active')
    }
    function add(){
        if(subejectId.value&&authorId.value&&publisherId&&dateId&&priceId&&summaryId&&photoId){
            // books.subject.push(subectId.value)
            // books.author.push(authorId.value)
            // books.publisher.push(publisherId.value)
            // books.date.push(dateId.value)
            // books.price.push(priceId.value)
            // books.summary.push(summaryId.value)
            // books.photo.push(photoId.value)

            // this.push(subectId.value)
            // this.push(authorId.value)
            // this.push(publisherId.value)
            // this.push(dateId.value)
            // this.push(priceId.value)
            // this.push(summaryId.value)
            // this.push(photoId.value)
            // }
        newbooks.subject=subejectId.value
        newbooks.author=authorId.value
        newbooks.publisher=publisherId.value
        newbooks.date=dateId.value
        newbooks.price=priceId.value
        newbooks.summary=summaryId.value
        newbooks.photo=photoId.value
        books.push(newbooks);
        init()
        }
       
    }
    
   
console.log(books)