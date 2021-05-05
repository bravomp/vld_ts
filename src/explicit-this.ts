function explicit_this1() {
    var obj = { value: 1 };

    function computeValue() { return compute(this.value); }

    obj.computeValue = computeValue;

    obj.showValue = function() {
        // Defect code 1
        // Desc: Must explicitly state this
        console.log( "Computed value: "
                     + computeValue() ); // Cond: No this specified
        // Fixed Code 1
        // Desc: Using explicit this 
        // console.log( "Computed value: "
        //              + this.computeValue() ); // Cond: No this specified
    };

    obj.showValue();
}
function explicit_this2() {
    var obj = {
        value: 2,
        method_with_a_really_long_name: function(x) { do_something(this.value, x) }
    };

    // Cond: f is intended as a macro to shorten the code following it
    var f = obj.method_with_a_really_long_name;
    
    // Defect Code 2
    // Desc: f(0) is not the same as obj.method_with_a_really_long_name(0)
    console.log( "The result is : " + f(0) ); // EXPLICIT_THIS_EXPECTED here
    // Fixed code 2
    // Desc: explicit binding with `call()` method
    // console.log( "The result is : " + f.call(obj, 0) ); // This works; explicit binding with `call()` method
}