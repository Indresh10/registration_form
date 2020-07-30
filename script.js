//set Today Date Limit
var tdate=new Date();
var dd=tdate.getDate(),mm=tdate.getMonth()+1,yy=tdate.getFullYear();
dd=(dd<10)?"0"+dd:dd;
mm=(mm<10)?"0"+mm:mm;
var today=yy + "-" + mm + "-" + dd
document.getElementById('dob').setAttribute("max",today);
var inputs=['fname','lname','dob','email','mobile','Gender',
            'staddress','city','state','pin',
            'Xboard','Xper','Xpass','XIIboard','XIIper','XIIpass',
            'Gboard','Gper','Gpass','Mboard','Mper','Mpass','Course'
            ];
var errors=['fnameerr','lnameerr','doberr','emailerr','moberr','generr',
            'adderr','cityerr','stateerr','pinerr',
            'xboarderr','xpererr','xpasserr','xiiboarderr','xiipererr','xiipasserr',
            'gboarderr','gpererr','gpasserr','mboarderr','mpererr','mpasserr','couerr'
            ]
//Submit Function
function valid() {
    for(i=0;i<=inputs.length-1;i++){ 
        if(i==3){
            if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById(inputs[i]).value))) {
                document.getElementById(errors[i]).style.display= "block";
                document.getElementById(errors[i]).innerHTML='Invalid Email';      
            }
        }else if(i==4){
            var mob=document.getElementById(inputs[i]).value;
            if(isNaN(mob) || mob.length != 10 ){
                document.getElementById(errors[i]).style.display= "block";
                document.getElementById(errors[i]).innerHTML='Invalid Mobile no.';
            }
        }else if(i==9){
            var mob=document.getElementById(inputs[i]).value;
            if(isNaN(mob) || mob.length != 6 ){
                document.getElementById(errors[i]).style.display= "block";
                document.getElementById(errors[i]).innerHTML='Invalid Pin Code';
            }
        }else if(i==11 || i==14 || i==17 || i==20){
            var mob=document.getElementById(inputs[i]).value;
            if(isNaN(mob) || mob >= 100 ){
                document.getElementById(errors[i]).style.display= "block";
                document.getElementById(errors[i]).innerHTML='Invalid Percentage';
            }
        }else if(i==12 || i==15 || i==18 || i==21){
            var mob=document.getElementById(inputs[i]).value;
            if(isNaN(mob) || mob > yy || mob.length !=4 ){
                document.getElementById(errors[i]).style.display= "block";
                document.getElementById(errors[i]).innerHTML='Invalid Year';
            }
        }
        if(!(i==5 || i==22 )){
            if(Empty(document.getElementById(inputs[i]).value)){
                document.getElementById(errors[i]).style.display= "block";
                document.getElementById(errors[i]).innerHTML='Required'
            }
        }else if(i==5 || i==22){
            var val=document.getElementsByName(inputs[i]);
            if (!radiocheck(val)){
                document.getElementById(errors[i]).style.display= "block";
                document.getElementById(errors[i]).innerHTML='Required';
            }
        }
    }
}
//clear error function
function Clear(val){
    document.getElementById(val).style.display='none';
}
function ClearAll(){
    for(i=0;i<=22;i++){
        Clear(errors[i]);
    }
}
function radiocheck(val){
    var bol=false;
    for(x=0;x<=val.length-1;x++){
        if (val[x].checked){
            bol=true;
        }
    }
    return bol;
}
//To check if Empty Value 
function Empty(a) {
    if (a==""){
        return true;
    }else{
        return false;
    }
}