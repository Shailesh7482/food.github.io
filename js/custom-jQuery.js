

//   $("#toggle").click(function(){
//     $("ul").show(2000)
// })

// $(document).ready(function(){
//     $("#slide").slideDown(1000)
// })


$(document).ready(function () {
    $(".mobile-nav i").click(function () {
        $(".site-nav-menu").toggleClass("mobile-menu")
    })
})



    window.addEventListener('scroll',function(){
        var navbar = document.querySelector('.header-area');
        if(window.pageYOffset > 300){
            navbar.classList.add('sticky');
        }
        else{
            navbar.classList.remove('sticky');
            navbar.classList.add('sticky-out');
        }
    });
// })