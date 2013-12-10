define([
], function () {
    var Basic = function () {
        //String객체
        var str1 = '뜰에 뜰에 뜰에는 닭이 있다.';
        console.log(str1.indexOf('뜰'));
        console.log(str1.lastIndexOf('뜰'));
        console.log(str1.indexOf(' 뜰', 3));
        console.log(str1.lastIndexOf('에', 5));
        console.log(str1.indexOf('가든'));

        var str2 = 'Wings프로젝트';
        console.log(str2.charAt(4));
        console.log(str2.slice(5, 8));
        console.log(str2.substring(5, 8));
        console.log(str2.substr(5, 3));
        console.log(str2.split('s'));
        console.log(str1.split('뜰', 3));

        console.log('위로'.anchor('top'));
        console.log(str2.link('http://www.wings.msn.to/'));
        console.log('10'.sub());
        console.log('10'.sup());

        console.log(str2.concat('유한회사'));
        console.log(str2.length);

        //
        var str = 'WINGS프로젝트';
        console.log(str.substring(5, -2));
        console.log(str.slice(5, -2));
        console.log(str.substring(8, 5));
        console.log(str.slice(8, 5));

        //Number객체
        var num1 = 255;
        console.log(num1.toString(16));
        console.log(num1.toString(8));

        var num2 = 123.45678;
        console.log(num2.toExponential(2));
        console.log(num2.toFixed(3));
        console.log(num2.toFixed(7));
        console.log(num2.toPrecision(10));
        console.log(num2.toPrecision(6));

        //Math객체
        console.log(Math.abs(-15));
        console.log(Math.max(10, 15));
        console.log(Math.min(-10, 0));
        console.log(Math.pow(2, 3));
        console.log(Math.random());

        console.log(Math.ceil(1.58));
        console.log(Math.floor(1.58));
        console.log(Math.round(1.58));
        console.log(Math.ceil(-1.58));
        console.log(Math.floor(-1.58));
        console.log(Math.round(-1.58));

        console.log(Math.SQRT1_2);
        console.log(Math.SQRT2);
        console.log(Math.sqrt(3));

        console.log(Math.PI);
        console.log(Math.cos(1));
        console.log(Math.sin(1));
        console.log(Math.tan(1));
        console.log(Math.acos(1));
        console.log(Math.asin(1));
        console.log(Math.atan(1));
        console.log(Math.atan2(1, 1));

        console.log(Math.E);
        console.log(Math.LN2);
        console.log(Math.LN10);
        console.log(Math.LOG2E);
        console.log(Math.LOG10E);
        console.log(Math.log(Math.E));
        console.log(Math.exp(1));

        //Array객체
        var ary1 = ['Sato', 'Takae', 'Osada', 'Hio', 'Saitoh'];
        var ary2 = ['Yabuki', 'Aoki', 'Moriyama', 'Yamada'];

        console.log(ary1.concat(ary2));
        console.log(ary1.join('／'));
        console.log(ary1.slice(1));
        console.log(ary1.slice(1, 2));
        console.log(ary1.splice(1, 2, 'Kakeya', 'Yamaguchi'));
        console.log(ary1);

        console.log(ary1.pop());
        console.log(ary1);
        console.log(ary1.push('Kondo'));
        console.log(ary1);
        console.log(ary1.shift());
        console.log(ary1);
        console.log(ary1.unshift('Ozawa', 'Kuge'));
        console.log(ary1);

        console.log(ary1.reverse());
        console.log(ary1);
        console.log(ary1.sort());
        console.log(ary1);

        console.log(ary1.length);
        console.log(ary1.toString());

        var ary = [5, 25, 10];
        console.log(ary.sort());
        console.log(ary.sort(
            function (x, y) {
                return x - y;
            }));


        //Date객체
        var dat = new Date(2010, 5, 25, 11, 37, 15, 999);
        console.log(dat);
        console.log(dat.getFullYear());
        console.log(dat.getMonth());
        console.log(dat.getDate());
        console.log(dat.getDay());
        console.log(dat.getHours());
        console.log(dat.getMinutes());
        console.log(dat.getSeconds());
        console.log(dat.getMilliseconds());
        console.log(dat.getTime());
        console.log(dat.getTimezoneOffset());

        console.log(dat.getUTCFullYear());
        console.log(dat.getUTCMonth());
        console.log(dat.getUTCDate());
        console.log(dat.getUTCDay());
        console.log(dat.getUTCHours());
        console.log(dat.getUTCMinutes());
        console.log(dat.getUTCSeconds());
        console.log(dat.getUTCMilliseconds());

        var dat2 = new Date();
        dat2.setFullYear(2011);
        dat2.setMonth(7);
        dat2.setDate(5);
        dat2.setHours(11);
        dat2.setMinutes(37);
        dat2.setSeconds(15);
        dat2.setMilliseconds(513);

        console.log(dat2.toLocaleString());
        console.log(dat2.toGMTString());
        console.log(dat2.toUTCString());
        console.log(dat2.toDateString());
        console.log(dat2.toTimeString());
        console.log(dat2.toLocaleDateString());
        console.log(dat2.toLocaleTimeString());

        console.log(Date.parse('2008/08/05'));
        console.log(Date.UTC(2008, 8, 5));

        //add
        var dat = new Date(2010, 4, 15, 11, 40);
        console.log(dat.toLocaleString());
        dat.setMonth(dat.getMonth() + 3);
        console.log(dat.toLocaleString());
        dat.setDate(dat.getDate() - 20);
        console.log(dat.toLocaleString());

        var dat = new Date(2010, 4, 15, 11, 40);
        console.log(dat.toLocaleString());
        dat.setMonth(dat.getMonth() + 1);
        dat.setDate(0);
        console.log(dat.toLocaleString());

        //substract
        var dat1 = new Date(2010, 4, 15);
        var dat2 = new Date(2010, 5, 20);
        var diff = (dat2.getTime() - dat1.getTime()) / (1000 * 60 * 60 * 24);
        console.log(diff + '일의 차가 있다.');

    };

    return Basic;
});

