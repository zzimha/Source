function size(x) {
    return  x;}
    
const biggie = 4;
    
function biggie_size(x) {
    return  size(x) + biggie; }
    
function unbiggie_size(x) {
    return  biggie_size(x) - (2 * biggie); }
    
biggie_size(1);
unbiggie_size(5);

function is_biggie_size(x) {
    return x > 4 ? true : false;
}

is_biggie_size(5);

const patty = 1.17; 

function normal_price(x) {
    return size(x) * patty;
}

const combop = 0.5;

function combo_price(x) {
    return normal_price(x) + combop;
}

combo_price(4); 


    


