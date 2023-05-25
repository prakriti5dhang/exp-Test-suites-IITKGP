/*Redeveloped
Lab: Software Engineering
Exp: Designing Test Suites
File Name: main.js
Author: Prakriti Dhang*/

/* Exercise number choice */
var ex = document.getElementById("selectex");
function subex() {

  if (ex.options[ex.selectedIndex].value == 0) {
    document.getElementById("exercise1").style.display = "none";
    document.getElementById("ex1").style.display = "none";
    document.getElementById("para1").style.display = "none";
    document.getElementById("dispres").style.display = "none";
    document.getElementById("show_result1").style.display = "none";
    document.getElementById("dispviewbtn").disabled = true;
    document.getElementById("viewsol").disabled = true;

  }
  if (ex.options[ex.selectedIndex].value == 1) {
    document.getElementById("exercise1").style.display = "block";
    document.getElementById("ex1").style.display = "block";
    document.getElementById("para1").style.display = "block";
    document.getElementById("dispres").style.display = "none";
    document.getElementById("show_result1").style.display = "none";
    document.getElementById("dispviewbtn").disabled = false;
    document.getElementById("viewsol").disabled = true;

  }



}
/* Submit button to directly view the solution*/

function viewsolutionb() { //submit button
  document.getElementById("dispres").style.display = "block";
  document.getElementById("show_result1").style.display = "none";
  document.getElementById("viewsol").disabled = false;
  document.getElementById("dispviewbtn").disabled = true;
 
    window.scrollBy(0, 1800);


}

function solview() {  //view solution button
  if (ex.options[ex.selectedIndex].value == 1) {
    document.getElementById("show_result1").style.display = "block";
   
    document.getElementById("viewsol").disabled = true;

  }
  
}


function chngfontsz(selectTag) {
  var listValue = selectTag.options[selectTag.selectedIndex].text;
  document.getElementById("inp1").style.fontSize = listValue;
}



function addbtn1() {

  document.getElementById("ftbl2").style.display = "block";
}




let idno = 0;
function addbtn2() {

  var titleinp = document.getElementById("inp2").value;
  var summaryinp = document.getElementById("inp3").value;

  //document.getElementById("tstitle").value = titleinp;
  // document.getElementById("tssummary").value = summaryinp;


  var tsidn = "TS" + idno;
 
  //document.getElementById("tsid").value= "TS"+idno;

  if (titleinp == "") {
    alert(" Title Cannot be blank");
  }
  else if (summaryinp == "") {
    alert(" Summary Cannot be blank");
  }

  else {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");


    let tdv1 = document.createTextNode(tsidn);
    idno = idno + 1;
    let tdv2 = document.createTextNode(titleinp);
    let tdv3 = document.createTextNode(summaryinp);

    var newIconbtn = document.createElement("btn");
    newIconbtn.setAttribute("type", "button");
    newIconbtn.setAttribute("class", "btn btn-danger");
    newIconbtn.setAttribute("onclick", "removerowtr(this)");
    newIconbtn.setAttribute("style", "cursor:pointer;");

    var newIconbtni = document.createElement("i");
    newIconbtni.setAttribute("class", "bi bi-dash-circle");
    newIconbtn.appendChild(newIconbtni);


    td1.appendChild(tdv1);
    td2.appendChild(tdv2);
    td3.appendChild(tdv3);
    td4.appendChild(newIconbtn);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    document.getElementById('tbodyt3').appendChild(tr);
    document.getElementById("ftbl3").style.display = "block";
    document.getElementById("inp2").value = "";
    document.getElementById("inp3").value = "";
  }
}


/********************************************* Function for removing table row **************************************************/
function removerowtr(btndel) {
  if (typeof (btndel) == "object") {
    $(btndel).closest("tr").remove();

  }


  else {
    return false;
  }
}

function addbtn3() {
  document.getElementById("inp2").value = "";
  document.getElementById("inp3").value = "";
}


function addbtn4() {
  document.getElementById("ftbl4").style.display = "block";
}


function exbtex1() {

  var eo = document.getElementById("eo").value;
  var ao = document.getElementById("ao").value;

  var eo2 = document.getElementById("eo2").value;
  var ao2 = document.getElementById("ao2").value;

  var eo3 = document.getElementById("eo3").value;
  var ao3 = document.getElementById("ao3").value;

  var eo4 = document.getElementById("eo4").value;
  var ao4 = document.getElementById("ao4").value;

  var eo5 = document.getElementById("eo5").value;
  var ao5 = document.getElementById("ao5").value;

  document.getElementById("ftbl5").style.display = "block";
  var summary2 = document.getElementById("summary2").value;
  var summary3 = document.getElementById("summary3").value;
  var summary4 = document.getElementById("summary4").value;
  var summary5 = document.getElementById("summary5").value;

  var rowsc;
  if ((summary2 == "") && (summary3 == "") && (summary4 == "") && (summary5 == "")) {
    var a = document.getElementById("table4").rows;

    rowsc = a.length - 5;
    document.getElementById("status2").innerHTML = "No Run";
    document.getElementById("status3").innerHTML = "No Run";
    document.getElementById("status4").innerHTML = "No Run";
    document.getElementById("status5").innerHTML = "No Run";

    //alert("Number of Rows are: " + rowsc);
  }

  else if ((summary3 == "") && (summary4 == "") && (summary5 == "")) {
    var a = document.getElementById("table4").rows;
    rowsc = a.length - 4;
    document.getElementById("status3").innerHTML = "No Run";
    document.getElementById("status4").innerHTML = "No Run";
    document.getElementById("status5").innerHTML = "No Run";

    // alert("Number of Rows are: " + rowsc);
  }

  else if ((summary4 == "") && (summary5 == "")) {
    var a = document.getElementById("table4").rows;
    rowsc = a.length - 3;
    document.getElementById("status4").innerHTML = "No Run";
    document.getElementById("status5").innerHTML = "No Run";

    //alert("Number of Rows are: " + rowsc);
  }
  else if ((summary5 == "")) {
    var a = document.getElementById("table4").rows;
    rowsc = a.length - 2;
    document.getElementById("status5").innerHTML = "No Run";

    // alert("Number of Rows are: " + rowsc);

  }

  else {
    var a = document.getElementById("table4").rows;
    rowsc = a.length - 1;
    // alert("Number of Rows are: " + rowsc);
  }

  

  /************************************* Matching 1st Test Suite ************************************/
  if ((eo == ao)) {
    var pass= 0+1;
    var fail =0;
    document.getElementById("optd1").value = pass;
    document.getElementById("optd2").value = fail;
    document.getElementById("optd3").value = rowsc;
    document.getElementById("optd4").value = "Passed";
    document.getElementById("status1").innerHTML = "Pass";
    document.getElementById("status1").style.backgroundColor = "#A2FF55";
    document.getElementById("colorchng").style.backgroundColor = "#BEFF99";

  }
  else if ((eo != ao)) {
    var pass= 0;
    var fail =0+1;
    document.getElementById("optd1").value = pass;
    document.getElementById("optd2").value = fail;
    document.getElementById("optd3").value = rowsc;
    document.getElementById("optd4").value = "Failed";
    document.getElementById("status1").innerHTML = "Fail"
    document.getElementById("status1").style.backgroundColor = "#FCDC25";
    document.getElementById("colorchng").style.backgroundColor = "#FFBD99";

  }

  else {

    document.getElementById("status1").innerHTML = "No Run"
  }

  /************************************* Matching 2nd Test Suite ************************************/
  if ((eo2 == "") && (ao2 == "")) {

    document.getElementById("status2").innerHTML = "No Run"


  }

  else if ((eo2 == ao2)) {
    var pass= pass+1;
    var fail= fail;
    document.getElementById("optd1").value = pass;
    document.getElementById("optd2").value = fail;
    document.getElementById("optd3").value = rowsc;
    document.getElementById("optd4").value = "Passed";
    document.getElementById("status2").innerHTML = "Pass";
    document.getElementById("status2").style.backgroundColor = "#A2FF55";
    document.getElementById("colorchng").style.backgroundColor = "#BEFF99";

  }



  else {
    var pass= pass;
    var fail =fail+1;
    document.getElementById("optd1").value = pass;
    document.getElementById("optd2").value = fail;
    document.getElementById("optd3").value = rowsc;
    document.getElementById("optd4").value = "Failed";
    document.getElementById("status2").innerHTML = "Fail"
    document.getElementById("status2").style.backgroundColor = "#FCDC25";
    document.getElementById("colorchng").style.backgroundColor = "#FFBD99";

  }

  /************************************* Matching 3rd Test Suite ************************************/
  if ((eo3 == "") && (ao3 == "")) {

    document.getElementById("status3").innerHTML = "No Run"


  }

  else if ((eo3 == ao3)) {
    var pass= pass+1;
    var fail= fail;
    document.getElementById("optd1").value = pass;
    document.getElementById("optd2").value = fail;
    document.getElementById("optd3").value = rowsc;
    document.getElementById("optd4").value = "Passed";
    document.getElementById("status3").innerHTML = "Pass";
    document.getElementById("status3").style.backgroundColor = "#A2FF55";
    document.getElementById("colorchng").style.backgroundColor = "#BEFF99";

  }
  else {
    var pass= pass;
    var fail =fail+1;
    document.getElementById("optd1").value = pass;
    document.getElementById("optd2").value = fail;
    document.getElementById("optd3").value = rowsc;
    document.getElementById("optd4").value = "Failed";
    document.getElementById("status3").innerHTML = "Fail"
    document.getElementById("status3").style.backgroundColor = "#FCDC25";
    document.getElementById("colorchng").style.backgroundColor = "#FFBD99";



  }
  /************************************* Matching 4th Test Suite ************************************/
  if ((eo4 == "") && (ao4 == "")) {

    document.getElementById("status4").innerHTML = "No Run"


  }

  else if ((eo4 == ao4)) {
    var pass= pass+1;
    var fail= fail;
    document.getElementById("optd1").value = pass;
    document.getElementById("optd2").value = fail;
    document.getElementById("optd3").value = rowsc;
    document.getElementById("optd4").value = "Passed";
    document.getElementById("status4").innerHTML = "Pass";
    document.getElementById("status4").style.backgroundColor = "#A2FF55";
    document.getElementById("colorchng").style.backgroundColor = "#BEFF99";

  }
  else {
    var pass= pass;
    var fail =fail+1;
    document.getElementById("optd1").value = pass;
    document.getElementById("optd2").value = fail;
    document.getElementById("optd3").value = rowsc;
    document.getElementById("optd4").value = "Failed";
    document.getElementById("status4").innerHTML = "Fail"
    document.getElementById("status4").style.backgroundColor = "#FCDC25";
    document.getElementById("colorchng").style.backgroundColor = "#FFBD99";



  }



  /************************************* Matching 5th Test Suite ************************************/
  if ((eo5 == "") && (ao5 == "")) {

    document.getElementById("status5").innerHTML = "No Run"


  }

  else if ((eo5 == ao5)) {
    var pass= pass+1;
    var fail= fail;
    document.getElementById("optd1").value = pass;
    document.getElementById("optd2").value = fail;
    document.getElementById("optd3").value = rowsc;
    document.getElementById("optd4").value = "Passed";
    document.getElementById("status5").innerHTML = "Pass";
    document.getElementById("status5").style.backgroundColor = "#A2FF55";
    document.getElementById("colorchng").style.backgroundColor = "#BEFF99";

  }

  else {
    var pass= pass;
    var fail =fail+1;
    document.getElementById("optd1").value = pass;
    document.getElementById("optd2").value = fail;
    document.getElementById("optd3").value = rowsc;
    document.getElementById("optd4").value = "Failed";
    document.getElementById("status5").innerHTML = "Fail"
    document.getElementById("status5").style.backgroundColor = "#FCDC25";
    document.getElementById("colorchng").style.backgroundColor = "#FFBD99";



  }

}




