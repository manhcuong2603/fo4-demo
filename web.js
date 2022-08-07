var nutdn=document.querySelector('.key3');
var stop=document.querySelector('.stop');
var nutok=document.querySelector('.nutok');
var stop=document.querySelector('.stop');
var banda=document.querySelector('.banda');
var dk=document.querySelector('.register-menu');
var nutdk2=document.querySelector('.nutdk2');
var nutdk1=document.querySelector('.nutdk1');
formdn=document.querySelector('.formdn');
formdk=document.querySelector('.formdk');
var menu=document.querySelector('header');
var btnSearch=document.querySelector('.search-box_btn')

btnSearch.addEventListener('click',function(){
    this.parentElement.classList.toggle('open')
    this.previousElementSibling.focus();
})

$('.sigin-menu').click(function(e){
    e.preventDefault();
    $(formdn).addClass('hien'); 
});


// phần form đăng nhập
nutdn.onclick=function(){
    
    formdn.classList.add('hien');
}
// stop.onclick=function(){
//     console.log('ok');
// }
nutok.onclick=function(){
    formdn.classList.remove('hien');
}
nutdk1.onclick=function(){
    formdn.classList.remove('hien');
}



// click trở về đầu trang
stop.onclick=function(){
    document.documentElement.scrollTop=0;
}

// banda.onclick=function(){
//     formdn.classList.add('hien');
    
// }




// form đăng ký
dk.onclick=function(){
    formdk.classList.add('hien');
}
nutdk2.onclick=function(){
    formdk.classList.remove('hien');
}

////thanh menu doi mau
window.addEventListener('scroll',function(){
    if(this.window.pageYOffset>80){
        menu.classList.add('doimenu');
        
    }
    else{
        menu.classList.remove('doimenu');
    }
})







