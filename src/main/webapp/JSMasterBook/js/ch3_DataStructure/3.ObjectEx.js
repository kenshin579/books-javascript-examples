define([
], function () {
    var ObjectEx = function () {

        //Object객체
        var obj = new Object();
        document.writeln(obj.toString()); // 문자열을 반환
        document.writeln(obj.valueOf());  // 문자열 이외의 값이 반환되는 것을 '기대하며' 사용됨

        var dat = new Date();
        document.writeln(dat.toString()); // Tue Jun 21...
        document.writeln(dat.valueOf());  // 1308661650102

        var ary = ['prototype.js', 'jQuery', 'Yahoo! UI'];
        document.writeln(ary.toString());
        document.writeln(ary.valueOf());

        var num = 10;
        document.writeln(num.toString());
        document.writeln(num.valueOf());

        var reg = /[0-9]{3}-[0-9]{4}/g;
        document.writeln(reg.toString());
        document.writeln(reg.valueOf());

        //constructor
        // - constructor 프로퍼티는 반환값으로서 인스턴스의 생성에 사용된 생성자(Function 객체)를 돌려줌
        var data = [];
//        if (typeof data == 'object' && data.constructor == Array) {
        if (typeof data == 'object' && data instanceof Array) { // or use instance of
            document.writeln('변수 data는 Array객체의 인스턴스이다.');
        }

        //Global객체
        var n = '123xxx';
        document.writeln(Number(n));
        document.writeln(parseFloat(n));
        document.writeln(parseInt(n));

        var d = new Date();
        document.writeln(Number(d));
        document.writeln(parseFloat(d));
        document.writeln(parseInt(d));

        var h = '0777';
        document.writeln(Number(h));
        document.writeln(parseFloat(h));
        document.writeln(parseInt(h));

        var e = '1.01e+2';
        document.writeln(Number(e));
        document.writeln(parseFloat(e));
        document.writeln(parseInt(e));

        //encodingURI
        var str = '!"#$%&()+-*/@~_|;:,.';
        document.writeln(encodeURI(str));
        document.writeln(encodeURIComponent(str));

        //eval
        var str = 'window.alert("eval함수")';
        eval(str);


    };

    return ObjectEx;
});

