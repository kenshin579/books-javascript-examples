define([
], function () {
    var DataTypeEx = function () {

        // 배열
        var ary = ['JavaScript', 'Ajax', 'ASP.NET'];
        document.writeln(ary[0]);

        var ary = ['JavaScript', ['jQuery', 'prototype.js'], 'ASP.NET'];
        document.writeln(ary[1][0]);

        // 객체 리터럴
        var obj = {x: 1, y: 2, z: 3};
        document.writeln(obj.x);
        document.writeln(obj['x']);

        // 미정의값
        var x;
        var obj = { a: 12345 };
        document.writeln(x);
        document.writeln(obj.b);

        // 산술연산자
        document.writeln(10 + 1);
        document.writeln('10' + 1);
        var today = new Date();
        document.writeln(1234 + today);

        // 소수점을 포함한 계산
        document.writeln(0.2 * 3);
        document.writeln(0.2 * 3 === 0.6);
        document.writeln(((0.2 * 10) * 3) / 10);
        document.writeln((0.2 * 10) * 3 === 0.6 * 10);

        //대입연산자
        var x = 1;
        var y = x;
        x = 2;
        document.writeln(y);

        var ary1 = [0, 1, 2];
        var ary2 = ary1;
        ary1[0] = 5;
        document.writeln(ary2);

        document.writeln("비교연산자");
        var ary1 = ['JavaScript', 'Ajax', 'ASP.NET'];
        var ary2 = ['JavaScript', 'Ajax', 'ASP.NET'];
        document.writeln(ary1 == ary2);

        document.writeln("등가 연산자");
        document.writeln('3.14E2' == 314);
        document.writeln('0x10' == 16);
        document.writeln('1' == 1);

        //동치 연산자
        document.writeln('3.14E2' === 314);
        document.writeln('0x10' === 16);
        document.writeln('1' === 1);

        //delete 연산자
        var ary = ['JavaScript', 'Ajax', 'ASP.NET'];
        document.writeln(delete ary[0]);
        document.writeln(ary);
        var obj = {x: 1, y: 2};
        document.writeln(delete obj.x);
        document.writeln(obj.x);
        var obj2 = {x: obj, y: 2};
        document.writeln(delete obj2.x);
        document.writeln(obj);
        var data1 = 1;
        document.writeln(delete data1);
        document.writeln(data1);
        var data2 = 10;
        document.writeln(delete data2);
        document.writeln(data2);

        //typeof 연산자
        var num = 1;
        document.writeln(typeof num);
        var str = '안녕하세요';
        document.writeln(typeof str);
        var flag = true;
        document.writeln(typeof flag);
        var ary = ['JavaScript', 'Ajax', 'ASP.NET'];
        document.writeln(typeof ary);
        var obj = {x: 1, y: 2};
        document.writeln(typeof obj);
    };

    return DataTypeEx;
});

