import {heart,square,beside,show,blank,stack} from "rune";

//Q1
function f1(rune_1, n, rune_2) {
return n === 0
? rune_2
: f1(rune_1, n - 1, beside(rune_1,stack(blank, rune_2)));
}
show(f1(square, 3, heart));

//Q2 
function f2(rune, n) {
return n === 0
? rune
: stack(beside(blank, f2(rune, n - 1)),
square);
}
show(f2(heart, 3));