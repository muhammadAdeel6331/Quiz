function checking(){
    var result = 0
    var right_a_1 = document.getElementById("1q_4a");
    var q1_a2= document.getElementById("1q-2a");
    var q1_a3= document.getElementById("1q-3a");
    var q1_a4= document.getElementById("1q-1a"); 
    if (right_a_1.checked == true){
        result+=10
        //alert('Question 1 is correct')
    }
    else{
        //alert('Question 1 is not correct');    
    }


    var right_a_2 = document.getElementById("2q-1a");
    var q2_a2= document.getElementById("2q-2a");
    var q2_a3= document.getElementById("2q-3a");
    var q2_a4= document.getElementById("2q-4a"); 
    if (right_a_2.checked == true){
        result+=10
        //alert('Question 2 is correct')
    }
    else{
        //alert('Question 2 is not correct');    
    }



    var right_a_3 = document.getElementById("3q-1a");
    var q3_a2= document.getElementById("3q-2a");
    var q3_a3= document.getElementById("3q-3a");
    var q3_a4= document.getElementById("3q-4a"); 
    if (right_a_3.checked == true){
        result+=10
        //alert('Question 3 is correct')
    }
    else{
        //alert( 'Question 3 is not correct');    
    }



    var right_a_4 = document.getElementById("4q-1a");
    var q4_a2= document.getElementById("4q-2a");
    var q4_a3= document.getElementById("4q-3a");
    var q4_a4= document.getElementById("4q-4a"); 
    if (right_a_4.checked == true){
        result+=10
        //alert('Question 4 is correct')
    }
    else{
        //alert( 'Question 4 is not correct');    
    }



    var right_a_5 = document.getElementById("3q-1a");
    var q5_a2= document.getElementById("5q-2a");
    var q5_a3= document.getElementById("5q-3a");
    var q5_a4= document.getElementById("5q-4a"); 
    if (right_a_5.checked == true){
        result+=10
        //alert('Question 5 is correct')
    }
    else{
        //alert( 'Question 5 is not correct');    
    }
    


    // var divmain= document.getElementById("main")
    var divvv = document.getElementById("result")
    divvv.setAttribute("class","result")
    // divmain.setAttribute("class","main")


    var resultt= "Your result is : "+result
    var para = document.createElement('p')
    // var paratext = document.createTextNode(resultt.value)
    // para.appendChild(paratext)
    para.innerHTML = resultt
    console.log(para)
    divvv.appendChild(para)
 function empty(){
    var rr =" "
    para.innerHTML = rr
    divvv.appendChild(para)
 }
    
 function unchek(){
     right_a_1.checked=false;
     q1_a2.checked = false;
     q1_a3.checked = false;
     q1_a4.checked = false;

     right_a_2.checked=false;
     q2_a2.checked = false;
     q3_a3.checked = false;
     q4_a4.checked = false;
     
     right_a_3.checked=false;
     q3_a2.checked = false;
     q3_a3.checked = false;
     q3_a4.checked = false;
     
     right_a_4.checked=false;
     q1_a2.checked = false;
     q1_a3.checked = false;
     q1_a4.checked = false;
     
     right_a_5.checked=false;
     q5_a2.checked = false;
     q5_a3.checked = false;
     q5_a4.checked = false;
     
 }
    







}



















