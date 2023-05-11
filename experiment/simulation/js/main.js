/*Redeveloped
Lab: Software Engineering
Exp: Designing Test Suites
File Name: main.js
Author: Prakriti Dhang*/

/* Exercise number choice */
var ex= document.getElementById("selectex");
function subex(){

  if(ex.options[ex.selectedIndex].value==0){
    document.getElementById("exercise1").style.display="none";
    document.getElementById("ex1").style.display="none";
    document.getElementById("para1").style.display="none";
    document.getElementById("dispres").style.display="none";
    document.getElementById("show_result1").style.display="none";
    document.getElementById("show_result2").style.display="none";
    document.getElementById("dispuml1").style.display="none";
    document.getElementById("dispuml2").style.display="none";
    document.getElementById("dispviewbtn").disabled=true;
    document.getElementById("viewsol").disabled=true;
    
}
    if(ex.options[ex.selectedIndex].value==1){
        document.getElementById("exercise1").style.display="block";
        document.getElementById("ex1").style.display="block";
        document.getElementById("exercise2").style.display="none";
       document.getElementById("ex2").style.display="none";
        document.getElementById("para1").style.display="block";
        document.getElementById("dispres").style.display="none";
        document.getElementById("show_result1").style.display="none";
        document.getElementById("show_result2").style.display="none";
        document.getElementById("dispuml1").style.display="none";
        document.getElementById("dispuml2").style.display="none";
        document.getElementById("dispviewbtn").disabled=false;
        document.getElementById("viewsol").disabled=true;
       
    }
    if(ex.options[ex.selectedIndex].value==2){
      document.getElementById("exercise2").style.display="block";
      document.getElementById("ex2").style.display="block";
      document.getElementById("exercise1").style.display="none";
      document.getElementById("ex1").style.display="none";
      document.getElementById("para1").style.display="block";
      document.getElementById("dispres").style.display="none";
      document.getElementById("show_result1").style.display="none";
      document.getElementById("show_result2").style.display="none";
      document.getElementById("dispuml1").style.display="none";
      document.getElementById("dispuml2").style.display="none";
      document.getElementById("dispviewbtn").disabled=false;
      document.getElementById("viewsol").disabled=true;
     
  }
    
    
}
/* Submit button to directly view the solution*/

function viewsolutionb(){ //submit button
  document.getElementById("dispres").style.display="block";
  document.getElementById("show_result1").style.display="none";
  document.getElementById("show_result2").style.display="none";
    document.getElementById("viewsol").disabled=false;
    document.getElementById("dispviewbtn").disabled=true;
    if(ex.options[ex.selectedIndex].value==1){
    window.scrollBy(0, 1800);
    }
    if(ex.options[ex.selectedIndex].value==2){
      window.scrollBy(0, 2800);
    }

}

function solview(){  //view solution button
  if(ex.options[ex.selectedIndex].value==1){
  document.getElementById("show_result1").style.display="block";
  document.getElementById("show_result2").style.display="none";
    document.getElementById("viewsol").disabled=true;
    
  }
  if(ex.options[ex.selectedIndex].value==2){
    document.getElementById("show_result2").style.display="block";
    document.getElementById("show_result1").style.display="none";
      document.getElementById("viewsol").disabled=true;
      
    }

}
 
/********************************************* Table 1 ****************************************/
let newtrID, newtr, newtd,newtda, newtdan, newtdp, newtdID,  inpt1;
/*let newCheckLabel = document.createElement('LABEL');
newCheckLabel.setAttribute('for', newCheckBoxID);
let labelTextNode = document.createTextNode(inpt1);
newCheckLabel.appendChild(labelTextNode);
newLi.appendChild(newCheckLabel);*/
var arrstate=[];
var arractivity=[];
var arrevent=[];
function addbtnt1(){
inpt1=document.getElementById("inp1").value;
arrstate.push(inpt1)


  var newIconbtn = document.createElement("img");
  newIconbtn.setAttribute("src","./images/remove.png");
  newIconbtn.setAttribute("onclick", "removerow(this)");
  newIconbtn.setAttribute("style","cursor:pointer;");
  //newdiv.appendChild(newIconbtn);

  newtrID =  inpt1;
  newtdID= inpt1;
  //rbtn.appendChild(newIconbtn);   
newtr=document.createElement("tr");
newtr.setAttribute("id",newtrID);
newtd = document.createElement("td");
newtd.setAttribute("class","statename");
newtd.setAttribute("id","newtdID");
//newdiv = document.createElement("div");
//newdiv.setAttribute("class", "form-check");
newtr.appendChild(newtd);
//newtd.appendChild(newdiv);

let liTextNodeact = document.createTextNode(inpt1);
newtd.appendChild(liTextNodeact);


/**** activities *****/
let newtdaID =  "activ_" +inpt1;
newtda = document.createElement("td");
//newula = document.createElement("ul");
newtda.setAttribute("id",newtdaID);

//newtda.appendChild(newula);
newtr.appendChild(newtda);
let liTextNodeacta = document.createTextNode("");
newtda.appendChild(liTextNodeacta);

/**** note *****/
let newtdnID =  "note_" +inpt1;
newtdan = document.createElement("td");
//newula = document.createElement("ul");
newtdan.setAttribute("id",newtdnID);

//newtda.appendChild(newula);
newtr.appendChild(newtdan);
let liTextNodeactn = document.createTextNode("");
newtdan.appendChild(liTextNodeactn);

/**** posiiton *****/
/*let newtdpID =  "pos_" +inpt1;
newtdp = document.createElement("td");
//newula = document.createElement("ul");
newtdp.setAttribute("id",newtdpID);

//newtda.appendChild(newula);
newtr.appendChild(newtdp);
let liTextNodeactp = document.createTextNode("");
newtdp.appendChild(liTextNodeactp);*/

let newtdr = document.createElement("td");
newtdr.appendChild(newIconbtn);
newtr.appendChild(newtdr);

//newtd.appendChild(newIconbtn);
  if (inpt1 == "") {
    alert("Please Enter state name before clicking Add Button");
  } else {
    document.getElementById('tbodyt4').appendChild(newtr);
    
 //document.getElementById('potobjlist').appendChild(newLi);
  document.getElementById("inp1").value="";

/*********************** Adding input value in table 2 *************************/

let newOptionIDt2;
newOptionIDt2 = 'newOption_' + inpt1;
  
let newOptiont2 = document.createElement('option');
let optionTextt2 = document.createTextNode(inpt1);
// set option text
newOptiont2.appendChild(optionTextt2);
// and option value

newOptiont2.setAttribute("id", newOptionIDt2);
newOptiont2.setAttribute('value',inpt1);
let selectt2 = document.getElementById('selectstate'); 
selectt2.appendChild(newOptiont2);



  /*********************** Adding input value in table 3 *************************/

let newOptionID;
newOptionID = 'newOption_' + inpt1;
  
let newOption = document.createElement('option');
let optionText = document.createTextNode(inpt1);
// set option text
newOption.appendChild(optionText);
// and option value

newOption.setAttribute("id", newOptionID);
newOption.setAttribute('value',inpt1);
let select = document.getElementById('selectstatet3'); 
select.appendChild(newOption);

/*********************** Adding input value in table 5 *************************/

let newOptionIDt5;
newOptionIDt5 = 'newOption_' + inpt1;
  
let newOptiont5 = document.createElement('option');
let optionTextt5 = document.createTextNode(inpt1);
// set option text
newOptiont5.appendChild(optionTextt5);
// and option value

newOptiont5.setAttribute("id", newOptionIDt5);
newOptiont5.setAttribute('value',inpt1);
let selectt5 = document.getElementById('selectstatet5a'); 
selectt5.appendChild(newOptiont5);

let newOptionIDt5b;
newOptionIDt5b = 'newOption_' + inpt1;
  
let newOptiont5b = document.createElement('option');
let optionTextt5b = document.createTextNode(inpt1);
// set option text
newOptiont5b.appendChild(optionTextt5b);
// and option value

newOptiont5b.setAttribute("id", newOptionIDt5b);
newOptiont5b.setAttribute('value',inpt1);
let selectt5b = document.getElementById('selectstatet5b'); 
selectt5b.appendChild(newOptiont5b);
}

}

  /************************************ Function for Table 2 ********************************************/
 var inpt2;
  function addbtnt2() {
    
  inpt2=document.getElementById("inp2").value;
  var selstate= document.getElementById("selectstate");
  var stateval =selstate.options[selstate.selectedIndex].value;
  var selact= document.getElementById("selectact");
  var acteval =selact.options[selact.selectedIndex].text;

    
  var newIconbtn = document.createElement("img");
  newIconbtn.setAttribute("src","./images/remove.png");
  newIconbtn.setAttribute("onclick", "removerowuc(this)");
  newIconbtn.setAttribute("style","cursor:pointer;");

  var slash_sign="/";
  var para = document.createElement("i");
  let add_slash = document.createTextNode(slash_sign);
  para.appendChild(add_slash);

newuLi = document.createElement("ul");
newuLi.setAttribute("style","list-style-type:none" );
newLi = document.createElement("li");
let liTextNodeact = document.createTextNode(acteval);
let liTextNodeae = document.createTextNode(inpt2);
newLi.appendChild(liTextNodeact);
newLi.appendChild(para);
newLi.appendChild(liTextNodeae);
newLi.appendChild(newIconbtn); 
newuLi.appendChild(newLi);

if(stateval == 0){
  alert("Please select a state from the dropdown list in table #2");
}
else if(acteval == "Action Label"){
  alert("Please select an action label!");
}
else  if (inpt2 == "") {
    alert("Please Enter Action Expression Before Clicking Add Button");
  } 
  
  else{
    document.getElementById("activ_"+stateval ).appendChild(newuLi);
    var actevnt= acteval+"/"+inpt2;
    arractivity.push(actevnt);
    
  }

document.getElementById("inp2").value="";
document.getElementById("ftbl2").reset();


}


function removerow(btndel) {
  if (typeof(btndel) == "object") {
      $(btndel).closest("tr").remove();
      
  } 
 

  else {
     return false;
  }
}


function removerowuc(btndel) {

if (typeof(btndel) == "object") {

    $(btndel).closest("li").remove();
   
   // x.remove(typeof(btndel));
   
} else {
    return false;
}
}



/************************************ Function for Table 3 ********************************************/
var inpt3;
function addbtnt3() {
  
inpt3=document.getElementById("inp3").value;
var selstatet3= document.getElementById("selectstatet3");
var statevalt3 =selstatet3.options[selstatet3.selectedIndex].value;
//var selpos= document.getElementById("selectpost");
//var poseval =selpos.options[selpos.selectedIndex].text;

  
var newIconbtn = document.createElement("btn");
newIconbtn.setAttribute("type", "button");
newIconbtn.setAttribute("class", "btn btn-danger");
//newIconbtn.setAttribute("src","./images/remove.png");
newIconbtn.setAttribute("onclick", "removerowuc(this)");
newIconbtn.setAttribute("style","cursor:pointer;");

var newIconbtni3 = document.createElement("i");
newIconbtni3.setAttribute("class", "bi bi-dash-circle");
newIconbtn.appendChild(newIconbtni3);

newuLin = document.createElement("ul");
newLin = document.createElement("li");
newuLin.setAttribute("style","list-style-type:none" );
var paran = document.createElement("i");
let liTextNodent = document.createTextNode(inpt3);
paran.appendChild(liTextNodent);

/*newuLip = document.createElement("ul");
newLip = document.createElement("li");
newuLip.setAttribute("style","list-style-type:none" );
var parap = document.createElement("i");
let liTextNodepos = document.createTextNode(poseval);
parap.appendChild(liTextNodepos);*/

newLin.appendChild(paran);
newuLin.appendChild(newLin);
//newLip.appendChild(parap);
//newuLip.appendChild(newLip);
//newtdan.appendChild(newIconbtn); 



if(statevalt3 == 0){
  alert("Please select a state from the dropdown list in table #3");
}
//else if(poseval == "Select Position"){
//  alert("Please select an position!");
//}
else  if (inpt3 == "") {
    alert("Please Enter Note Before Clicking Add Button");
  } 
  
  else{
   document.getElementById("note_"+statevalt3 ).appendChild(newuLin);
   //document.getElementById("pos_"+statevalt3 ).appendChild(newuLip);
    
  }
  document.getElementById("inp3").value="";
  document.getElementById("ftbl3").reset();

}
/********************************************************** Function for Table 5 *****************************************************************/


var sels1,s1eval,sels2,s2eval;

function addbtnt5(){
    let inpt4, inpt5, inpt6;
   
   

inpt4=document.getElementById("inp4").value;
arrevent.push(inpt4);
//console.log(arrevent);
inpt5=document.getElementById("inp5").value;
inpt6=document.getElementById("inp6").value;
sels1= document.getElementById("selectstatet5a");
s1eval =sels1.options[sels1.selectedIndex].text;
//arrstate1.push(s1eval);
//console.log(arrstate1);

   sels2= document.getElementById("selectstatet5b");
  s2eval =sels2.options[sels2.selectedIndex].text;
  //arrstate2.push(s2eval);
  //console.log(arrstate2);

  if((s1eval=="Current State") || (s2eval=="Next State")){
    alert("Please add a transition from Initial state to one of the states in your system");
   }
  else if(s1eval==s2eval){
alert("A system should not have any transition from Initial to itself");
}
 else if((s1eval=="Initial") && (s2eval=="Final")){
  alert("A system should not have any transition from Initial to Final");
 }
 else if(inpt4 == ""){
  alert("An event is necessary for a state transition to occur! Please specify it.");
 }
else{
 tr = document.createElement('tr');
  tr.setAttribute("id","t6st");
  document.getElementById('tbodytbt6').appendChild(tr);
  var td1 = document.createElement('td');
  var td2=document.createElement("td");
  var td3=document.createElement("td");
  var td4=document.createElement("td");
  var td5=document.createElement("td");
  var td6=document.createElement("td");
  var tdval1=document.createTextNode(s1eval);
  var tdval2=document.createTextNode(inpt4);
  var tdval3=document.createTextNode(inpt5);
  var tdval4=document.createTextNode(inpt6);
  var tdval5=document.createTextNode(s2eval);
  



var newIconbtn = document.createElement("btn");
newIconbtn.setAttribute("type", "button");
newIconbtn.setAttribute("class", "btn btn-danger");
newIconbtn.setAttribute("onclick", "removerow(this)");
newIconbtn.setAttribute("style","cursor:pointer;");
       
var newIconbtni = document.createElement("i");
newIconbtni.setAttribute("class", "bi bi-dash-circle");
newIconbtn.appendChild(newIconbtni);
        
  td1.appendChild(tdval1);
  td2.appendChild(tdval2);
  td3.appendChild(tdval3);
  td4.appendChild(tdval4);
  td5.appendChild(tdval5);
  td6.appendChild(newIconbtn); 
  
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  tr.appendChild(td6);
  document.getElementById('tbodytbt6').appendChild(tr);
  document.getElementById("inp4").value="";
}
  //document.getElementById("ftbl5").reset();
}


function drawbtex1(){

  document.getElementById("dispuml1").style.display="block";
  var namespace = joint.shapes;

  var graph = new joint.dia.Graph({}, { cellNamespace: namespace });

  paper = new joint.dia.Paper({
      el: document.getElementById('stchart_diag_ex1'),
      model: graph,
      //x: 0,
      //y: 0,
      //width: $('#ucdiagram1').width(),
      //height:  $('#ucdiagram1').height(), // height had to be increased
     
      background: {
          color: '#ffffff', //'rgba(0, 255, 0, 0.3)'
      },
      
      cellViewNamespace: namespace
  });

  var initialst = new joint.shapes.standard.Image();
  initialst.resize(25, 25);
  initialst.position(29,107);
  //actor1.position(103, 15);
  initialst.attr('root/title', 'joint.shapes.standard.BoarderedImage');
  initialst.attr('label/fontSize', 16);
  initialst.attr('body/strokeWidth', 2);
  initialst.attr('border/rx', 2);
  initialst.attr('image/xlinkHref', 'images/initial_state.png');
  initialst.addTo(graph);

  var finalst = new joint.shapes.standard.Image();
  finalst.resize(25, 25);
  finalst.position(445,393);
  //actor1.position(103, 15);
  finalst.attr('root/title', 'joint.shapes.standard.BoarderedImage');
  finalst.attr('label/fontSize', 16);
  finalst.attr('body/strokeWidth', 2);
  finalst.attr('border/rx', 2);
  finalst.attr('image/xlinkHref', 'images/endstate.png');
  finalst.addTo(graph);


  var state1 = new joint.shapes.standard.Rectangle();
        
  state1.position(166, 99);
  state1.resize(100, 40);
  state1.attr({
      body: {
          rx: 3, // add a corner radius
          ry: 3,
          fill: '#FFFC8C',
          strokeWidth: 2
      },
      label: {
          text: arrstate[0],
          //text:arractivity[0],
          fill: 'black',
          fontSize: 16
      }
  });
  state1.addTo(graph);

  var evnt1 = new joint.shapes.standard.Rectangle();
        
  evnt1.position(166, 136);
  evnt1.resize(100, 40);
  evnt1.attr({
      body: {
          rx: 3, // add a corner radius
          ry: 3,
          fill: '#FFFC8C',
          strokeWidth: 2
      },
      label: {
          //text: arrstate[0],
          text:arractivity[0],
          fill: 'black',
          fontSize: 16
      }
  });
  evnt1.addTo(graph);


  var state2 = new joint.shapes.standard.Rectangle();
        
  state2.position(463, 159);
  state2.resize(100, 40);
  state2.attr({
      body: {
          rx: 3, // add a corner radius
          ry: 3,
          fill: '#FFFC8C',
          strokeWidth: 2
      },
      label: {
          text: arrstate[1],
          fill: 'black',
          fontSize: 16
      }
  });
  state2.addTo(graph);

  var evnt2 = new joint.shapes.standard.Rectangle();
        
  evnt2.position(463, 196);
  evnt2.resize(100, 40);
  evnt2.attr({
      body: {
          rx: 3, // add a corner radius
          ry: 3,
          fill: '#FFFC8C',
          strokeWidth: 2
      },
      label: {
          text: arractivity[1],
          fill: 'black',
          fontSize: 16
      }
  });
  evnt2.addTo(graph);

  var state3 = new joint.shapes.standard.Rectangle();
        
  state3.position(164, 386);
  state3.resize(100, 40);
  state3.attr({
      body: {
          rx: 3, // add a corner radius
          ry: 3,
          fill: '#FFFC8C',
          strokeWidth: 2
      },
      label: {
          text: arrstate[2],
          fill: 'black',
          fontSize: 16
      }
  });
  state3.addTo(graph);

  var evnt3 = new joint.shapes.standard.Rectangle();
        
  evnt3.position(164, 422);
  evnt3.resize(100, 40);
  evnt3.attr({
      body: {
          rx: 3, // add a corner radius
          ry: 3,
          fill: '#FFFC8C',
          strokeWidth: 2
      },
      label: {
          text: arractivity[2],
          fill: 'black',
          fontSize: 16
      }
  });
  evnt3.addTo(graph);

  joint.shapes.standard.Link.define('examples.CustomLink', {
    attrs: {
        line: {
            stroke: 'black',
            strokeWidth: 2,
            targetMarker: {
                'type': 'rect',
                
            }
        }
    },
    
  });


var linkis1 = new joint.shapes.standard.Link();
linkis1.source(initialst);
linkis1.target(state1);
linkis1.addTo(graph);
linkis1.appendLabel({
          attrs: {
              text: {
                  text: arrevent[0],
                  fontSize: 16
              }
              
        }
      });
      linkis1.addTo(graph);

      

var link1 = new joint.shapes.standard.Link();
link1.source(state1);
link1.target(state2);
link1.addTo(graph);
        link1.appendLabel({
          attrs: {
              text: {
                  text: arrevent[1],
                  fontSize: 16
              }
              
        },
        position: {
          distance: 0.25
      }
      });
      link1.addTo(graph);

var link2 = new joint.shapes.standard.Link();
link2.position(164, 386);
link2.source(evnt2);
link2.target(evnt1);
link2.addTo(graph);
        link2.appendLabel({
          attrs: {
              text: {
                  text: arrevent[2],
                  fontSize: 16
              }
              
        }
      });
      link2.addTo(graph);

      var link3 = new joint.shapes.standard.Link();
      link3.source(evnt1);
      link3.target(state3);
      link3.addTo(graph);
              link3.appendLabel({
                attrs: {
                    text: {
                        text: arrevent[3],
                        fontSize: 16
                    }
                    
              }
            });
            link3.addTo(graph);


            var link4 = new joint.shapes.standard.Link();
            link4.source(evnt2);
            link4.target(state3);
            link4.addTo(graph);
                    link4.appendLabel({
                      attrs: {
                          text: {
                              text: arrevent[4],
                              fontSize: 16
                          }
                          
                    }
                  });
                  link4.addTo(graph);


      var linkfs3 = new joint.shapes.standard.Link();
      linkfs3.source(state3);
      linkfs3.target(finalst);
      linkfs3.addTo(graph);
      linkfs3.appendLabel({
          attrs: {
              text: {
                  text: arrevent[5],
                  fontSize: 16
              }
              
        }
       
      });
      linkfs3.addTo(graph);

}

  

  



  