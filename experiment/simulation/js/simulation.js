/*Redeveloped
Lab: Software Engineering
Exp: Designing Test Suites
File Name: simulation.js
Author: Prakriti Dhang*/

function playsimulation(){
    document.getElementById("playbtn").disabled=true;
    document.getElementById("p1").style.display="block";

    setTimeout(list1, 1500);
    function list1(){
        document.getElementById("l1").style.display="block";
        setTimeout(list2, 1500);
       
    }
    
    function list2(){
        document.getElementById("l2").style.display="block";
        document.getElementById("nextbtn1").disabled=false;
       
       
    }
    
    
 
    
    
    
}

function gonextp2(){
    document.getElementById("step1").style.display="block";
    document.getElementById("head1").innerHTML="Level 0 DFD";
    document.getElementById("p2").style.display="block";
    document.getElementById("p1").style.display="none";
    document.getElementById("p21").style.display="none";
   // document.getElementById("backbtn2").disabled=true;
    document.getElementById("nextbtn2").disabled=true;
   
    setTimeout(list21, 1500);
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
        setTimeout(p21, 1500);
        
    }

    function p21(){
        document.getElementById("p21").style.display="block";
        document.getElementById("nextbtn2").disabled=false;
    }

   
}



function gonextp3(){
    document.getElementById("p2").style.display="none";
    document.getElementById("step1").style.display="block";
    document.getElementById("p3").style.display="block";
    document.getElementById("p31").style.display="block";
    document.getElementById("nextbtn3").style.display="none";
    document.getElementById("head1").innerHTML="Level 0 DFD";
    setTimeout(d1, 2500);

  
    //document.getElementById("backbtn3").disabled=true;
   
   
  

    function d1(){
        
       
        document.getElementById("d1").style.display="block";
        setTimeout(p32, 1500);
        
        
    }
    function p32(){
        document.getElementById("nextbtn3").style.display="block";
        document.getElementById("p32").style.display="block";
        document.getElementById("nextbtn3").disabled=false;
    }



}
    
    

    

function gonextp4(){
    document.getElementById("step2").style.display="block";
    document.getElementById("head1").innerHTML="Higher Levels of DFD";
    document.getElementById("p3").style.display="none";
    document.getElementById("p31").style.display="none";
    document.getElementById("p32").style.display="none";
    document.getElementById("p4").style.display="block";
    document.getElementById("sysname").style.display="block";
    setTimeout(img2, 1500);






function img2(){
    document.getElementById("p41").style.display="none";
    document.getElementById("1.1pl").style.display="block";
    setTimeout(img3, 1500);
 
}

function img3(){
    document.getElementById("1.2pl").style.display="block";
    setTimeout(p42, 3200);
 
}

function p42(){
    document.getElementById("p42").style.display="block";
    setTimeout(img4, 4000);
 

}

function img4(){
    document.getElementById("p42").style.display="none";
    document.getElementById("sysname").style.display="none";
    document.getElementById("1.1pl").style.display="none";
    document.getElementById("1.2pl").style.display="none";
    document.getElementById("hdfd").style.display="block";
    setTimeout(p43, 2500);
 
}

function p43(){
   
    document.getElementById("p43").style.display="block";
    setTimeout(p44, 3000);
}

function p44(){
    document.getElementById("p43").style.display="none";
    document.getElementById("p44").style.display="block";
    setTimeout(replaybtn, 2500);
}


function replaybtn(){
    document.getElementById("replaybtn").style.display="block";
    document.getElementById("replaybtn").disabled=false;
}


}
 
  function replaybtn(){
    document.getElementById("head1").innerHTML="Data Flow Diagrams";
    document.getElementById("playbtn").disabled=false;
    document.getElementById("replaybtn").disabled=true;
    location.reload();
   
  }