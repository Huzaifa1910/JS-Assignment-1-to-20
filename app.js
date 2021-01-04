//|.....................CHAPTER 1........................|
// (ALERTS) #1
/*let guest=("Sir Wellcome to JAVASCRIPT !!");
alert(guest);*/

// (ALERTS) #2
/*let error=("Error !! Please Enter A valid Password");
alert(error);*/

// (ALERTS) #3
/*let jsLand=("Wellcome To JS Land... \nHappy Coding.!");
alert(jsLand);*/

// (ALERTS) #4
/*let jsLand=("Wellcome To JS Land..");
alert(jsLand);
let hapyCoding=("Happy Coding! \nPrevent this page from creating additional dialogues");
alert(hapyCoding);*/

// (ALERTS) #5
/*let hello=("Hello I CAn Run JS Through My Web Browser's Console");
console.log(hello);*/

// (ALERTS) #6
// let myName=("Fahad Khan");
// alert(myName);

// (ALERTS) #7
// Body (inside your page’s HTML)


/*..................CHAPTER 2................*/
/*(VARIABLE FOR STRINGS)  #01 */
// var username;

/*(VARIABLE FOR STRINGS)  #02 */
// var myName=("Fahad khan");
// alert(myName);

/*(VARIABLE FOR STRINGS)  #03 */
// var message = ("Hello World");
// alert(message);

/*(VARIABLE FOR STRINGS)  #04 */
// var myName=("Fahad Khan");
// var age=parseInt(21);
// var data=("CERTIFIED WEBSITE DEVELOPER");
// alert(myName);
// alert(age);
// alert(data);

/*(VARIABLE FOR STRINGS)  #05 */
// var pizza=("PIZZA \nPIZZ\nPIZ\nPI\nP");
// alert(pizza);

/*(VARIABLE FOR STRINGS)  #06 */
// var myEmail=("My Email Address is ");
// var email=("fahad234@gmail.com");
// var cont=myEmail.concat(email);
// alert(cont);

/*(VARIABLE FOR STRINGS)  #07 */
// var firstPara=("I am trying to learn from the book ") ;
// var book=("A smarter way to learn javascript");
// var cont=firstPara.concat(book);
// alert(cont);

/*(VARIABLE FOR STRINGS)  #08 */
// var text=("YEah! I can Write HTML content through javascript");
// document.write(text);

/*(VARIABLE FOR STRINGS)  #09 */
// var design=("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");
// alert(design);


/*..................CHAPTER 3................*/
/* (VARIABLES FOR NUMBERS) #01*/
// var age=("i am " + 21 + " years old");
// alert(age);

/* (VARIABLES FOR NUMBERS) #02*/
// var visit=("you have visited this site ");
// var times=("15 Times");
// var cont=visit.concat(times);
// alert(cont);

/* (VARIABLES FOR NUMBERS) #03*/
// var text=("My birth year is ")
// var birthYear=(1990 + "<br>")
// var cont=text.concat(birthYear);
// document.write(cont);
// var dataType=("Data type of my declared variable is number");
// document.write(dataType);

/* (VARIABLES FOR NUMBERS) #04*/
// var  VisitorName=("Fahad khan "+"Ordered ");
// var quantity=(5);
// var  ProducTitle=(5 + " T'shirt(s) ");
// var text=("on XYZ Clothing Store.");
// document.write(VisitorName,ProducTitle,text);


/*..................CHAPTER 4................*/
/*(VARIABLE NAMES: LEGAL & ILLEGAL ) #01 */
// var variable_1=10;
// var variable_2=27;
// var variable_3=11;
// var cont=("my lucky number is " +variable_1+" and my birth date was "+variable_2+" and month was "+variable_3);
// alert(cont);

/*(VARIABLE NAMES: LEGAL & ILLEGAL ) #02 */
//    LEGAL VARIABLES
//1.Fahadkhan
//2.FahadKhan
//3.fahadKhan
//4.$fahadkhan
//5._fahadkhan

//    ILL-LEGAL VARIABLES
//1. 1Fahad
//2. -FahadKhan
//3. .fahadKhan
//4. $fahadkhan
//5. fahad khan

/*(VARIABLE NAMES: LEGAL & ILLEGAL ) #03 */
// var heading=("Rules for naming JS variables" + "<br />"+ "<br />"+ "<br />"+ "<br />");
// document.write(heading);
// var textPara1=("Variable names can only contain,"+ "$myname," + "_myVariable," + "For example $my_1stVariable" + "<br />");
// document.write(textPara1);
// var textPara2=("Variables must begin with a" + "Letter" + "$" +"or" + "$name, " + "_name or name " + "For example $name, _name or name"+ "<br />");
// document.write(textPara2);
// var textPara3=("Variable names are case " + "Sensitive" + "<br />");
// document.write(textPara3);
// var textPara4=("Variable names should not be JS " +" Keywords");
// document.write(textPara4);


/*..................CHAPTER 5................*/
/*(MATH EXPRESSION) #01*/
// let x=10;
// let y=20;
// let z=("Sum of "+x+ " and " +y+ " is "+ (x+y));
// document.write(z);

/*(MATH EXPRESSION) #02*/
// let x=100;
// let y=10;
// let z=("subtraction of "+x+ " and " +y+ " is "+ (x-y));
// document.write(z);
// let z=("Multiplication of "+x+ " and " +y+ " is "+ (x*y));
// document.write(z);
// let z=("division of "+x+ " and " +y+ " is "+ (x/y));
// document.write(z);
// let z=("modulus of "+x+ " and " +y+ " is "+ (x%y));
// document.write(z);

/*(MATH EXPRESSION) #03*/
// var variable;
// document.write("Value after variable declaration is: " +variable +"<br />");
// variable=5;
// document.write("Initial value: " +variable  +"<br />");
// variable=(5+1);
// document.write("Value after increment is: " + variable +"<br />");
// variable+=7;
// document.write("Value After Addition is: " +variable +"<br />");
// variable-=(1);
// document.write("Value after decrement is: " + variable +"<br />");
// variable%=(3);
// document.write("the reminder is:" + variable +"<br />");

/*(MATH EXPRESSION) #04*/
// let ticketPrice=(600);
// let movies=5;
// let calculate=(movies*ticketPrice);
// let myPara=("Total cost to buy "+ movies +" tickets to a movie is " + calculate +"PKR");
// document.write(myPara);

/*(MATH EXPRESSION) #05*/
// document.write("TABLE OF 4" +"<br />" +"<br />");
// var num=4

// for(var i=1;i<=10;i++){
//   document.write(num +" X "+i+" = "+num*i +"<br />");
// }

/*(MATH EXPRESSION) #06*/
// let C=25;
// F= C * 9/5 + 32;
// let conversion2= C + ' \xB0C is ' + F  +   '\xB0F ' +"<br />" +"<br />";
// document.write(conversion2);
// F=70;
// C= F -32 * 5/9;
// let conversion= F +  '\xB0F is ' + C +  ' \xB0C.' +"<br />";
// document.write(conversion);

/*(MATH EXPRESSION) #07*/
// let Price_1=650;
// document.write("PRICE OF ITEM 1: " +Price_1 +"<br />");
// let quantity_1=3;
// document.write("QUANTITY OF ITEM 1: " +quantity_1 +"<br />");
// let Price_2=100;
// document.write("PRICE OF ITEM 2: " +Price_2 +"<br />");
// let quantity_2=7;
// document.write("QUANTITY OF ITEM 2: " +quantity_2 +"<br />"+"<br />");
// shipCharges=100;
// let calculate=(Price_1*quantity_1) + (Price_2*quantity_2) +shipCharges;
// document.write("Total cost Of Your Order: " + calculate);

/*(MATH EXPRESSION) #08*/
// let totalMarks=1100;
// document.write("Total Marks: " + totalMarks + "<br />");
// let obtainedMarks=850;
// document.write("Obtained marks: " +obtainedMarks + "<br />")
// let average=obtainedMarks/totalMarks *100;
// document.write("Percentage : " + average +"%")

/*(MATH EXPRESSION) #09*/
// let usDollars=10;
// document.write("we have $"+usDollars+" US Dollars" + "<br />");
// let riyals=25;
// document.write("And we have "+riyals+" Saudi riyals" + "<br />");
// calculate=(usDollars*104.80)+(riyals*28);
// document.write("Total Currency In pakistani Rupees :"+calculate)

/*(MATH EXPRESSION) #10*/
// let num=10;
// document.write("My number: "+num + "<br />");
// num+=5;
// document.write("After add 5: "+num + "<br />");
// num/=2;
// document.write("After divide by '2': "+num + "<br />");

/*(MATH EXPRESSION) #11*/
// let currentYear=2021;
// document.write("Current Year : " +currentYear + "<br />");
// let birthYear=1999;
// document.write("Birth Year : " +birthYear + "<br />");
// let calculate=currentYear-birthYear;
// document.write("Your Age is : " + calculate);

/*(MATH EXPRESSION) #12*/
// let radius=20;
// document.write("Radius Of A circle: "+radius + "<br />");
// let circumference=2*(3.142)*radius;
// document.write("The Circumference is :" + circumference + "<br />");
// let area=(3.142)*(20*20);
// document.write(area);

/*(MATH EXPRESSION) #13*/
// let snack=('lays');
// document.write("Favourite Snack :"+snack + "<br />");
// let age=22;
// document.write("Current Age :"+age + "<br />");
// let maxAge=60;
// document.write("Estimated Maximum age :"+maxAge + "<br />");
// let amount=3;
// document.write("Amount Of Snack Per Day :"+amount + "<br />");
// let calculate=(maxAge-age)*amount;
// document.write("You will need  "+calculate+  " lays to last you until the ripe old age of "+maxAge);


/*..................CHAPTER 6 to 9................*/
/*(MATH EXPRESSION) #01*/
//  let a=10;
//  document.write("RESULT:" + "<br />")
//  document.write("The value of a is : " +a + "<br />"+ "<br />");
//  document.write("........................................."+ "<br />"+ "<br />");

//  document.write("The value of ++a is : " + ++a + "<br />");
//  document.write("Now the value of a is: " + a + "<br />"+ "<br />");

//  document.write("The value of a++ is : " + a++ + "<br />");
//  document.write("Now the value of a is: " + a + "<br />"+ "<br />");

//  document.write("The value of --a is : " + --a + "<br />");
//  document.write("Now the value of a is: " + a + "<br />"+ "<br />");

//  document.write("The value of a-- is : " + a-- + "<br />");
//  document.write("Now the value of a is: " + a + "<br />"+ "<br />");

/*(MATH EXPRESSION) #02*/
// let a = 2;
// let b = 1;
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
// document.write("a is : "+a + "<br />");
// document.write("b is : "+b + "<br />");
// var result = --a - --b + ++b + b--;
// document.write("Result is : "+result + "<br />");

/*(MATH EXPRESSION) #03*/
// let fullName=prompt('Enter your Full Name');
// alert("Wellcome "+fullName+" You Are Ready To Start Your Work")

/*(MATH EXPRESSION) #04*/
// let num = prompt('Please enter your number');
// if (num == '0') {
//       num = 5;
//       for (var i = 1; i <= 10; i++) {
//             document.write(num + " X " + i + " = " + num * i + "<br />");
//       }
// }
// else {
//       for (var i = 1; i <= 10; i++) {
//             document.write(num + " X " + i + " = " + num * i + "<br />");
//       }
// }

/*(MATH EXPRESSION) #05*/
// let subject_1=('English');
// let subject_2=('Maths')
// let subject_3=('Urdu');
// totalMarks=100;
// obtMarksSub1=+prompt('Enter you marks of Subject 1 : ');
// sub1marks=obtMarksSub1;
// obtMarksSub2=+prompt('Enter you marks of Subject 2 : ');
// sub2marks=obtMarksSub2;
// obtMarksSub3=+prompt('Enter you marks of Subject 3 : ');
// sub3marks=obtMarksSub3;
// let total_marks=(totalMarks*3);
// let totalObtainMarks=sub1marks+sub2marks+sub3marks;
// let total_percentage=totalObtainMarks/(sub1marks+sub2marks+sub3marks)*100;
// let obj={
//       Subject :["Subject ","TM ","OM " ,"Perce "+"<br />"],
//       English :[subject_1 ,100,sub1marks,sub1marks+"%"+"<br />"],
//       Urdu :[subject_2 ,100,sub2marks,sub2marks+"%"+"<br />"],
//       Maths :[subject_3 ,100,sub3marks,sub3marks+"%"]
// }
// document.write(obj.Subject);
// document.write(obj.English);
// document.write(obj.Urdu);
// document.write(obj.Maths +"<br />");
// document.write(total_marks+"  ");
// document.write(totalObtainMarks +"  ");
// document.write(total_percentage +"  ");
// document.write();

/*..................CHAPTER 9 to 11................*/
/*(USER INPUT & CONDITIONAL STATEMENT ) #01*/
// let city=prompt('Please enter Your city');
// if(city==='karachi'){
//       alert("Wellcome To City Of Lights");
// }

/*(USER INPUT & CONDITIONAL STATEMENT ) #02*/
// let gender=prompt('Please Enter Your Gender');
// if(gender==='male'){
//       alert("Good Morning Sir.");
// }
// else if(gender==='female'){
//       alert("Good Morning Ma’am.");
// }

/*(USER INPUT & CONDITIONAL STATEMENT ) #03*/
// let color=prompt('Please Enter traffic light color');
// if(color==='red'){
//       alert("Must Stop");
// }
// else if(color==='yellow'){
//       alert("Ready To Move");
// }
// else if(color==='green'){
//       alert("Move Now");
// }

/*(USER INPUT & CONDITIONAL STATEMENT ) #04*/
// let Fuel =+prompt('please check your fuel');
// if(Fuel<='0.25'){
//       alert("Please refill the fuel in your car");
// }
// else{
//       alert("Dont Worry Drive Save.!");
// }

/*(USER INPUT & CONDITIONAL STATEMENT ) #05*/
//a (works)
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//b (not-worked)
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//c (worked)
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//d (Worked)
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//e (Worked)
// if (true){
//       alert("True");
//       }
//       if (false){
//       alert("False");
//       }
//f(Worked)
// if("car" < "cat"){
//       alert("car is smaller than cat");
//       }

/*(USER INPUT & CONDITIONAL STATEMENT ) #06*/
// let marksObtained=prompt('Enter Your Obtained Marks');
// let totalMarks=300;
// let percentage=(marksObtained/totalMarks*100);
// if(percentage>=80 && percentage <=100){
//       document.write('Total MArks : '+totalMarks+"<br />");
//       document.write('Marks Obtained :'+marksObtained+"<br />");
//       document.write('Percentage : '+percentage+"<br />");
//       document.write('Grade : A-one'+"<br />")
//       document.write('Remarks : Excellent')
// }
// else if(percentage>=70 && percentage < 80){
//       document.write('Total MArks : '+totalMarks+"<br />");
//       document.write('Marks Obtained :'+marksObtained+"<br />");
//       document.write('Percentage : '+percentage+"<br />");
//       document.write('Grade : A'+"<br />")
//       document.write('Remarks : Good')
// }
// else if(percentage>=60 && percentage < 70){
//       document.write('Total MArks : '+totalMarks+"<br />");
//       document.write('Marks Obtained :'+marksObtained+"<br />");
//       document.write('Percentage : '+percentage+"<br />");
//       document.write('Grade : B'+"<br />")
//       document.write('Remarks : You Need To improve')
// }
// else if(percentage>=50 && percentage < 60){
//       document.write('Total MArks : '+totalMarks+"<br />");
//       document.write('Marks Obtained :'+marksObtained+"<br />");
//       document.write('Percentage : '+percentage+"<br />");
//       document.write('Grade : Fail'+"<br />")
//       document.write('Remarks : Sorry!!')
// }
// else{
//       alert("Invalid Numbers");
// }

/*(USER INPUT & CONDITIONAL STATEMENT ) #07*/
// let num=8;
// num=+prompt("Guess The Secret number");
// if(num==8){
//       alert('Congratulations!! You Guess the Correct Number');
// }
// else if(num == +1 || num ==-1){
//       alert('Close Enough to the Correct Answer.!');
// }
// else{
//       alert("Wrong Guess! Try Again.");
// }


/*(USER INPUT & CONDITIONAL STATEMENT ) #08*/
// let num=prompt('please input your number');
// if(num % 3 === 0){
//       alert(num+" is divisible by 3");
// }
// else{
//       alert(num+" is not divisible by 3")
// }

/*(USER INPUT & CONDITIONAL STATEMENT ) #09*/
// let number = prompt("Enter a number: ");

// if(number % 2 == 0) {
//     alert(number+" number is even.");
// }
// else {
//     alert(number+" number is odd.");
// }

/*(USER INPUT & CONDITIONAL STATEMENT ) #10*/
// let temp=prompt("Enter Temperature");
// if(temp>40 && temp <=50){
//       alert('It is too hot outside');
// }
// else if(temp>30 && temp <=40){
//       alert('Th eweather today is normal');
// }
// else if(temp>20 && temp <=30){
//       alert('todays weather is cool');
// }  
// else if(temp>10 && temp <=20){
//       alert('OMG! todays weather is so cool');
// }         
// else{
//       alert("Please enter temperature between the range of 10 to 50");
// }

/*(USER INPUT & CONDITIONAL STATEMENT ) #11*/
// let num_1=parseInt(prompt('Enter number 1 :'));
// let num_2=parseInt(prompt('Enter number 2 :'));
// let operation=prompt('Please Choose your operation');
// let result;
// if(operation=='+'){
//       result=(num_1+num_2);
//       alert(result);
// }
// else if(operation== '-'){
//       result=(num_1-num_2);
//       alert(result);
// }
// else if(operation== '*'){
//       result=(num_1*num_2);
//       alert(result);
// }
// else if(operation== '/'){
//       result=(num_1/num_2);
//       alert(result);
// }
// else if(operation== '%'){
//       result=(num_1%num_2);
//       alert(result);
// }
// else{
//       alert("Please choose coorect operator!!");
// }


/*..................CHAPTER 12 to 13................*/
/*(IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS ) #01*/
// let char=prompt('Enter your character :');
// let result;
// if(char >='a'  && char <='z'){
//       result=("this is alphabetic lower case character");
//       alert(result);
// }
// else if(char >='A'  && char <='Z'){
//       result=("this is alphabetic Upper case character");
//       alert(result);
// }
// else{
//       alert("given character is a number!!");
// }

/*(IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS ) #02*/
// let num_1=parseInt(prompt('enter number 1 : '));
// let num_2=parseInt(prompt('enter number 2 : '));
// if(num_1 > num_2){
//       alert('The larger between theese two is '+ num_1)
// }
// else if(num_2 > num_1){
//       alert('The larger between theese two is '+ num_2)
// }
// else{
//       alert("Both are Same!!");s
// }

/*(IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS ) #03*/
// let number = parseInt(prompt("Enter a number: "));
// if (number > 0) {
//     alert("The number is positive");
// }
// else if (number == 0) {
//   alert("The number is zero");
// }
// else {
//       alert("The number is negative");
// }

/*(IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS ) #04*/
// let char=prompt('Enter your character');
// if(char==='a' || char==='e' || char==='i' || char==='o' || char==='u'){
//       alert(true);
// }
// else{
//       alert(false);
// }

/*(IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS ) #05*/
// let password_1=("fahadkhan");
// var password_2 = prompt("What is your name", "");
// if(password_2==password_1){
//       alert('Correct! The password you entered matches the original password');
// }
// else if (password_2 == "") {
//       alert("please enter your password");
// }
// else if(password_2!==password_1){
//       alert("Incorrect Password");

// }

/*(IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS ) #06*/
// var greeting;
// var hour = 13;
// if (hour < 18) {
// alert(greeting = "Good day");
// }
// else{
//       alert(greeting = "Good evening");
// }

/*(IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS ) #07*/
// let time=1900;
// time=parseInt(prompt('Enter your time'));
// if(time >= 0000 && time < 1200){
//       alert('Good Morning');
// }
// else if(time >= 1200 && time < 1700){
//       alert('Good Afternoon');
// }
// else if(time >= 1700 && time < 2100){
//       alert('Good Afternoon');
// }
// else if(time >= 2100 && time < 2359){
//       alert('Good Night');
// }
// else{
//       alert('Please Enter Apporopriate Time');
// }

/*..................CHAPTER 14 to 16................*/
/* (Array) #01 */
// let arr=["","","",""];

/* (Array) #02 */
// let arr={};

/* (Array) #03 */
// let arr=["fahad","saad","ahad","ebad"];
// alert(arr);

/* (Array) #04 */
// let arr=[5,10,15,20];
// alert(arr);

/* (Array) #05 */
// let arr=[true,false,true,false];
// alert(arr);

/* (Array) #06 */
// let arr=[10,"Fahad",15,true];
// alert(arr);

/* (Array) #07 */
// document.write("Qualification:" +"<br />"+"<br />");
// let arr=["1)SSC"+"<br />"+"2)HSC"+"<br />"+"3)BCS"+"<br />"+"4)BS"+"<br />"+"5)MCOM"+"<br />"+"6)MS"+"<br />"+"7)M,PHIL"+"<br />"+"8)PHD"]
// document.write(arr);

/* (Array) #08 */
// let arr_1=["Fahad","Saad","Ahad"];
// let arr_2=[320,400,350];
// let percentageofFahad=arr_2[0]/500*100;
// let percentageofSaad=arr_2[1]/500*100;
// let percentageofAhad=arr_2[2]/500*100;
// document.write("Score of "+arr_1[0]+" is "+arr_2[0]+". percentage :"+percentageofFahad+"%"+"<br />");
// document.write("Score of "+arr_1[1]+" is "+arr_2[1]+". percentage :"+percentageofSaad+"%"+"<br />");
// document.write("Score of "+arr_1[2]+" is "+arr_2[2]+". percentage :"+percentageofAhad+"%");

/* (Array) #09 */
// let arr=["red","green","blue","black"];
// document.write(arr);
// document.write("<br />")
// arr.unshift(prompt("what color do you want to add at the beginning"));
// document.write(arr);
// document.write("<br />")
// arr.push(prompt("what color do you want to add at the end"));
// document.write(arr);
// document.write("<br />")
// arr.unshift(prompt("what colors do you want to add at the beginning"));
// document.write(arr);
// document.write("<br />")
// arr.shift(prompt("what colors do you want to delete at the end"));
// document.write(arr);
// document.write("<br />")
// arr.splice(prompt("where do you want to add color at array"));
// arr.splice(prompt("what color do you want to add  at the array"));
// document.write(arr);

/* (Array) #10 */
// document.write("Scores of Students : ")
// let arr=[320,230,480,120];
// document.write(arr);
// arr.sort();
// document.write("<br />")
// document.write("Ordered Scores of Students : ")
// document.write(arr);

/* (Array) #11 */
// document.write("Cities :"+"<br />")
// let cities=["karachi","lahore","multan","quetta","peshawar","hyderabad"+"<br />"+"<br />"]
// document.write(cities);
// document.write("Selected Cities :"+"<br />")
// let selectedCities=cities.splice(2,3);
// document.write(selectedCities);

/* (Array) #12 */
// document.write('Array'+"<br />");
// let arr = ["this", "is", "my","cat"+"<br />"+"<br />"];
// document.write(arr);
// document.write('String:'+"<br />");
// arr = ["this "+"is "+"my"+" cat."];
// document.write(arr);

/* (Array) #13 */
// document.write('Devices'+"<br />");
// let arr=["keybord","Mouse","Printer","Monitor"+"<br />"+"<br />"];
// document.write(arr);
// document.write('Out :'+"<br />");
// document.write(arr[0]+"<br />");
// document.write('Out :'+"<br />");
// document.write(arr[1]+"<br />");
// document.write('Out :'+"<br />");
// document.write(arr[2]+"<br />");
// document.write('Out :'+"<br />");
// document.write(arr[3]);

/* (Array) #14 */
// document.write('Devices'+"<br />");
// let arr=["keybord","Mouse","Printer","Monitor"+"<br />"+"<br />"];
// document.write(arr);
// document.write('Out :'+"<br />");
// document.write(arr[3]);
// document.write('Out :'+"<br />");
// document.write(arr[2]+"<br />");
// document.write('Out :'+"<br />");
// document.write(arr[1]+"<br />");
// document.write('Out :'+"<br />");
// document.write(arr[0]);

/* (Array) #15 */
// let arr=["Apple","Samsung","motorolla","Nokia","Sony & Haier"]
// document.write(arr);
// not display any dropdown/select menu in the pdf document



/*..................CHAPTER 17 to 20................*/
/* (Array and Loops) #01 */
// let arr=[
//     [],[]
// ];

/* (Array and Loops) #02 */
// let arr=[
//     [0,1,2,3+"<br />"],
//     [1,0,1,2+"<br />"],
//     [2,1,0,1+"<br />"]
// ]
// document.write(arr);

/* (Array and Loops) #03 */
// let num=10;
// let i;
// for(i=1;i<=10;i++){
//     document.write(i+"<br />");
// }

/* (Array and Loops) #04 */
// let i;
// let num=parseInt(prompt('Enter table number:'));
// let tableLength=parseInt(prompt('Enter table Length:'));
// document.write('Multiplication Table of : ' + num +"<br />");
// document.write('Length of Table : ' + tableLength+"<br />"+"<br />");
// for(i=1;i==tableLength;i++){
//     document.write(num+' X '+ i +' = '+ i*num +"<br />");
// }

/* (Array and Loops) #05 */
// let fruits=["apple", "banana", "mango", "orange","strawberry"]
// for(let i=0;i<fruits.length;i++){
//     document.write(fruits[i]+"<br />")
// }
// document.write("<br />");

// for(i=0;i<fruits.length;i++){
//     document.write('Element at index ' +i+' is '+ fruits[i]+" <br />")
// }

/* (Array and Loops) #06 */
// let i;
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// document.write("Counting"+" <br />")
// for(let i=0;i<arr.length-5;i++){
//     document.write(arr[i]+",");
// }
// document.write(" <br />"+" <br />"+" <br />")
// document.write("Reverse Counting"+" <br />")
// for(i=arr.length-11; i>=0; i--){
//     document.write(arr[i]+",");
// }
// document.write(" <br />" + " <br />" + " <br />")
// document.write("Even :" + " <br />")
// for (i = 0; i <= arr.length; i++){
//     if (arr[i] % 2 == 0) {
//         document.write(arr[i] + ",");
//     }
// }
// document.write(" <br />" + " <br />" + " <br />")
// document.write("ODD : :" + " <br />")
// for (i = 0; i <= arr.length-1; i++){
//     if (arr[i] % 2 !== 0) {
//         document.write(arr[i] + ",");
//     }
// }
// document.write(" <br />" + " <br />" + " <br />")
// document.write("Series :" + " <br />")
// for (i = 0; i <= arr.length; i++){
//     if (arr[i] % 2 == 0) {
//         document.write(arr[i] + "k,");
//     }
// }

/* (Array and Loops) #07 */
// let i,j;
// let arr = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// let user = prompt("Wellcome to abc Bakery!!What do you want to order sir/ma'am")
// for(j=0;j<1;j++){
//     for ( i = 0; i <= arr.length; i++) {
//         if (arr[i] === user ) {
//             document.write(arr[i] + " is Available at index "+ [i] +" in our bakery")
//         }  
//         else{
//             document.write("We Are Sorry Sir "+ user + " is not available in our bakery");
//         }
//     }
// }

/* (Array and Loops) #08 */
// let array1 = [24, 53, 78,92,12];
// let sortedArray=array1.sort();
// document.write(sortedArray+"<br />");
// document.write("Largest Number :"+sortedArray[4]);

/* (Array and Loops) #09 */
// let array1 = [24, 53, 78,92,12];
// let sortedArray=array1.sort();
// document.write(sortedArray+"<br />");
// document.write("Smallest Number :"+sortedArray[0]);

/* (Array and Loops) #10 */
// let num=5;
// for(i=1;i<=20;i++){
//     document.write(i*5+",")
// }
