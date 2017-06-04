$(function () {

    var h3 = $('h3');

    for (var i = 0; i < h3.length; i++) {
        $('h3').eq(i).on('click', function () {
            //找到当前div下的img标签
            var img = $(this).children('div').children();
            //设置所有图片路径
            $('img').attr('src', './grey.png');
            //设置当前图片路径
            img.attr('src', './blue.png');
            //div显示隐藏
            $(this).next().toggle('ease');
        });
    }
});
