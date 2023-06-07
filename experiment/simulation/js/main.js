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
var i = 0;
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



    document.getElementById("summary" + i).value = summaryinp;
    i = i + 1;
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
  //var ao = document.getElementById("ao").value;

  var eo2 = document.getElementById("eo2").value;
  //document.getElementById("ao2").value =ao2 ;

  var eo3 = document.getElementById("eo3").value;
  //var ao3 = document.getElementById("ao3").value;

  var eo4 = document.getElementById("eo4").value;
  //var ao4 = document.getElementById("ao4").value;

  var eo5 = document.getElementById("eo5").value;
  //var ao5 = document.getElementById("ao5").value;

  document.getElementById("ftbl5").style.display = "block";
  /*var summary2 = document.getElementById("summary2").value;
  var summary3 = document.getElementById("summary3").value;
  var summary4 = document.getElementById("summary4").value;
  var summary5 = document.getElementById("summary5").value;*/














  /********************************************************** Check for empty scripts *********************************************************/
  var script2 = document.getElementById("script2").value;
  var script3 = document.getElementById("script3").value;
  var script4 = document.getElementById("script4").value;
  var script5 = document.getElementById("script5").value;

  var rowsc;
  if (((script2 == "") && (script3 == "") && (script4 == "") && (script5 == ""))) { //((summary2 == "") && (summary3 == "") && (summary4 == "") && (summary5 == ""))||
    var a = document.getElementById("table4").rows;

    rowsc = a.length - 5;
    document.getElementById("status2").innerHTML = "No Run";
    document.getElementById("status3").innerHTML = "No Run";
    document.getElementById("status4").innerHTML = "No Run";
    document.getElementById("status5").innerHTML = "No Run";


    //alert("Number of Rows are: " + rowsc);
  }

  else if ((script3 == "") && (script4 == "") && (script5 == "")) {
    var a = document.getElementById("table4").rows;
    rowsc = a.length - 4;
    document.getElementById("status3").innerHTML = "No Run";
    document.getElementById("status4").innerHTML = "No Run";
    document.getElementById("status5").innerHTML = "No Run";

    // alert("Number of Rows are: " + rowsc);
  }

  else if ((script4 == "") && (script5 == "")) {
    var a = document.getElementById("table4").rows;
    rowsc = a.length - 3;
    document.getElementById("status4").innerHTML = "No Run";
    document.getElementById("status5").innerHTML = "No Run";

    //alert("Number of Rows are: " + rowsc);
  }
  else if ((script5 == "")) {
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



  /************************************* Matching 1st Test Suite (Sum) ******************************************************************/
  var checkbox = document.getElementById("yes");
  if (checkbox.checked == true) {
    /********************************************************** Script 1 (Sum)*********************************************************/
    var scripta = document.getElementById("script").value;

    var ao = 12 + 34;
    console.log(ao);
    document.getElementById("ao").value = ao;



    if ((eo == ao)) {
      var pass = 0 + 1;
      var fail = 0;
      var statusa = document.getElementById("status1").value;
      document.getElementById("optd1").value = pass;
      document.getElementById("optd2").value = fail;
      document.getElementById("optd3").value = rowsc;
      document.getElementById("optd4").value = "Passed";
      document.getElementById("status1").value = statusa;
      document.getElementById("status1").style.backgroundColor = "#A2FF55";
      document.getElementById("colorchng").style.backgroundColor = "#BEFF99";

    }
    else if ((eo != ao)) {
      var pass = 0;
      var fail = 0 + 1;
      document.getElementById("optd1").value = pass;
      document.getElementById("optd2").value = fail;
      document.getElementById("optd3").value = rowsc;
      document.getElementById("optd4").value = "Failed";
      document.getElementById("status1").value = statusa;
      document.getElementById("status1").style.backgroundColor = "#FCDC25";
      document.getElementById("colorchng").style.backgroundColor = "#FFBD99";

    }


    else {

      document.getElementById("status1").value = "No Run"
    }
  }

  else {
    /********************************************************** Script 1 (Sum)*********************************************************/
    var scripta = document.getElementById("script").value;

    var ao = 12 + 34;
    console.log(ao);
    document.getElementById("ao").value = ao;


    if ((eo == ao)) {
      var pass = 0 + 1;
      var fail = 0;

      document.getElementById("optd1").value = pass;
      document.getElementById("optd2").value = fail;
      document.getElementById("optd3").value = rowsc;
      document.getElementById("optd4").value = "Passed";
      document.getElementById("status1").value = "Pass";
      document.getElementById("status1").style.backgroundColor = "#A2FF55";
      document.getElementById("colorchng").style.backgroundColor = "#BEFF99";

    }
    else if ((eo != ao)) {
      var pass = 0;
      var fail = 0 + 1;
      document.getElementById("optd1").value = pass;
      document.getElementById("optd2").value = fail;
      document.getElementById("optd3").value = rowsc;
      document.getElementById("optd4").value = "Failed";
      document.getElementById("status1").value = "Fail";
      document.getElementById("status1").style.backgroundColor = "#FCDC25";
      document.getElementById("colorchng").style.backgroundColor = "#FFBD99";

    }


    else {

      document.getElementById("status1").value = "No Run"
    }
  }

  /************************************* Matching 2nd Test Suite  (Square) **************************************************************/
  var checkbox2 = document.getElementById("yes2");
  if (checkbox2.checked == true) {
    /********************************************************** Script 2 (Square)*********************************************************/
    var scriptb = document.getElementById("script2").value;
    //alert(scriptb);
    if (scriptb == " ") {
      document.getElementById("ao2").value = "";

    }

    else {
      let result = scriptb.replace(/[^0-9]/g, " ");
      //alert(result);
      //var arrresult=[];
      //arrresult.push(result);
      //console.log(arrresult);

      var ao2 = result * result;
      document.getElementById("ao2").value = ao2;
    }
    //alert(ao2);

    if ((eo2 == "") && (ao2 == "")) {

      document.getElementById("status2").innerHTML = "No Run"


    }

    else if ((eo2 == ao2)) {
      var pass = pass + 1;
      var fail = fail;
      var statusb = document.getElementById("status2").value;
      document.getElementById("optd1").value = pass;
      document.getElementById("optd2").value = fail;
      document.getElementById("optd3").value = rowsc;
      document.getElementById("optd4").value = "Passed";
      document.getElementById("status2").value = statusb;
      document.getElementById("status2").style.backgroundColor = "#A2FF55";
      document.getElementById("colorchng").style.backgroundColor = "#BEFF99";

    }



    else {
      var pass = pass;
      var fail = fail + 1;
      var statusb = document.getElementById("status2").value;
      document.getElementById("optd1").value = pass;
      document.getElementById("optd2").value = fail;
      document.getElementById("optd3").value = rowsc;
      document.getElementById("optd4").value = "Failed";
      document.getElementById("status2").value = statusb;
      document.getElementById("status2").style.backgroundColor = "#FCDC25";
      document.getElementById("colorchng").style.backgroundColor = "#FFBD99";

    }
  }
  else {

    /********************************************************** Script 2 (Square)*********************************************************/
    var scriptb = document.getElementById("script2").value;
    //alert(scriptb);
    if (scriptb == "") {
      document.getElementById("ao2").value = "";

    }
    else {
      let result = scriptb.replace(/[^0-9]/g, " ");
      //alert(result);
      //var arrresult=[];
      //arrresult.push(result);
      //console.log(arrresult);

      var ao2 = result * result;
      document.getElementById("ao2").value = ao2;

      //alert(ao2);
      if ((eo2 == "") && (ao2 == "")) {

        document.getElementById("status2").value = "No Run"


      }

      else if ((eo2 == ao2)) {
        var pass = pass + 1;
        var fail = fail;
        document.getElementById("optd1").value = pass;
        document.getElementById("optd2").value = fail;
        document.getElementById("optd3").value = rowsc;
        document.getElementById("optd4").value = "Passed";
        document.getElementById("status2").value = "Pass";
        document.getElementById("status2").style.backgroundColor = "#A2FF55";
        document.getElementById("colorchng").style.backgroundColor = "#BEFF99";

      }



      else {
        var pass = pass;
        var fail = fail + 1;
        document.getElementById("optd1").value = pass;
        document.getElementById("optd2").value = fail;
        document.getElementById("optd3").value = rowsc;
        document.getElementById("optd4").value = "Failed";
        document.getElementById("status2").value = "Fail"
        document.getElementById("status2").style.backgroundColor = "#FCDC25";
        document.getElementById("colorchng").style.backgroundColor = "#FFBD99";

      }
    }
  }

  /************************************* Matching 3rd Test Suite (Rectangle) **********************************************************/

  var checkbox3 = document.getElementById("yes3");
  if (checkbox3.checked == true) {
    /********************************************************** Script 3 (Rect)*********************************************************/
    var scriptc = document.getElementById("script3").value;
    if (scriptc == "") {
      document.getElementById("ao3").value = "";

    }
    else {
      //alert(scriptc);
      let result3 = scriptc.replace(/[^0-9]/g, " ");
      var resultrect = result3.replace(/^\s+|\s+$/gm, '');
      var stringArray = resultrect.split(" "); ///(\s+)/

      var ao3 = stringArray[0] * stringArray[1];
      document.getElementById("ao3").value = ao3;
      //alert(ao2);
      var statusc;
      if ((eo3 == "") && (ao3 == "")) {

        document.getElementById("status3").value = "No Run"


      }

      else if ((eo3 == ao3)) {
        var pass = pass + 1;
        var fail = fail;
        statusc  = document.getElementById("status3").value;
        document.getElementById("optd1").value = pass;
        document.getElementById("optd2").value = fail;
        document.getElementById("optd3").value = rowsc;
        document.getElementById("optd4").value = "Passed";
        document.getElementById("status3").value = statusc;
        document.getElementById("status3").style.backgroundColor = "#A2FF55";
        document.getElementById("colorchng").style.backgroundColor = "#BEFF99";

      }
      else {
        var pass = pass;
        var fail = fail + 1;
        statusc  = document.getElementById("status3").value;
        document.getElementById("optd1").value = pass;
        document.getElementById("optd2").value = fail;
        document.getElementById("optd3").value = rowsc;
        document.getElementById("optd4").value = "Failed";
        document.getElementById("status3").value = statusc;
        document.getElementById("status3").style.backgroundColor = "#FCDC25";
        document.getElementById("colorchng").style.backgroundColor = "#FFBD99";



      }
    }
  }
  else {

    /********************************************************** Script 3 (Rect)*********************************************************/
    var scriptc = document.getElementById("script3").value;
    if (scriptc == "") {
      document.getElementById("ao3").value = "";

    }
    else {
      //alert(scriptc);
      let result3 = scriptc.replace(/[^0-9]/g, " ");
      var resultrect = result3.replace(/^\s+|\s+$/gm, '');
      var stringArray = resultrect.split(" "); ///(\s+)/

      var ao3 = stringArray[0] * stringArray[1];
      document.getElementById("ao3").value = ao3;



      if ((eo3 == "") && (ao3 == "")) {

        document.getElementById("status3").value = "No Run"


      }

      else if ((eo3 == ao3)) {
        var pass = pass + 1;
        var fail = fail;
        document.getElementById("optd1").value = pass;
        document.getElementById("optd2").value = fail;
        document.getElementById("optd3").value = rowsc;
        document.getElementById("optd4").value = "Passed";
        document.getElementById("status3").value = "Pass";
        document.getElementById("status3").style.backgroundColor = "#A2FF55";
        document.getElementById("colorchng").style.backgroundColor = "#BEFF99";

      }
      else {
        var pass = pass;
        var fail = fail + 1;
        document.getElementById("optd1").value = pass;
        document.getElementById("optd2").value = fail;
        document.getElementById("optd3").value = rowsc;
        document.getElementById("optd4").value = "Failed";
        document.getElementById("status3").value = "Fail"
        document.getElementById("status3").style.backgroundColor = "#FCDC25";
        document.getElementById("colorchng").style.backgroundColor = "#FFBD99";

      }

    }

  }
  /************************************* Matching 4th Test Suite (Circle)*****************************************************/
  var checkbox4 = document.getElementById("yes4");
  if (checkbox4.checked == true) {

    /********************************************************** Script 4 (Circle)*********************************************************/
    var scriptd = document.getElementById("script4").value;
    if (scriptd == "") {
      document.getElementById("ao4").value = "";

    }
    else {
      //alert(scriptd);
      let result4 = scriptd.replace(/[^0-9]/g, " ");
      //result3.split(" ");
      //alert(result4);

      var ao4 = Math.round(Math.PI * result4 * result4);
      document.getElementById("ao4").value = ao4;
      if ((eo4 == "") && (ao4 == "")) {

        document.getElementById("status4").value = "No Run"


      }

      else if ((eo4 == ao4)) {
        var pass = pass + 1;
        var fail = fail;
        var statusd = document.getElementById("status4").value;
        document.getElementById("optd1").value = pass;
        document.getElementById("optd2").value = fail;
        document.getElementById("optd3").value = rowsc;
        document.getElementById("optd4").value = "Passed";
        document.getElementById("status4").value = statusd;
        document.getElementById("status4").style.backgroundColor = "#A2FF55";
        document.getElementById("colorchng").style.backgroundColor = "#BEFF99";

      }
      else {
        var pass = pass;
        var fail = fail + 1;
        var statusd = document.getElementById("status4").value;
        document.getElementById("optd1").value = pass;
        document.getElementById("optd2").value = fail;
        document.getElementById("optd3").value = rowsc;
        document.getElementById("optd4").value = "Failed";
        document.getElementById("status4").value = statusd;
        document.getElementById("status4").style.backgroundColor = "#FCDC25";
        document.getElementById("colorchng").style.backgroundColor = "#FFBD99";


      }
    }

  }
  else {
    /********************************************************** Script 4 (Circle)*********************************************************/
    var scriptd = document.getElementById("script4").value;
    //alert(scriptd);
    if (scriptd == "") {
      document.getElementById("ao4").value = "";

    }
    else {
      let result4 = scriptd.replace(/[^0-9]/g, " ");
      //result3.split(" ");
      //alert(result4);

      var ao4 = Math.round(Math.PI * result4 * result4);
      document.getElementById("ao4").value = ao4;
      if ((eo4 == "") && (ao4 == "")) {

        document.getElementById("status4").value = "No Run"


      }

      else if ((eo4 == ao4)) {
        var pass = pass + 1;
        var fail = fail;

        document.getElementById("optd1").value = pass;
        document.getElementById("optd2").value = fail;
        document.getElementById("optd3").value = rowsc;
        document.getElementById("optd4").value = "Passed";
        document.getElementById("status4").value = "Pass";
        document.getElementById("status4").style.backgroundColor = "#A2FF55";
        document.getElementById("colorchng").style.backgroundColor = "#BEFF99";

      }
      else {
        var pass = pass;
        var fail = fail + 1;
        document.getElementById("optd1").value = pass;
        document.getElementById("optd2").value = fail;
        document.getElementById("optd3").value = rowsc;
        document.getElementById("optd4").value = "Failed";
        document.getElementById("status4").value = "Fail"
        document.getElementById("status4").style.backgroundColor = "#FCDC25";
        document.getElementById("colorchng").style.backgroundColor = "#FFBD99";

      }

    }

  }

  /************************************* Matching 5th Test Suite (Right Triangle) ****************************************************/

  var checkbox5 = document.getElementById("yes5");
  if (checkbox5.checked == true) {
    /********************************************************** Script 5 (Right_triangle)*********************************************************/
    var scripte = document.getElementById("script5").value;
    if (scripte == "") {
      document.getElementById("ao5").value = "";

    }
    else {
      //alert(scripte);
      let result5 = scripte.replace(/[^0-9]/g, " ");
      var resultrtri = result5.replace(/^\s+|\s+$/gm, '');
      var stringArray5 = resultrtri.split(" ");
      //result3.split(" ");
      //alert(result5);


      var ao5 = (0.5 * stringArray5[0] * stringArray5[1]).toFixed(1);
      document.getElementById("ao5").value = ao5;
      if ((eo5 == "") && (ao5 == "")) {

        document.getElementById("status5").value = "No Run"


      }

      else if ((eo5 == ao5)) {
        var pass = pass + 1;
        var fail = fail;
        var statuse = document.getElementById("status5").value;
        document.getElementById("optd1").value = pass;
        document.getElementById("optd2").value = fail;
        document.getElementById("optd3").value = rowsc;
        document.getElementById("optd4").value = "Passed";
        document.getElementById("status5").value = statuse;
        document.getElementById("status5").style.backgroundColor = "#A2FF55";
        document.getElementById("colorchng").style.backgroundColor = "#BEFF99";

      }

      else {
        var pass = pass;
        var fail = fail + 1;
        var statuse = document.getElementById("status5").value;
        document.getElementById("optd1").value = pass;
        document.getElementById("optd2").value = fail;
        document.getElementById("optd3").value = rowsc;
        document.getElementById("optd4").value = "Failed";
        document.getElementById("status5").value = statuse;
        document.getElementById("status5").style.backgroundColor = "#FCDC25";
        document.getElementById("colorchng").style.backgroundColor = "#FFBD99";

      }
    }
  }
  else {
    /********************************************************** Script 5 (Right_triangle)*********************************************************/
    var scripte = document.getElementById("script5").value;
    //alert(scripte);
    if (scripte == "") {
      document.getElementById("ao5").value = "";

    }
    else {
      let result5 = scripte.replace(/[^0-9]/g, " ");
      var resultrtri = result5.replace(/^\s+|\s+$/gm, '');
      var stringArray5 = resultrtri.split(" ");
      //result3.split(" ");
      //alert(result5);


      var ao5 = (0.5 * stringArray5[0] * stringArray5[1]).toFixed(1);
      document.getElementById("ao5").value = ao5;
      if ((eo5 == "") && (ao5 == "")) {

        document.getElementById("status5").value = "No Run"


      }

      else if ((eo5 == ao5)) {
        var pass = pass + 1;
        var fail = fail;
        document.getElementById("optd1").value = pass;
        document.getElementById("optd2").value = fail;
        document.getElementById("optd3").value = rowsc;
        document.getElementById("optd4").value = "Passed";
        document.getElementById("status5").value = "Pass";
        document.getElementById("status5").style.backgroundColor = "#A2FF55";
        document.getElementById("colorchng").style.backgroundColor = "#BEFF99";

      }

      else {
        var pass = pass;
        var fail = fail + 1;
        document.getElementById("optd1").value = pass;
        document.getElementById("optd2").value = fail;
        document.getElementById("optd3").value = rowsc;
        document.getElementById("optd4").value = "Failed";
        document.getElementById("status5").value = "Fail"
        document.getElementById("status5").style.backgroundColor = "#FCDC25";
        document.getElementById("colorchng").style.backgroundColor = "#FFBD99";


      }
    }
  }

}



function handleChange(checkbox) {
  if (checkbox.checked == true) {

    document.getElementById("status1").readOnly = false;
    document.getElementById('status1').focus();
    document.getElementById("status1").style.border = "1px solid #6B6EFF ";

  } else {
    document.getElementById("status1").readOnly = true;
    document.getElementById("status1").style.border = "0px solid  ";

  }
}

function handleChange2(checkbox) {
  if (checkbox.checked == true) {

    document.getElementById("status2").readOnly = false;
    document.getElementById('status2').focus();
    document.getElementById("status2").style.border = "1px solid #6B6EFF ";

  } else {
    document.getElementById("status2").readOnly = true;
    document.getElementById("status2").style.border = "0px solid  ";

  }
}

function handleChange3(checkbox) {
  if (checkbox.checked == true) {

    document.getElementById("status3").readOnly = false;
    document.getElementById('status3').focus();
    document.getElementById("status3").style.border = "1px solid #6B6EFF ";

  } else {
    document.getElementById("status3").readOnly = true;
    document.getElementById("status3").style.border = "0px solid  ";

  }
}

function handleChange4(checkbox) {
  if (checkbox.checked == true) {

    document.getElementById("status4").readOnly = false;
    document.getElementById('status4').focus();
    document.getElementById("status4").style.border = "1px solid #6B6EFF ";

  } else {
    document.getElementById("status4").readOnly = true;
    document.getElementById("status4").style.border = "0px solid  ";

  }
}

function handleChange5(checkbox) {
  if (checkbox.checked == true) {

    document.getElementById("status5").readOnly = false;
    document.getElementById('status5').focus();
    document.getElementById("status5").style.border = "1px solid #6B6EFF ";

  } else {
    document.getElementById("status5").readOnly = true;
    document.getElementById("status5").style.border = "0px solid  ";

  }
} 