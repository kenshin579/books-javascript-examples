define([
], function () {
    var Object = function () {
        //Object객체

        var obj = new Object();
        console.log(obj.toString());
        console.log(obj.valueOf());

        var dat = new Date();
        console.log(dat.toString());
        console.log(dat.valueOf());

//        var ary = ['prototype.js', 'jQuery', 'Yahoo! UI'];
//        console.log(ary.toString());
//        console.log(ary.valueOf());
//
//        var num = 10;
//        console.log(num.toString());
//        console.log(num.valueOf());
//
//        var reg = /[0-9]{3}-[0-9]{4}/g;
//        console.log(reg.toString());
//        console.log(reg.valueOf());
//
//        //constructor
//        var data = [];
//        if (typeof data == 'object' && data.constructor == Array) {
//            console.log('변수data는 Array객체의 인스턴스이다.');
//        }
//
//        //Global객체
//        var n = '123xxx';
//        console.log(Number(n));
//        console.log(parseFloat(n));
//        console.log(parseInt(n));
//
//        var d = new Date();
//        console.log(Number(d));
//        console.log(parseFloat(d));
//        console.log(parseInt(d));
//
//        var h = '0777';
//        console.log(Number(h));
//        console.log(parseFloat(h));
//        console.log(parseInt(h));
//
//        var e = '1.01e+2';
//        console.log(Number(e));
//        console.log(parseFloat(e));
//        console.log(parseInt(e));
//
//        //encodingURI
//        var str = '!"#$%&()+-*/@~_|;:,.';
//        console.log(encodeURI(str));
//        console.log(encodeURIComponent(str));
//
//        //eval
//        var str = 'window.alert("eval함수")';
//        eval(str);


    };

    return Object;
});

