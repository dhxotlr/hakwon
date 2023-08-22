import books from './booklist.js';

let $list = $('#content .list')
let $span = $('#content h2 span')
let $newbook = $('#newbook')
let $close = $('#newbook form .close')
let $add = $('#newbook form .add')
let $input = $('#newbook form div:nth-child(1) input')

function listing(){
    let booklist = "<ul>"
    for (let i=0; i<books.length; i++){
        booklist += "<li>"
        booklist += "<div>"
        booklist += `<p><img src="./images/${books[i].photo}" onerror="this.src='./images/noimage.gif'" alt="${books[i].subject}"></p>`
        booklist += `<p>${books[i].subject}</p>`
        booklist += `<p>${books[i].author}</p>`
        booklist += `<p>${books[i].publisher}</p>`
        booklist += `<p>${books[i].date}</p>`
        booklist += `<p>${books[i].price}</p>`
        booklist += `<p>${books[i].summary}</p>`
        booklist += `<button type="button">삭제</button>`
        booklist += `</div>`
        booklist += `</li>`
    }
    booklist += "</ul>"
    $list.html(booklist)
}
listing()

$span.on('click', function(){
    $newbook.addClass('on')
})
$close.on('click', function(){
    $newbook.removeClass('on')
})

$add.on('click', function(){
    let flag = true

    $('form input').each(function(){
        if($(this).val()==""){
            flag=false;

        }
    })
    // $input.each(function(){
    //     if($(this).val()==""){
    //         flag=false;

    //     }
    // })
    if(flag){
        let newlist = { subject : $('form input').eq(0).val(),
            author : $('form input').eq(1).val(),
            publisher : $('form input').eq(2).val(),
            date : $('form input').eq(3).val(),
            price : $('form input').eq(4).val(),
            summary : $('form input').eq(5).val(),
            photo : $('form input').eq(6).val()
        }
        books.push(newlist)
        listing()
    }else{
        alert("모든값을 입력하세요")
    }
    
})
$('#content .list').on('click','ul li button',function(){
    console.log($(this).parent().parent().index())
    let num=$(this).parent().parent().index()
    books.splice(num,1)
    listing()
})
