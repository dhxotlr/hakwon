    // function usedata(mcate){
        //     let newdata=data.filter((value,index)=>{
        //         return value.mcategory==mcate
        //     })
        // }
        function usedata(mcate){
            let newdata=data.filter(value=>value.mcategory==mcate)
            let a =''
            let ulli = "<ul>"
            newdata.forEach(value=>{
                ulli += "<li>"
                ulli += `<a href="./detail.html?${value.name}&${value.price}&${value.image}&${value.detailinfo}&${value.option.size}&${value.option.color}">`
                ulli += `<img src="../images/${value.image}" alt="${value.name}">`
                ulli += `<div class="info">`
                ulli += `<p class="name">${value.name}</p>`
                ulli += `<p class="price">${value.price}</p>`
                ulli +=`</div></a></li>`
                
                // let b = a.size
                // let c = c.filter(value=>)
                a= value.option.size
            })
            ulli +="</ul>"
            
            console.log(a)
            $('.list .product ul').remove()
            $('.list .product').append(ulli)   
            
            // $('.list .product').html(ulli)   동일 기능 보안 취약



        }
            // let park = {a:"123",b:"456"}
            // 객체에 키 이름을 직접 붙일때
            // park.a == park["a"]
            // park.b == park["b"]

            // let bcate = 객체의 키를 저장하는 변수
            // 객체에 키 이름을 담은 변수를 붙일때
            // park[bcate]

        // function usedata(mcate, bcate){
        //     let newdata=data[bcate].filter(value=>value.mcategory==mcate)// 키이름을 변수가 가지고 있을때에는 []안에 쓴다. bcate = man또는 woman 의 값을 받는다.
        //     let a =''
        //     let ulli = "<ul>"
        //     newdata.forEach(value=>{
        //         ulli += "<li>"
        //         ulli +=`<a href="./detail.html?${value.name}&${bcate}`
        //         ulli += `<img src="../images/${value.image}" alt="${value.name}">`
        //         ulli += `<div class="info">`
        //         ulli += `<p class="name">${value.name}</p>`
        //         ulli += `<p class="price">${value.price}</p>`
        //         ulli +=`</div></a></li>`
                
        //         // let b = a.size
        //         // let c = c.filter(value=>)
        //         a= value.option.size
        //     })
        //     ulli +="</ul>"
            
        //     console.log(a)
        //     $('.list .product ul').remove()
        //     $('.list .product').append(ulli)   
            
            // $('.list .product').html(ulli)   동일 기능 보안 취약



        // }
        $('.list .subcate li').on('click',function(){
            $(this).addClass('on').siblings().removeClass('on')
            let text=$(this).text()
            usedata(text)
            
          
        })