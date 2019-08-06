var items = document.getElementsByClassName('item');
var index = 0;  // 表示现在第几张图片在轮播

var leftBtn = document.getElementsByClassName('left')[0];
var rightBtn = document.getElementsByClassName('right')[0];

// 第一步：修改 index
// 第二步：把index的效果设置到页面上

// 数据和界面联系起来
var setIndexToView = function() {
    // 暴力方法：全部的active一次去掉，再根据需要的设置index
    for(var i = 0; i < items.length; i++) {
        items[i].classList.remove('active');
    }
    items[index].classList.add('active');
}

var goNext = function() {
    if(index === items.length - 1) {
        index = 0
    } else {
        index ++
    }
    setIndexToView()
}

var goPrev = function() {
    if(index === 0) {
        index = items.length - 1
    } else {
        index --
    }
    setIndexToView()
}

leftBtn.addEventListener('click',function(){
    goPrev();
})

rightBtn.addEventListener('click',function(){
    goNext();
})

