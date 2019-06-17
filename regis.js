var k=1;
function myFun()
 {
 	var a = document.getElementById("sivuName").value;
 	if (a=="")
 	 {
 	 	document.getElementById("fv").innerHTML="Enter Name ";
 	 	return false;
 	}
 	else if (Number(a)) 
 	{
       document.getElementById("fv").innerHTML="A-Z or a-z  Numbers not allowed";
     return false;
 	}

 	else
 	{
      document.getElementById("fv").innerHTML="";
 	}



 	var b = document.getElementById("sivuAge").value;

 	if (b=="")
 	 {
 	 	document.getElementById("fv1").innerHTML="Enter Age ";
 	 	return false;
 	}
 	else
 	{
      document.getElementById("fv1").innerHTML="";
 	}



 	var c = document.querySelector(".sivuGender:checked").value;
 	// if ((document.gender1.checked==false)&&(document.gender2.checked==false)) 
 	// {
 	// 	else(document)
 	// }

 	var d = document.getElementById("sivuDOB").value;

 	if (d=="")
 	 {
 	 	document.getElementById("fv4").innerHTML="Enter DOB ";
 	 	return false;
 	}
 	else
 	{
      document.getElementById("fv4").innerHTML="";
 	}

 	var e = document.getElementsByClassName("sivuLanguage");
//  	if ((document.language1.checked==false)&&(document.language2.checked==false)&&(document.language3.checked==false) 
//  	{
// else
//  	}
 	var language="";
 	for(var i=0;i<e.length;i++)
 	{
 		if(e[i].checked)
 		{
 			language+=e[i].value+",";
 		}
 	}
 	var add=document.getElementById("sivuAddress").value;

    if (add=="")
 	 {
 	 	document.getElementById("fv5").innerHTML="Enter Valid Address ";
 	 	return false;
 	}
 	else
 	{
      document.getElementById("fv5").innerHTML="";
 	}


 	// document.getElementById("Name").innerHTML=a;
 	// document.getElementById("Age").innerHTML=b;
 	// document.getElementById("Gender").innerHTML=c;
 	// document.getElementById("dob").innerHTML=d;
 	// document.getElementById("Language").innerHTML=language;
 	// document.getElementById("Address").innerHTML=add;
 	

var tab=document.getElementById("t1");
var row=tab.insertRow(k++);

var cell1=row.insertCell(0);
var cell2=row.insertCell(1);
var cell3=row.insertCell(2);
var cell4=row.insertCell(3);
var cell5=row.insertCell(4);
var cell6=row.insertCell(5);


cell1.innerHTML=a;
cell2.innerHTML=b;
cell3.innerHTML=c;
cell4.innerHTML=d;
cell5.innerHTML=language;
cell6.innerHTML=add;

}



	
