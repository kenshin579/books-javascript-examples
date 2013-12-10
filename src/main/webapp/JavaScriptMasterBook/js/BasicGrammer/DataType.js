define([
], function () {
    var DataType = function () {

        // 배열
        var ary = ['JavaScript', 'Ajax', 'ASP.NET'];
        console.log(ary[0]);

        var ary = ['JavaScript', ['jQuery', 'prototype.js'], 'ASP.NET'];
        console.log(ary[1][0]);

        // 객체 리터럴
        var obj = {x: 1, y: 2, z: 3};
        console.log(obj.x);
        console.log(obj['x']);

        // 미정의값
        var x;
        var obj = { a: 12345 };
        console.log(x);
        console.log(obj.b);

        // 산술연산자
        console.log(10 + 1);
        console.log('10' + 1);
        var today = new Date();
        console.log(1234 + today);

        // 소수점을 포함한 계산
        console.log(0.2 * 3);
        console.log(0.2 * 3 === 0.6);
        console.log(((0.2 * 10) * 3) / 10);
        console.log((0.2 * 10) * 3 === 0.6 * 10);

        //대입연산자
        var x = 1;
        var y = x;
        x = 2;
        console.log(y);

        var ary1 = [0, 1, 2];
        var ary2 = ary1;
        ary1[0] = 5;
        console.log(ary2);

        //비교연산자
        var ary1 = ['JavaScript', 'Ajax', 'ASP.NET'];
        var ary2 = ['JavaScript', 'Ajax', 'ASP.NET'];
        console.log(ary1 == ary2);

        //등가 연산자
        console.log('3.14E2' == 314);
        console.log('0x10' == 16);
        console.log('1' == 1);

        //동치 연산자
        console.log('3.14E2' === 314);
        console.log('0x10' === 16);
        console.log('1' === 1);

        //delete연산자
        var ary = ['JavaScript', 'Ajax', 'ASP.NET'];
        console.log(delete ary[0]);
        console.log(ary);
        var obj = {x: 1, y: 2};
        console.log(delete obj.x);
        console.log(obj.x);
        var obj2 = {x: obj, y: 2};
        console.log(delete obj2.x);
        console.log(obj);
        var data1 = 1;
        console.log(delete data1);
        console.log(data1);
        var data2 = 10;
        console.log(delete data2);
        console.log(data2);

        //typeof연산자
        var num = 1;
        console.log(typeof num);
        var str = '안녕하세요';
        console.log(typeof str);
        var flag = true;
        console.log(typeof flag);
        var ary = ['JavaScript', 'Ajax', 'ASP.NET'];
        console.log(typeof ary);
        var obj = {x: 1, y: 2};
        console.log(typeof obj);
    };

    return DataType;
});

