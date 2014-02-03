define([
], function () {
    var FunctionScopeEx = function () {

        document.writeln("<h2>Prototype - JS의 객체지향</h2>"); //////////////////////////////

        //scope testing
        var scope = "global";

        function scopeTest() {
            document.writeln(scope);
            var scope = "local";
            document.writeln(scope);
        }

        document.writeln(scope);
        scopeTest();

        document.writeln(scope);

    };

    return FunctionScopeEx;
});