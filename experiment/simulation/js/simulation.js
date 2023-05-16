/*Redeveloped
Lab: Software Engineering
Exp: Designing Test Suites
File Name: simulation.js
Author: Prakriti Dhang*/

function playsimulation(){
    document.getElementById("playbtn").disabled=true;
    document.getElementById("p1").style.display="block";

    setTimeout(list1, 10);
    function list1(){
        document.getElementById("l1").style.display="block";
        setTimeout(list2, 1500);
       
    }
    
    function list2(){
        document.getElementById("l2").style.display="block";
        
       
        setTimeout(list3, 1500);
    }
    
    function list3(){
        document.getElementById("l3").style.display="block";
        setTimeout(list4, 1500);
       
    }
 
    function list4(){
        document.getElementById("l4").style.display="block";
        setTimeout(list5, 1500);
       
    }
    function list5(){
        document.getElementById("l5").style.display="block";
        document.getElementById("nextbtn1").disabled=false;
    }
 
 
    
    
}

function gonextp2(){
    document.getElementById("step1").style.display="block";
    document.getElementById("head1").innerHTML="1. Create a Test Plan";
    document.getElementById("p2").style.display="block";
    document.getElementById("p1").style.display="none";
  
    document.getElementById("nextbtn2").disabled=true;
   
    setTimeout(list21, 10);

    function list21(){
        document.getElementById("l21").style.display="block";
        setTimeout(list22, 1500);
       
    }
    
    function list22(){
        document.getElementById("l22").style.display="block";
        setTimeout(list23, 1500);
       
    }
    
    function list23(){
        document.getElementById("l23").style.display="block";
        setTimeout(list24, 1500);
        
    }

    function list24(){
        document.getElementById("l24").style.display="block";
        setTimeout(list25, 1500);
        
    }
    function list25(){
        document.getElementById("l25").style.display="block";
        document.getElementById("nextbtn2").disabled=false;
        
    }
   
}



function gonextp3(){
    document.getElementById("p2").style.display="none";
    document.getElementById("step2").style.display="block";
    document.getElementById("p3").style.display="block";
    document.getElementById("p31").style.display="block";
    document.getElementById("head1").innerHTML="2. Create Test Suite";
    setTimeout(p32, 10);

  
    //document.getElementById("backbtn3").disabled=true;
   
   
  

    function p32(){
        
        document.getElementById("p32").style.display="block";
        setTimeout(p33, 1500);
        
        
    }
    function p33(){
        document.getElementById("p33").style.display="block";
        document.getElementById("nextbtn3").disabled=false;
        setTimeout(l31, 1500);
    }

    function l31(){
        
        document.getElementById("l31").style.display="block";
        setTimeout(l32, 1500);
    }

    function l32(){
        
        document.getElementById("l32").style.display="block";
        setTimeout(l33, 1500);
    }


    function l33(){
        document.getElementById("l33").style.display="block";
        document.getElementById("nextbtn3").disabled=false;
    }





}
    
    

    

function gonextp4(){
    document.getElementById("step2").style.display="block";
    document.getElementById("head1").innerHTML="2. Create Test Suite";
    document.getElementById("p3").style.display="none";
    document.getElementById("p31").style.display="none";
    document.getElementById("p32").style.display="none";
    document.getElementById("p4").style.display="block";
    
    setTimeout(l41, 10);


function l41(){
    document.getElementById("l41").style.display="block";
    setTimeout(l42, 1500);
 
}

function l42(){
    document.getElementById("l42").style.display="block";
    setTimeout(l43, 1500);
 
}

function l43(){
    document.getElementById("l43").style.display="block";
    setTimeout(l44, 1500);
 
}
function l44(){
    document.getElementById("l44").style.display="block";
    setTimeout(l45, 1500);
 
}
function l45(){
    document.getElementById("l45").style.display="block";
    document.getElementById("nextbtn4").disabled=false;
 
}
}

function gonextp5(){
    document.getElementById("step3").style.display="block";
    document.getElementById("head1").innerHTML="3. Test Scripts";
    document.getElementById("p4").style.display="none";
    document.getElementById("p5").style.display="block";
  
    setTimeout(l51, 10);


function l51(){
    document.getElementById("l51").style.display="block";
    setTimeout(l52, 1500);
 
}

function l52(){
    document.getElementById("l52").style.display="block";
    setTimeout(p52, 1500);
 
}

function p52(){
    document.getElementById("p52").style.display="block";
    setTimeout(l5a, 1500);
 
}

function l5a(){
    document.getElementById("l5a").style.display="block";
    setTimeout(l5b, 1500);
 
}


function l5b(){
    document.getElementById("l5b").style.display="block";
    setTimeout(l5c, 1500);
 
}
function l5c(){
    document.getElementById("l5c").style.display="block";
    document.getElementById("nextbtn5").disabled=false;
 
}


}

function gonextp6(){
    document.getElementById("step4").style.display="block";
    document.getElementById("head1").innerHTML="4. Execute all Test Suite";
    document.getElementById("p5").style.display="none";
    document.getElementById("p6").style.display="block";
  
    setTimeout(l61, 10);


function l61(){
    document.getElementById("l61").style.display="block";
    setTimeout(l62, 1500);
 
}
function l62(){
    document.getElementById("l62").style.display="block";
    setTimeout(l63, 1500);
 
}
function l63(){
    document.getElementById("l63").style.display="block";
    setTimeout(l64, 1500);
 
}
function l64(){
    document.getElementById("l64").style.display="block";
    document.getElementById("nextbtn6").disabled=false;
 
}
}

function gonextp7(){
    document.getElementById("step5").style.display="block";
    document.getElementById("head1").innerHTML="5. Bug Fixing";
    document.getElementById("p6").style.display="none";
    document.getElementById("p7").style.display="block";
  
    setTimeout(l71, 10);


function l71(){
    document.getElementById("l71").style.display="block";
    setTimeout(l72, 1500);
 
}
function l72(){
    document.getElementById("l72").style.display="block";
    setTimeout(l73, 1500);
 
}
function l73(){
    document.getElementById("l73").style.display="block";
    setTimeout(p71, 1500);
 
}
function p71(){
    document.getElementById("p71").style.display="block";
    //document.getElementById("nextbtn7").disabled=false;
    setTimeout(replaybtnd, 1500);
}
}

/*function gonextp8(){
    document.getElementById("step6").style.display="block";
    document.getElementById("head1").innerHTML="A Graphical Representation";
    document.getElementById("p7").style.display="none";
    document.getElementById("p8").style.display="block";
}*/





function replaybtnd(){
    document.getElementById("replaybtn").style.display="block";
    document.getElementById("replaybtn").disabled=false;
}



 
  function replaybtn(){
    document.getElementById("head1").innerHTML="Data Flow Diagrams";
    document.getElementById("playbtn").disabled=false;
    document.getElementById("replaybtn").disabled=true;
    location.reload();
   
  }