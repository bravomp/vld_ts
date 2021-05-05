function const_expr_rslt_1(s : string) {
    // Fixed Code
    // Desc: Check for type string as valid
    // if (typeof s === 'string') {
    // Defect Code
    // Desc: typeof s === undefined" is always "false" because "typeof" operations always evaluate to a non-empty string, not "undefined".
    
    if (typeof s != undefined) { 
        console.log("is a string")
    }
    else { console.log("not a string")}
}
