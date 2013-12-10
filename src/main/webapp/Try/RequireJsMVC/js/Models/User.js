//require([
//], function () {
//    var User = function() {
//        this.name = name || 'Default name';
//    };
//
//    return User;
//});
define(function(){

    function User(name){
        this.name = name || 'Default name';
    }

    return User;
});