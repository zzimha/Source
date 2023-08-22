// Q1
/*
    The function 'biggie_size' takes a regular combo and returns a
    biggie-sized version.
*/

function biggie_size(regularCombo) {
    return regularCombo + 4;
}


// Q2
/*
    The function 'unbiggie_size' takes a biggie-sized combo and returns a
    non-biggie-sized version.
*/

function unbiggie_size(biggieSizedCombo) {
    return biggieSizedCombo - 4;
}


// Q3
/*
    The function 'is_biggie_size' takes a combo and returns:
        - true if the combo has been biggie-sized
        - false if the combo has not been biggie-sized
*/

function is_biggie_size(combo) {
    return combo > 4;
}


// Q4
/*
    The function 'combo_price' takes a combo and returns the price of the
    combo.
*/

function combo_price(combo) {
    const patty_cost = 1.17;
    const biggie_cost = 0.5;
    
    return is_biggie_size(combo)
        ? unbiggie_size(combo) * patty_cost + biggieCost
        : combo * pattyCost;
}

combo_price(7)

// Q5
/*
    The function 'empty_order' takes no arguments and returns an empty order.
*/

function empty_order() {
    return 0;
} //cassandra


// Q6
/*
    The function 'add_to_order' takes an order and a combo and returns a new
    order which contains the contents of the old order and the new combo.
*/

function add_to_order(x, y) {
    return 10 * x + y;
}

// Q7
/*
    The function 'last_combo' takes an order and returns the last combo.
*/

// Question 7 
//hamzi
function last_combo(x) {
  return x % 10;
}

//cassandra
function last_combo(x) {
    return x % 10;
}





//ziyan
function last_combo(){
    return x % 10;
}

// Q8
/*
    The function 'other_combos' takes an order and returns a new order
    without the last combo.
*/

//Ruijian
function other_combos(x)
{
    return (x - last_combo(x)) / 10;
}

//hamzi
function other_combos(x) {
  return math_trunc(x / 10);
}


