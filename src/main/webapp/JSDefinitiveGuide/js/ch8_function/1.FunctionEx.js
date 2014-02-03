define([
], function () {
    var FunctionEx = function () {

        document.writeln("<h2>Function</h2>"); //////////////////////////////

        // method invocation

        var o = {
            m: function () {
                var self = this; // 다른 곳에서 이 context를 사용하고 싶다면 먼저 save해야 함

                document.writeln(this === o); // this is the object o
                f();

                function f() {
                    document.writeln(this === o); // global or undefined
                    document.writeln(self === o); // self is the outer this value
                }
            }
        };
        o.m();

        //
// For the sake of the example, we implement the simple functions again,
// this time using function literals within an object literal;
        var operators = {
            add: function (x, y) {
                return x + y;
            },
            subtract: function (x, y) {
                return x - y;
            },
            multiply: function (x, y) {
                return x * y;
            },
            divide: function (x, y) {
                return x / y;
            },
            pow: Math.pow  // Works for predefined functions too
        };

// This function takes the name of an operator, looks up that operator
// in the object, and then invokes it on the supplied operands. Note
// the syntax used to invoke the operator function.
        function operate2(operation, operand1, operand2) {
            if (typeof operators[operation] === "function")
                return operators[operation](operand1, operand2);
            else throw "unknown operator";
        }

// Compute the value ("hello" + " " + "world") like this:
        var j = operate2("add", "hello", operate2("add", " ", "world"));
        document.writeln("j: " + j);
// Using the predefined Math.pow() function:
        var k = operate2("pow", 10, 2);
        document.writeln("k: " + k);

        //factoring 에제 (잘 이해 안됨)
        function factorial(n) {
            if (isFinite(n) && n > 0 && n == Math.round(n)) {
                if (!(n in factorial)) {
                    factorial[n] = n * factorial(n - 1);
                }
                return factorial[n];
            }
            else return NaN;
        }

        factorial[1] = 1;
        var result = factorial(5);
        document.writeln("result: " + result);

        //closure: 이해될뜻하지만, 설명하려면 어려움
        var scope = "global scope";

        function checkscope() {
            var scope = "local scope";

            function f() {
                return scope;
            };
            return f;
        };
        var result = checkscope()();
        document.writeln("result: " + result);

        //예제
        var uniqueInteger = (function () {
            var counter = 0;
            return function () {
                return counter++;
            };
        }());
        document.writeln("uniqueInteger: " + uniqueInteger);

    };

    return FunctionEx;
});