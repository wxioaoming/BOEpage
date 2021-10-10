window.onload = function() {
    //获取变量
    var oBanner = document.getElementById('banner');
    var oBanner_in = document.getElementsByClassName('banner_in')[0];

    var oPrev = document.getElementsByClassName('prev')[0];
    var oNext = document.getElementsByClassName('next')[0];

    var oUl = document.getElementsByClassName('banner_ul')[0];

    var aLi = oUl.getElementsByTagName('li');

    var oOl = document.getElementsByTagName('ol')[0];

    var now = 0;
    var cie = 0;
    var oDivWidth = oBanner_in.offsetWidth;
    var timer = setInterval(function () {
        oNext.click();
    }, 4000)

    oBanner_in.onmouseover = function () {
        oPrev.style.display = 'block';
        oNext.style.display = 'block';
        clearInterval(timer);
        timer = null;
    }
    oBanner_in.onmouseout = function () {
        oPrev.style.display = 'none';
        oNext.style.display = 'none';
        timer = setInterval(function () {
            oNext.click();
        }, 4000)
    }

    for (var i = 0; i < aLi.length; i++) {
        var oLi = document.createElement('li');
        oLi.setAttribute('index', i);
        oOl.appendChild(oLi);

        oLi.onclick = function () {
            for (var i = 0; i < oOl.children.length; i++) {
                oOl.children[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            now = index;
            cie = index;
            startMove(oUl, 'left', -index * oDivWidth);

        }
    }
    oOl.children[0].className = 'current';
    var first = oUl.children[0].cloneNode(true);
    oUl.appendChild(first);

    (function(){
    oNext.onclick = function () {

        if (now == aLi.length - 1) {
            oUl.style.left = 0;
            now = 0;
        }
        now++;
        startMove(oUl, 'left', -now * oDivWidth);
        cie++;
        if (cie == oOl.children.length) {
            cie = 0;
        }
        for (var i = 0; i < oOl.children.length; i++) {
            oOl.children[i].className = "";
        }
        oOl.children[cie].className = 'current';
    }

    oPrev.onclick = function () {

        if (now == 0) {
            now = oUl.children.length - 1;
            oUl.style.left = -now * oDivWidth + 'px';
        }
        now--;
        startMove(oUl, 'left', -now * oDivWidth);
        cie--;
        if (cie < 0) {
            cie = oOl.children.length - 1;
        }
        for (var i = 0; i < oOl.children.length; i++) {
            oOl.children[i].className = "";
        }
        oOl.children[cie].className = 'current';
    }


    
        var oFot_n = document.getElementsByClassName('fot_n')[0];
        var oImg = oFot_n.getElementsByTagName('img');
        var aSpan = oFot_n.getElementsByTagName('span');
        var oA = oFot_n.getElementsByTagName('a');

        for (var i = 0; i < oImg.length; i++) {
            oImg[i].index = i;
            oImg[i].onmouseover = function () {
                aSpan[this.index].style.display = 'block';
                this.src = "./img/tup" + this.index + ".png";
            }
            oImg[i].onmouseout = function () {
                aSpan[this.index].style.display = 'none';
                this.src = "./img/tt" + this.index + ".png";
            }
        }
        } 
    )()
}