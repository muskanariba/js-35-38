// function date_(){
//     document.write(new Date()) //q1
// }
// date_()

// var a = prompt("enter your first name") //q2
// var b = prompt("enter your last name")
// function name_ (a,b){
// alert("hello " + a +" "+ b)
// }
// name_(a,b)
// var a = +prompt("enter first num") //q3
// var b = +prompt("enter second number")
// function sum(a,b){
//     alert(a+b)
// }
// sum(a,b)




// function mathoperator_(){
//  var a = +prompt("enter first num") //q4
//  var b = +prompt("enter second num")
// var c = prompt("enter operator : +,-,/,*")
// if (c==="+"){
//    alert("the sum of " + a + " and " + b + " is " + (a+b))
// } else if (c ==="-"){
//     alert("the sub of " + a + " and " + b + " is " + (a-b))
// } else if ( c==="*"){
//     alert("the mul of " + a + " and " + b + " is " + (a*b))
// } else if (c==="/"){
//     if (b===0){
//     alert("Error : not divisible by 0 ")

//     } else {
//         alert("the div of " + a + " and " + b + " is " + (a/b))
//     }
// }
// }
// mathoperator_()


// function square_(x){
//  alert(x*x)
// }
// square_(10)

// function factorial (){
//     var a = parseInt(prompt("enter a number for factorial "))
//     if (a < 0){
//         alert("factorial is not defined for neg values")
//     } else{
//         var result=1
//     for(var i =1 ; i<=a; i++){
//         result*=i
//     }
//     alert( "the factorial of " + a+ " is " + result) 
//     }
// }
// factorial()

// function numbering(){
//     var x = parseInt(prompt("enter a number from which numbering starts"))
//     var y = parseInt(prompt("enter a number from which numbering ends"))
//     for (var i=x; i<=y; i++){
//         document.write(i +"<br>")
//     }
// }
// numbering()

// function sqr(){
//     var height = 10
//     var width = 5
//     alert("the area of rectangle by argument as variable is : " + (height*width))
// }
// sqr()

// function square (h,w){
// alert("the area of rectangle ny argument as value is : " + (h*w))
// }
// square(10,5)

// function hypotenuse (){
//     function square(x){
//       return x * x 
//     }
//     var b =+prompt("enter base value")
//     var p = +prompt("enter perpendicular value")
//     var s =Math.sqrt(square(b) + square(p))
//     alert("the hypotenuse is : " + s)
// }
//   hypotenuse()


// function palindrome (str){
//     var len = str.length;
//     for (var i=0; i<len /2; i++){
//         if (str[i] !== str[len-i-1]){
//             return str + " is not a palindrome"
//         }else{
//             return str + " is a palindrome"
//         }
//     }
// }
// alert(palindrome(prompt("enter a word : ")))



// function count (str,letter){
//     var count = 0;
//     for (var i =0; i< str.length; i++){
//         if(str[i].toLowerCase()===letter.toLowerCase()){
//             count++
            
//         }
//     }
//     return count;
//  }
// var string = prompt("Enter a string");
// var ltr= prompt("Enter a letter");
//   alert(count(string,ltr))

// function geometry(){
//     var a = +prompt("please enter radius value")
//     var b = 2*Math.PI*a
//     var c = Math.PI*Math.pow(a,2)
//     alert("the circumference is of given radius is : " + b.toFixed(2))
//     alert("the area is of given radius is  : " + c.toFixed(2))
// }
// geometry()


//  var sentence = "the quick brown fox."

// var words = sentence.split(" ")

// var titleCase = ""

// for(var i =0; i<words.length ; i++){
//     titleCase += words[i].charAt(0).toUpperCase()+ words[i].slice(1).toLowerCase()+ " "
// }
// console.log(titleCase)


// function long (){
// var a = prompt("enter a string")
// var b = a.split(" ")
// var c = ""
// var max = 0
// for (var i =0; i< b.length; i++){
//     if(b[i].length > max){
//     c = b [i]
//     max = b[i].length
// }
// }
// return c + " is a longest word"
// }
// console.log(long())