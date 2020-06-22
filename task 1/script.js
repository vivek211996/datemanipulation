
var title1=document.createElement('h2')
title1.setAttribute('class', 'title')
var tc=document.createElement('center')
tc.innerHTML ='Date manipulation'

var label1=document.createElement('label')
label1.setAttribute('for','userinput')
label1.innerHTML='Enter your DOB : '

var input1 = document.createElement('input')
input1.setAttribute('type','date')
input1.setAttribute('id', 'userinput')
input1.setAttribute('name','userinput')

var button=document.createElement('input')
button.setAttribute('type','submit')
button.setAttribute('onclick','calculation()')

var nxline =document.createElement('br')

var label2=document.createElement('label')
label2.innerHTML='Your age is: '

var output1 = document.createElement('label')
output1.setAttribute('type','text')
output1.setAttribute('id', 'age1')

var nxline2 =document.createElement('br')

var label3=document.createElement('label')
label3.innerHTML='Total months lived since birth : '

var output2 = document.createElement('label')
output2.setAttribute('type','text')
output2.setAttribute('id', 'month')

var nxline3 =document.createElement('br')

var label4=document.createElement('label')
label4.innerHTML='Total no.of days lived since birth : '

var output3 = document.createElement('label')
output3.setAttribute('type','text')
output3.setAttribute('id', 'day')

var nxline4 =document.createElement('br')

var label5=document.createElement('label')
label5.innerHTML='Total no.of hours lived since birth : '

var output4 = document.createElement('label')
output4.setAttribute('type','text')
output4.setAttribute('id', 'hrs')

var nxline5 =document.createElement('br')

var label6=document.createElement('label')
label6.innerHTML='Total minutes lived since birth : '

var output5 = document.createElement('label')
output5.setAttribute('type','text')
output5.setAttribute('id', 'min')

var nxline6 =document.createElement('br')

var label7=document.createElement('label')
label7.innerHTML='Total seconds lived since birth : '

var output6 = document.createElement('label')
output6.setAttribute('type','text')
output6.setAttribute('id', 'sec')

var nxline7 =document.createElement('br')

var label8=document.createElement('label')
label8.innerHTML='Total milliseconds lived since birth : '

var output7 = document.createElement('label')
output7.setAttribute('type','text')
output7.setAttribute('id', 'msec')

var title2=document.createElement('h4')
title2.setAttribute('id','txt')


document.body.append(title1,label1,input1,button,nxline,label2,output1,nxline2,label3,output2,nxline3,label4,output3,nxline4,label5,output4,nxline5,label6,output5,nxline6,label7,output6,nxline7,label8,output7,title2)
title1.appendChild(tc)



function calculation()
{
   
function calculate(dob)
 { 
     
    var ms = Date.now() - dob.getTime();
    var seconds = Math.round(ms/1000);
    var minutes = Math.round(seconds/60);
    var hours = Math.round(minutes/60);
    var days = Math.round(hours/24);
    var months = Math.round(days/30.417);
document.getElementById("month").innerHTML = months;
document.getElementById("day").innerHTML = days;
document.getElementById("hrs").innerHTML = hours;
document.getElementById("min").innerHTML = minutes;
document.getElementById("sec").innerHTML = seconds;
document.getElementById("msec").innerHTML = ms;
document.getElementById("txt").innerHTML = "The above mentioned are approx values"
    var agedt = new Date(ms); 
    return Math.abs(agedt.getUTCFullYear() - 1970);
   
}






var age=calculate(new Date(userinput.value));
document.getElementById("age1").innerHTML = age;
document.getElementById("month").innerHTML = seconds;


}