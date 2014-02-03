define([
], function () {
    var FunctionEx = function () {

        document.writeln("<h2>함수 정의하기</h2>"); //////////////////////////////
        // 1.function 명령으로 함수 정의하기
        function triangle(base, height) {
            return base * height / 2;
        }

        document.writeln('삼각형의 면적：' + triangle(5, 2));

        // 2. Function 생성자 경유로 함수 정의하기 (잘 사용하지 않음)
        var triangle = new Function('base', 'height', 'return base * height / 2;');

        document.writeln('삼각형의 면적：' + triangle(5, 2));

        var param = 'height, width';
        var formula = 'return height * width / 2;';
        var diamond = new Function(param, formula);

        document.writeln('마름모의 면적：' + diamond(5, 2));

        // 3. 함수 리터널 표현으로 정의하기 (익명 함수라고 함)
        var triangle = function (base, height) {
            return base * height / 2;
        };

        document.writeln('삼각형의 면적：' + triangle(5, 2));

        document.writeln("<h2>함수사용시 주의사항</h2>"); //////////////////////////////
        // 1.; 붙이기
        var triangle = function (base, height) {
            return // missing ;
            base * height / 2;
        };
        document.writeln('삼각형의 면적：' + triangle(5, 2));

        var triangle = function (base, height) {
            return base * height / 2;
        };

        // 2.함수는 데이터형의 일종
        document.writeln(triangle(5, 2));
        triangle = 0; // 이 코드는 문제가 되지 않음
        document.writeln(triangle);

        var triangle = function (base, height) {
            return base * height / 2;
        };

        document.writeln(triangle); // Function 객체의 toString 메서드가 호출됨

        // 3.function 명령은 코드를 해석/컴파일하는 타이밍에 함수를 등록되어 정상 동작함
        document.writeln('삼각형의 면적：' + statictriangle(5, 2)); // okay

        function statictriangle(base, height) {
            return base * height / 2;
        }

        //4.함수 리터럴/Function 생성자는 실행 시에 판단된다
//        document.writeln('삼각형의 면적：' + triangleliteral(5, 2)); // 문제가 됨

        var triangleliteral = function (base, height) {
            return base * height / 2;
        };

        document.writeln("<h2>Scope</h2>"); //////////////////////////////

        var scope = 'Global Variable';

        function getValue() {
            var scope = 'Local Variable';
            return scope;
        }

        document.writeln(getValue());
        document.writeln(scope);

        function triangle(base, height) {
            return base * height / 2;
        }

        document.writeln('삼각형의 면적: ' + triangle(5, 2)); // 5

        document.writeln("<h2>Scope</h2>"); //////////////////////
        scope = 'Global Variable'; //var 명령을 사용하지 않고 선언된 변수는 모두 글로벌 변수로 본다.

        function getValue() {
            scope = 'Local Variable'; //로컬 변수를 정의하려면 반드시 var 명령을 사용해야 한다.
            return scope;
        }

        document.writeln(getValue());
        document.writeln(scope);

        // 로컬 변수는 반드시 함수의 선두에 선언
        var scope = 'Global Variable';

        function getValue() {
            //로컬 변수는 함수 전체에서 유효하나 var 명령이 실행되지 않았으므로 undefined로 인식함
            // - 로컬 변수는 함수의 선두에 선언한다.
            document.writeln(scope);
            var scope = 'Local Variable';
            return scope;
        }

        document.writeln(getValue());
        document.writeln(scope);

        //1.기본: parameter의 스코프
        var value = 10;

        function decrementValue(value) {
            value--;
            return value;
        }

        document.writeln(decrementValue(100));  //99
        document.writeln(value);                //10

        //2.참조형 parameter: 주소값을 참조하기 때문에 서로 영향을 받는다.
        var value = [1, 2, 4, 8, 16];

        function deleteElement(value) {
            value.pop();
            return value;
        }

        document.writeln(deleteElement(value));
        document.writeln(value);

        //3.JavaScript에서는 블록 레벨의 스코프는 존재하지 않느다.
        if (true) {
            var i = 5;
        }
        document.writeln(i); // 5로 프린트된다. if 블록을 빠져나온 후에도 변수가 유효해 계속 사용할 수 있음

        //4.함수 리터렁/Function 생성자에 있어서의 스코프의 차이
        var scope = 'Global Variable';

        function checkScope() {
            var scope = 'Local Variable';

            var f_lit = function () {
                return scope; // Local Variable
            };
            document.writeln("f_lit: " + f_lit());

            //Function 생성자는 글로벌 변수를 참조하고 있다.
            var f_con = new Function('return scope;'); // Global Variable
//            document.writeln(f_con()); // undefine이라고 뜸...왜일까?
        }

        checkScope();

        document.writeln("<h2>Arugments 객체</h2>"); ////////////////////////////

        //1.JavaScript는 파라미터의 수를 체크하지 않는다.
        function showMessageNoParameterCheck(value) {
            document.writeln(value);
        }

        showMessageNoParameterCheck(); //undefined
        showMessageNoParameterCheck('야마다');          //야마다
        showMessageNoParameterCheck('야마다', '스즈키');  //야마다

        //1a.arguments의 개수 체크
        function showMessage(value) {
            if (arguments.length != 1) {
                throw new Error('인수의 수가 틀립니다.：' + arguments.length);
            }
            document.writeln(value);
        }

        try {
            showMessage('야마다', '스즈키');
        } catch (e) {
            window.alert(e.message);
        }

        //인수의 디폴트 값 설정 방법
        function defaulttriangle(base, height) {
            if (base == undefined) {
                base = 1;
            }
            if (height == undefined) {
                height = 1;
            }
            return base * height / 2;
        }

        document.writeln(defaulttriangle(5));

        //가변 인수 예제
        function sum() {
            var result = 0;
            for (var i = 0; i < arguments.length; i++) {
                var tmp = arguments[i];
                if (isNaN(tmp)) {
                    throw new Error('지정값이 숫자가 아닙니다.：' + tmp);
                }
                result += tmp;
            }
            return result;
        }

        try {
            document.writeln(sum(1, 3, 5, 7, 9));
        } catch (e) {
            window.alert(e.message);
        }


        //추가 예제
        function printf(format) {
            //인수의 2번째 이후를 순서대로 처리
            for (var i = 1; i < arguments.length; i++) {
                var pattern = new RegExp('\\{' + (i - 1) + '\\}', 'g');
                format = format.replace(pattern, arguments[i]);
            }
            document.writeln(format);
        }

        printf('안녕하세요、{0}씨. 나는 {1}입니다.', '가케야', '야마다');


        // 재귀 호출 정의하기 - callee 프로퍼티
        // - 실행 중인 함수 자신을 참조함
        function factorial(n) {
            if (n != 0) {
                return n * arguments.callee(n - 1);
            }
            return 1;
        }

        document.writeln(factorial(5));

        //아래와 같이 해도 괜찮지만, 함수 이름 변경시 inner 함수도 같이 변경해 줘야 함
        function factorial(n) {
            if (n != 0) {
                return n * factorial(n - 1);
            }
            return 1;
        }

        document.writeln(factorial(5));

        document.writeln("<h2>고차원 함수</h2>"); ////////////////////

        //인수에 이름 부여하기 (Named Function Parameter)
        function triangle(args) {
            if (args.base == undefined) {
                args.base = 1;
            }
            if (args.height == undefined) {
                args.height = 1;
            }
            return args.base * args.height / 2;
        }

        document.writeln(triangle({ base: 5, height: 4 }));

        //고계 함수 (Higher-order function)
        // - 함수를 인수, 반환값으로서 취급하는 함수
        // - 장점: 큰 범위의 기능만을 정의해 두고 상세한 기능은 함수의 이용자가 자유롭게 결정할 수 있다

        //
        function arrayWalk(data, f) {
            for (var key in data) {
                f(key, data[key]);
            }
        }

        function showElement(key, value) {
            document.writeln(key + '：' + value);
        }

        var ary = [1, 2, 4, 8, 16];
        arrayWalk(ary, showElement);

        //추가 예제
        var result = 0;

        function sumElement(key, value) {
            result += value;
        }

        var ary = [1, 2, 4, 8, 16];
        arrayWalk(ary, sumElement);
        document.writeln('합계치：' + result);

        //익명 함수
        function arrayWalk(data, f) {
            for (var key in data) {
                f(key, data[key]);
            }
        }

        var ary = [1, 2, 4, 8, 16];
        arrayWalk(
            ary,
            function (key, value) {
                document.writeln(key + '：' + value);
            }
        );

        document.writeln("<h2>스코프 체인</h2>"); ////////////////////////
        // 스코프 체인이란: 글로벌 객체, Call 객체를 생성 순서대로 연결한 리스트를 말함
        // - Call 객체 -> 함수 호출이 있을 때마다 내부적으로 자동 생성되는 객체이다
        var y = 'Global';

        function outerFunc() {
            var y = 'Local Outer';

            function innerFunc() {
                var z = 'Local Inner';
                document.writeln("z: " + z);
                document.writeln("y: " + y);
//                document.writeln(x);
            }

            document.writeln("y: " + y);
            innerFunc();
            document.writeln("y: " + y);
        }

        document.writeln("y: " + y);
        outerFunc();
        document.writeln("y: " + y);

    };

    return FunctionEx;
})
;

