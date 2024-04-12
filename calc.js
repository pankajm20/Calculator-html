document.addEventListener('keypress',keyEvent);
var flag=0;
function keyEvent(e){
    var keyValue =e.key;
    if (keyValue=='0' || keyValue=='1' || keyValue=='2' || keyValue=='3' || keyValue=='4' || keyValue=='5' || keyValue=='6' || keyValue=='7' || keyValue=='8' || keyValue=='9' || keyValue=='.' || keyValue=='/' || keyValue=='*' || keyValue=='-' || keyValue=='+' || keyValue.toLowerCase()=='c'){
        if(keyValue=='C'){
            myButtonClick(keyValue.toLowerCase())
        }
        else{
            myButtonClick(keyValue);
        }
    }
    else if(keyValue=="Enter"){
        myButtonClick('=');
    }
}

function myButtonClick(s){
    if (flag==1){
        flag = 0;
        document.getElementById("disp").value='';
    }
    switch(s){
        case '7':
            var x="7";
            break;
        case '8':
            var x="8";
            break;
        case '9':
            var x="9";
            break;
        case '/':
            var x="/";
            break;
        case '4':
            var x="4";
            break;
        case '5':
            var x="5";
            break;
        case '6':
            var x="6";
            break;
        case '*':
            var x="*";
            break;
        case '1':
            var x="1";
            break;
        case '2':
            var x="2";
            break;
        case '3':
            var x="3";
            break;
        case '-':
            var x="-";
            break;
        case '0':
            var x="0";
            break;
        case '.':
            var x=".";
            break;
        case '+':
            var x="+";
            break;
        case '=':
            var y = document.getElementById("disp").value;
            document.getElementById("disp").value='';
            var z= eval(y);
            var x = y+"="+z;
            flag=1;
            break;    
    }
    if(s=='c')
    {
        document.getElementById("disp").value='';
    }
    else
    {
        document.getElementById("disp").value+=x;
    }
}
