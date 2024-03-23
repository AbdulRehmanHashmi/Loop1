// Write a loop to print numbers from 1 to 10.

for (var n = 1; n <= 10; n++) {
    console.log(n)
    document.write(n, '<br>')
}
document.write('<b>Question#1 End!</b><br></br>')
console.log('Question#1 End!')

// Write a loop to print even numbers from 1 to 20.

for (var e = 2; e <= 20; e += 2) {
    console.log(e)
    document.write(e, '<br>')
}
document.write('<b>Question#2 End!</b><br></br>')
console.log('Question#2 End!')

// Write a loop to print odd numbers from 1 to 15.

for (var o = 1; o <= 15; o += 2) {
    console.log(o)
    document.write(o, '<br>')
}
document.write('<b>Question#3 End!</b><br></br>')
console.log('Question#3 End!')

// Write a loop to print the multiplication table of a number (let's say 7) up to 10.

for (var t = 1; t <= 10; t++){
    console.log('7 x ', t , ' = ', t*7);
    document.write('7 x ', t , ' = ', t*7 , '<br>')
}
document.write('<b>Question#5 End!</b><br></br>')
console.log('Question#5 End!')

// Write a loop to print the square of numbers from 1 to 10.

for (var s = 1; s <= 10; s++){
    console.log(s*s);
    document.write(s, '<sup>2</sup>' , ' = ' , s*s , '<br>')
}
document.write('<b>Question#9 End!</b><br></br>')
console.log('Question#9 End!')

// Write a loop to find and print the largest element in an array (let's say [3, 7, 2, 9, 5]).

var arr = [3, 7, 2, 9, 5]
var largestnumber = 3

for (var l = 0; l < arr.length; l++){
    console.log(arr[l] , largestnumber);
    document.write(arr[l] ,  largestnumber , '<br>')
    if (arr[l] > largestnumber){
        largestnumber = arr[l]
    }
}
document.write('<b>Question#10 End!</b><br></br>')
console.log('Question#10 End!')