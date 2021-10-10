$(function () { //入口函数
    //获取下拉菜单 并且绑定一个移入 移出事件
    //hover (参数1,参数2)    参数1 用来设置鼠标移入时发生的事件  参数2 用来设置鼠标移出时发生的事件
    //       接收的都是函数
    $('.menu_l>li').hover(function () {
        //获取当前的索引值        
        var index = $(this).index();

        //先将获取到的所有元素停止动画效果
        //然后在把 鼠标移入的元素显示     slideDown(参数1) 参数1 用来设置动画执行的时间(单位为毫秒); 作用：将获取到的元素往下滑动 
        $('.menu_w').eq(index).stop().slideDown(200);

        //将当前鼠标移入的元素 添加一个border-bottom
        $('.menu_l>li>a').eq(index).css(
            'border-bottom', '2px solid #000'
        )
    }, function () {
        //获取当前的索引值 
        var index = $(this).index();

        //先将获取到的所有元素停止动画效果
        //然后在把 鼠标移入的元素显示     slideUp(参数1) 参数1 用来设置动画执行的时间(单位为毫秒); 作用：将获取到的元素往上滑动
        $('.menu_w').eq(index).stop().slideUp(200);

        //将当前鼠标移入的元素 删除border-bottom
        $('.menu_l>li>a').eq(index).css(
            'border-bottom', 'none'
        )
    })


    //获取整个页面的滚动
    $(window).scroll(function () { //scroll 页面滚动时发生事件
        //将滚动的高度存进offset变量中  
        var offset = $(document).scrollTop();
        //判断如果变量大于等于90 
        if (offset >= 90) {
            //把获取到指定名称的属性修改
            $('#header').css(
                'position', 'fixed'
            )
        } else if (offset <= 90) {
            $('#header').css(
                'position', 'relative'
            )
        }
        //判断如果变量大于等于587
        if (offset >= 587) {
            //把获取到指定名称的属性修改
            $('#nav').css({
                position: 'fixed',
                top: '90px',
                right: '0px',
            })
        } else if (offset <= 587) {
            $('#nav').css({
                position: 'absolute',
                top: '87px',
                right: '0px',
            })
        }

    })


    //获取导航栏(nav)里面的所有span标签
    // each方法(参数1,参数2) 参数1 获取当前所有元素遍历的索引值; 参数2 遍历到的所有元素;  作用：用来遍历数组
    $('.nav_in span').each(function (index, ele) {
        //设置 动态精灵图 每次遍历 位置-50px; 
        var $url = "url(./img/icon.png) no-repeat 0 " + (index * -50) + "px"
        //把设置好精灵图路径 的变量 赋值给当前里面的a标签
        $(this).children('a').css('background', $url); //children 获取span标签里的所有a(获取他的子级)
    })

    //获取所有带class为nav_t的类名 并且绑定一个移入移出事件
    $('.nav_in .nav_t').hover(function () {
        //鼠标移入时元素显示 
        $(this).siblings('span').css( //siblings 获取跟他一样的所有span(获取他的兄弟级)
            'display', 'block' //设置获取的元素 display为block (显示)
        )
    }, function () { //鼠标移出时元素隐藏
        $(this).siblings('span').css( //siblings 获取跟他一样的所有span(获取他的兄弟级)
            'display', 'none' //设置获取的元素 display为none (隐藏)
        )
    })

    //获取所有带class为nav_l的类名 并且绑定一个移入移出事件
    $('.nav_in .nav_l').hover(function () {
        //让鼠标移入时元素显示
        $(this).css( //设置当前所有获取到的元素绑定上css样式
            'display', 'block' //设置获取的元素 display为block (显示)
        )
    }, function () { //鼠标移出时元素隐藏
        $(this).css( //设置当前所有获取到的元素绑定上css样式
            'display', 'none' //设置获取的元素 display为none (隐藏)
        )
    })
})