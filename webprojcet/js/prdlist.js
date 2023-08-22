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
        $('.list .subcate li').on('click',function(){
            $(this).addClass('on').siblings().removeClass('on')
            let text=$(this).text()
            usedata(text)
            
          
        })