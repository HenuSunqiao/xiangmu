// 显示与隐藏;
$('.header-bot').children("ul").children(".sli").hover(function () {
    $(".show").hide().eq($(this).index() - 1).show();
}, function () {
    $(".show").hide();
})

// 轮播图

$(".nav-r").banner({
    imgs: $('.nav-r img'),
});

//加载

$.ajax({
    url: "http://localhost/xiangmu/sp.json",
    type: "get",
    success: function (a) {
        let str = "";
        for (let i = 0; i < a.length; i++) {
            str += `
            <div class="see-r-li">
                <img src="${a[i].img}" alt="">
                <p>
                    <span>${a[i].name}</span>
                    <span>￥${a[i].price}</span>
                </p>
                <span><img src="img/car.png" alt=""></span>
            </div>
            `
        }
        $(".see-r").html(str);
    }
})


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 2, 2];
var arr2 = [2, 3, 4];
// var arr1 = arr.concat([2,3,4],[3,4,5]);
// var arr1 = arr.copyWithin(0,1,3);
// var arr1 = arr.entries();
// var arr1 = arr.every(function(a, b, c){
//     console.log(a);
//     // console.log(b);
//     // console.log(c);
//     // return a < 10;
//     return a < 5;
// });
// var arr1 = arr.flat();
var arr1 = arr.forEach((a, b, c) => {
    console.log(a);
    return a;
})
console.log(arr);
console.log(arr1);