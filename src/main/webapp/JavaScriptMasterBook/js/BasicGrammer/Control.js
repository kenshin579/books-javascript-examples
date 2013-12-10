define([
], function () {
    var Control = function () {

        //switch명령
        var rank = 'B';
        switch (rank) {
            case 'A' :
                console.log('A랭크이다.');
                break;
            case 'B' :
                console.log('B랭크이다.');
                break;
            case 'C' :
                console.log('C랭크이다.');
                break;
            default :
                console.log('랭크 이외다.');
        }

        //for...in명령
        var member = ['야마다', '스즈키', '사토'];
        for (var i in member) {
            console.log('이름은 ' + member[i]);
        }

        var triangle = {width: 30, height: 50};
        for (var j in triangle) {
            console.log(j + '=' + triangle[j]);
        }

        var book = new Object();
        book.title = 'JavaScript레퍼런스';
        book.publish = '기술평론사';
        book.price = '3000';
        for (var k in book) {
            console.log(k + '는' + book[k]);
        }

        //break／continue명령
        var result = 0;
        for (var i = 0; i <= 100; i++) {
            result += i;
            if (result > 1000) {
                break;
            }
        }
        console.log('합계값이 1000을 넘는 것은' + i);

        // continue
        var result = 0;
        for (var i = 0; i < 100; i++) {
            if (i % 2 == 0) {
                continue;
            }
            result += i;
        }
        console.log('합계' + result);

        // label
        kuku :
            for (var i = 1; i < 10; i++) {
                for (var j = 1; j < 10; j++) {
                    var k = i * j
                    if (k > 30) {
                        break kuku;
                    }
                    document.write(k + '&nbsp;');
                }
                document.write('<br />');
            }

        //try...catch...finally명령
        var x = 1;
        var y = 0;
        try {
            if (y == 0) {
                throw new Error('0으로 나누려고 하였다.');
            }
            var z = x / y;
        } catch (e) {
            console.log(e.message);
        }//-->
    };

    return Control;
});

