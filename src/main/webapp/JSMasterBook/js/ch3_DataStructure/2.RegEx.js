define([
], function () {
    var RegEx = function () {

        //정규표현 (match)
        //var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
        var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w\-.\/?%&=]*)?/i;
        //var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/g;
        var str = '서포트사이트는http://www.wings.msn.to/입니다.';
        str += '샘플소개사이트HTTP://www.web-deli.com/도 잘 부탁합니다!';
        var result = str.match(p);
        for (var i = 0; i < result.length; i++) {
            document.writeln(result[i]);
        }

        var p = /^[0-9]{1,}/g;
        //var p = /^[0-9]{1,}/gm;
        var str = '101마리의 강아지.\n7인의 아이들';
        var result = str.match(p);
        for (var i = 0; i < result.length; i++) {
            document.writeln(result[i]);
        }

        //replace
        var p = /(http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?)/gi;
        var str = '서포트사이트는http://www.wings.msn.to/이다.';
        document.writeln(str.replace(p, '<a href="$1">$1</a>'));

        //test
        var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
        var str1 = '서포트사이트는http://www.wings.msn.to/이다.';
        var str2 = '서포트사이트「서버사이드기술의 학습장」을 잘 부탁해요！';
        document.writeln(p.test(str1));
        document.writeln(p.test(str2));

        //exec
        var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w\- .\/?%&=]*)?/gi;
        var str = '서포트사이트는 http://www.wings.msn.to/이다.';
        str += '샘플소개사이트HTTP://www.web-deli.com/도 잘 부탁합니다!'
        var result = p.exec(str);
        for (var i = 0; i < result.length; i++) {
            document.writeln(result[i]);
        }

        var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w\- .\/?%&=]*)?/gi;
        var str = '서포트사이트는 http://www.wings.msn.to/이다.';
        str += '샘플 소개 사이트HTTP://www.web-deli.com/도 잘 부탁해요！'
        while ((result = p.exec(str)) != null) {
            document.writeln(result[0]);
        }

        //
        var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w\- .\/?%&=]*)?/gi;
        var str = '서포트사이트는http://www.wings.msn.to/이다.';
        str += '샘플소개사이트HTTP://www.web-deli.com/도 잘 부탁해요！';
        while ((result = p.exec(str)) != null) {
            document.writeln(p.lastIndex + '：' + result[0]);
            document.writeln('leftContext：' + RegExp.leftContext);
            document.writeln('rightContext：' + RegExp.rightContext);
            document.writeln('lastMatch：' + RegExp.lastMatch);
            document.writeln('lastParen：' + RegExp.lastParen);
            document.writeln('$1：' + RegExp.$1);
            document.writeln('$2：' + RegExp.$2);
            document.writeln('$3：' + RegExp.$3);
            document.writeln('<hr />');
        }

        //search
        var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w\- .\/?%&=]*)?/gi;
        var str1 = '서포트사이트는http://www.wings.msn.to/이다.';
        var str2 = '서포트사이트「서버사이드기술의 학습장」을 잘 부탁해요！';
        document.writeln(str1.search(p));
        document.writeln(str2.search(p));

        //split
        var p = /[\/\.\-]/gi;
        document.writeln('2010/12/04'.split(p));
        document.writeln('2010-12-04'.split(p));
        document.writeln('2010.12.04'.split(p));

    };

    return RegEx;
});

