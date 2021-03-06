/**
 * Return the taxed amount given a income amount.
 * 
 * @param {number} income - Taxable income
 */
const calculateTax = ( income ) => {
    if( income < 18200 ){
        return 0;
    }
    else if( income <= 37000 ){
        return ( income - 18200 ) * 0.19;
    }
    else if( income <= 90000 ){
        return parseFloat( ( ( ( income - 37000 ) * 0.325 ) + 3572 ).toFixed( 2 ) );
    }
    else if( income <= 180000 ){
        return parseFloat( ( ( ( income - 90000 ) * 0.37 ) + 20797 ).toFixed( 2 ) );
    }
    else if( income > 180001 ){
        return parseFloat( ( ( ( income - 180000 ) * 0.45 ) + 54097 ).toFixed( 2 ) );
    }
    else {
        return 0;
    }
}

/**
 * Return the taxed amount given a income amount.
 * 
 * @param {number} income - Taxable income
 */
const asyncCalculateTax = ( income ) => {
    return new Promise( ( resolve, reject ) => {
        if( income < 18200 ){
            resolve( 0 );
        }
        else if( income <= 37000 ){
            resolve( income - 18200 ) * 0.19;
        }
        else if( income <= 90000 ){
            resolve(parseFloat( ( ( ( income - 37000 ) * 0.325 ) + 3572 ).toFixed( 2 ) ) );
        }
        else if( income <= 180000 ){
            resolve(parseFloat( ( ( ( income - 90000 ) * 0.37 ) + 20797 ).toFixed( 2 ) ) );
        }
        else if( income > 180001 ){
            resolve(parseFloat( ( ( ( income - 180000 ) * 0.45 ) + 54097 ).toFixed( 2 ) ) );
        }
        else {
            reject( new Error( "Invalid input" ) );
        }
    });
}

module.exports.calculateTax = calculateTax;
module.exports.asyncCalculateTax = asyncCalculateTax;
