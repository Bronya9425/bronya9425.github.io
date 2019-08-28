// banner
$(function () {
    var $picLi = $(".banner .pic li");
    var $tabLi = $(".banner .tab li");
    var $btnLi = $(".banner .btn li");
    var len = $picLi.length;
    var first = 0;
    var timer;


    // 初始化
    $tabLi.eq(0).addClass("on");
    $picLi.hide().eq(0).show();


    //tab
    $tabLi.click(function () {
        var x = $(this).index();
        // alert(x);
        if (x != first){
            change(x);
        }
    })

    //btn区域  两个箭头  0  1
    $btnLi.click(function (){
        var x = first;
        if($(this).index()){
            x++;
            if(x >= len) x = 0;
        }else{
            x--;
            if(x <= len) x = 3;
        }
        change(x);

    })

    $(".banner").hover(function () {
        clearInterval(timer);
    },auto)
    // 自动轮播
    auto()
    function auto() {
        timer = setInterval(function(){
            var x = first;
            x ++;
            if(x >= len) x =0;
            change(x)
        },3000)
    }



    // 变化函数
    function change(i){
        $tabLi.eq(first).removeClass("on");
        $picLi.eq(first).fadeOut(2000);

        first = i;

        $tabLi.eq(i).addClass("on");
        $picLi.eq(i).fadeIn(2000);
    }





});

// news-nav
$(function (){
    // 4个按钮
    var $navLi = $(".news-nav .nav li");
    // 4个显示
    var $containLi = $(".news-nav .contain li");
    var first = 0;

    $navLi.click(function () {
        var x = $(this).index();

        $navLi.eq(first).removeClass("active");
        $containLi.eq(first).removeClass("show");
        first = x;
        $navLi.eq(first).addClass("active");
        $containLi.eq(first).addClass("show")
    })
});