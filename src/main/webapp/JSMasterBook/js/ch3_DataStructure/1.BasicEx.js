define([
], function () {
    var BasicEx = function () {
        //String객체
        var str1 = '뜰에 뜰에 뜰에는 닭이 있다.';
        document.writeln(str1.indexOf('뜰'));
        document.writeln(str1.lastIndexOf('뜰'));
        document.writeln(str1.indexOf(' 뜰', 3));
        document.writeln(str1.lastIndexOf('에', 5));
        document.writeln(str1.indexOf('가든'));

        var str2 = 'Wings프로젝트';
        document.writeln(str2.charAt(4));
        document.writeln(str2.slice(5, 8));
        document.writeln(str2.substring(5, 8));
        document.writeln(str2.substr(5, 3));
        document.writeln(str2.split('s'));
        document.writeln(str1.split('뜰', 3));

        document.writeln('위로'.anchor('top'));
        document.writeln(str2.link('http://www.wings.msn.to/'));
        document.writeln('10'.sub());
        document.writeln('10'.sup());

        document.writeln(str2.concat('유한회사'));
        document.writeln(str2.length);

        //
        var str = 'WINGS프로젝트';
        document.writeln(str.substring(5, -2));
        document.writeln(str.slice(5, -2));
        document.writeln(str.substring(8, 5));
        document.writeln(str.slice(8, 5));

        //Number객체
        var num1 = 255;
        document.writeln(num1.toString(16));
        document.writeln(num1.toString(8));

        var num2 = 123.45678;
        document.writeln(num2.toExponential(2));
        document.writeln(num2.toFixed(3));
        document.writeln(num2.toFixed(7));
        document.writeln(num2.toPrecision(10));
        document.writeln(num2.toPrecision(6));

        //Math객체
        document.writeln(Math.abs(-15));
        document.writeln(Math.max(10, 15));
        document.writeln(Math.min(-10, 0));
        document.writeln(Math.pow(2, 3));
        document.writeln(Math.random());

        document.writeln(Math.ceil(1.58));
        document.writeln(Math.floor(1.58));
        document.writeln(Math.round(1.58));
        document.writeln(Math.ceil(-1.58));
        document.writeln(Math.floor(-1.58));
        document.writeln(Math.round(-1.58));

        document.writeln(Math.SQRT1_2);
        document.writeln(Math.SQRT2);
        document.writeln(Math.sqrt(3));

        document.writeln(Math.PI);
        document.writeln(Math.cos(1));
        document.writeln(Math.sin(1));
        document.writeln(Math.tan(1));
        document.writeln(Math.acos(1));
        document.writeln(Math.asin(1));
        document.writeln(Math.atan(1));
        document.writeln(Math.atan2(1, 1));

        document.writeln(Math.E);
        document.writeln(Math.LN2);
        document.writeln(Math.LN10);
        document.writeln(Math.LOG2E);
        document.writeln(Math.LOG10E);
        document.writeln(Math.log(Math.E));
        document.writeln(Math.exp(1));

        //Array객체
        var ary1 = ['Sato', 'Takae', 'Osada', 'Hio', 'Saitoh'];
        var ary2 = ['Yabuki', 'Aoki', 'Moriyama', 'Yamada'];

        document.writeln(ary1.concat(ary2));
        document.writeln(ary1.join('／'));
        document.writeln(ary1.slice(1));
        document.writeln(ary1.slice(1, 2));
        document.writeln(ary1.splice(1, 2, 'Kakeya', 'Yamaguchi'));
        document.writeln(ary1);

        document.writeln(ary1.pop());
        document.writeln(ary1);
        document.writeln(ary1.push('Kondo'));
        document.writeln(ary1);
        document.writeln(ary1.shift());
        document.writeln(ary1);
        document.writeln(ary1.unshift('Ozawa', 'Kuge'));
        document.writeln(ary1);

        document.writeln(ary1.reverse());
        document.writeln(ary1);
        document.writeln(ary1.sort());
        document.writeln(ary1);

        document.writeln(ary1.length);
        document.writeln(ary1.toString());

        var ary = [5, 25, 10];
        document.writeln(ary.sort());
        document.writeln(ary.sort(
            function (x, y) {
                return x - y;
            })
        );

        //Date객체
        var dat = new Date(2010, 5, 25, 11, 37, 15, 999);
        document.writeln(dat);
        document.writeln(dat.getFullYear());
        document.writeln(dat.getMonth());
        document.writeln(dat.getDate());
        document.writeln(dat.getDay());
        document.writeln(dat.getHours());
        document.writeln(dat.getMinutes());
        document.writeln(dat.getSeconds());
        document.writeln(dat.getMilliseconds());
        document.writeln(dat.getTime());
        document.writeln(dat.getTimezoneOffset());

        document.writeln(dat.getUTCFullYear());
        document.writeln(dat.getUTCMonth());
        document.writeln(dat.getUTCDate());
        document.writeln(dat.getUTCDay());
        document.writeln(dat.getUTCHours());
        document.writeln(dat.getUTCMinutes());
        document.writeln(dat.getUTCSeconds());
        document.writeln(dat.getUTCMilliseconds());

        var dat2 = new Date();
        dat2.setFullYear(2011);
        dat2.setMonth(7);
        dat2.setDate(5);
        dat2.setHours(11);
        dat2.setMinutes(37);
        dat2.setSeconds(15);
        dat2.setMilliseconds(513);

        document.writeln(dat2.toLocaleString());
        document.writeln(dat2.toGMTString());
        document.writeln(dat2.toUTCString());
        document.writeln(dat2.toDateString());
        document.writeln(dat2.toTimeString());
        document.writeln(dat2.toLocaleDateString());
        document.writeln(dat2.toLocaleTimeString());

        document.writeln(Date.parse('2008/08/05'));
        document.writeln(Date.UTC(2008, 8, 5));

        //add
        var dat = new Date(2010, 4, 15, 11, 40);
        document.writeln(dat.toLocaleString());
        dat.setMonth(dat.getMonth() + 3);
        document.writeln(dat.toLocaleString());
        dat.setDate(dat.getDate() - 20);
        document.writeln(dat.toLocaleString());

        var dat = new Date(2010, 4, 15, 11, 40);
        document.writeln(dat.toLocaleString());
        dat.setMonth(dat.getMonth() + 1);
        dat.setDate(0);
        document.writeln(dat.toLocaleString());

        //substract
        var dat1 = new Date(2010, 4, 15);
        var dat2 = new Date(2010, 5, 20);
        var diff = (dat2.getTime() - dat1.getTime()) / (1000 * 60 * 60 * 24);
        document.writeln(diff + '일의 차가 있다.');

    };

    return BasicEx;
});

