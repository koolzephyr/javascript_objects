/**
 * Created by zephyr on 9/9/15.
 */

function last(arr,num){
    var len=arr.length;
    if(num<len){
        alert(arr.slice(len-num,len));
    }
    else{
        alert(arr.slice(0,len));
    }

}

function myColor(arr){
    alert(arr.join());
}

function remove_array_element(arr,num){
    var i = arr.indexOf(num);
    if(i>-1){
        arr.splice(i,1);
    }
    alert("New array is: "+arr);
}


function protect_email(email){
    var new_email = "";
    for(var i=0;i<3;i++){
        new_email+=email.charAt(i);
    }
    for(i=3;i<email.length;i++){
        if(email.charAt(i)==='@'){
            for(var j=i;j<email.length;j++){
               new_email+=email.charAt(j);
            }
            break;
        }
        new_email+=".";
    }
    alert("Protected email is: "+new_email);
}

function repeat(s,n){
    var new_s="";
    for(var i=0;i<n;i++){
        new_s+=s;
    }
    alert(new_s);
}

function insert(s,s1,n){
    var temp="";
    for(var i= n;i< s.length;i++){
        temp+= s.charAt(i);
    }
    alert(s.replace(temp,s1+temp));
}

function month_name(date){
    switch(date.getMonth()){
        case 0:
            alert("Month is January.");
            break;
        case 1:
            alert("Month is February.");
            break;
        case 2:
            alert("Month is March.");
            break;
        case 3:
            alert("Month is April.");
            break;
        case 4:
            alert("Month is May.");
            break;
        case 5:
            alert("Month is June");
            break;
        case 6:
            alert("Month is July.");
            break;
        case 7:
            alert("Month is August.");
            break;
        case 8:
            alert("Month is September.");
            break;
        case 9:
            alert("Month is October.");
            break;
        case 10:
            alert("Month is November.");
            break;
        case 11:
            alert("Month is December.");
            break;
    }
}

function yesterday(date){
    var d = new Date(date);
    d.setDate(d.getDate()-1);
    alert(d);
}

function isAlphaNumeric(val){
    for(var i=0;i<val.length;i++){

        var char = val.charAt(i);

        var num=char>='0'&&char<='9';

        var alpa_num = false;

        if(num){
            alpa_num= true;
            break;
        }
    }
    if(alpa_num){
        alert(val+" is alpha numeric.");
    }
    else{
        alert(val+" is not alpha numeric.");
    }
}

function isUpperCase(char){
    if(char===char.toUpperCase()){
        alert("First character of the string is upper case.");
    }else{
        alert("First character of the string is not upper case.");
    }
}

function vowels(str){
    var count = 0;
    for(var i=0;i<str.length;i++){
        var char = str.charAt(i).toLowerCase();
        var vow=char==='a'||char==='e'||char==='i'||char==='o'||char==='u';

        if(vow){
            count++;
        }
    }
    alert("Total vowels in the string: "+count);
}