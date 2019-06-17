// $(function () {
// 	$('#button').click(function(){
// 		var name=$('#sivuName').val();


// 	})
// 	// body...
// })
$(document).ready(function(){


function isMandatory(vals)
{
if(vals==""||vals==0)
{
 return true;
}
else
{

return false;

}
}
$("#button").bind("click",function(){

var vals="";
var nameReg = /^[A-Za-z]+$/; 
var names=$('#sivuName').val();
var ans=isMandatory(names);
if(ans==true)
 {
 	 $('#fv').text("field is empty");
 }
 else if(!(nameReg.test($("#sivuName").val())))
 {
	$('#fv').text("Enter Text value");
 }

else
{

	$('#fv').text("");
}

var ages=$('#sivuAge').val();
 ans=isMandatory(ages);
  if(ans==true)
 {
 	 $('#fv1').text("field is empty");
 }
 else if(ages<=60)
 {
 $('#fv1').text("");
 }
else
{
	$('#fv1').text("Invalid Age");
}


 var genders = $("input[class='sivuGender']:checked").length;

 ans=isMandatory(genders);
 genders = $("input[class='sivuGender']:checked").val();
  if(ans==true)
 {
 	 $('#fv2').text("field is empty");
 }
 else
 {
	$('#fv2').text("");
}



var dobs=$('#sivuDOB').val();
   
 ans=isMandatory(dobs);
  if(ans==true)
 {
 	 $('#fv4').text("field is empty");
 }
 else
 {
	$('#fv4').text("");
}
   


var language= $("input[class='sivuLanguage']:checked").length;
 ans=isMandatory(language);

 language= $("input[class='sivuLanguage']:checked").val();
   var lan="";
var l=$(".sivuLanguage");
for(var i=0;i<l.length;i++)
{
if(l[i].checked)
{
lan=lan+l[i].value+","
}
}

  if(ans==true)
 {
 	 $('#fv3').text("field is empty");
 }
else
{
	$('#fv3').text("");
}




var adds=$('#sivuAddress').val();
 ans=isMandatory(adds);
  if(ans==true)
 {
 	 $('#fv5').text("field is empty");
 }

else
{
	$('#fv5').text("");
}


// localStorage.setItem("name",names);
// localStorage.setItem("Age",ages);
// localStorage.setItem("Gender",genders);
// localStorage.setItem("Dobs",dobs);
// localStorage.setItem("Language",lan);
// localStorage.setItem("add",adds);

if(names!=""&&ages!=""&&genders!=""&&dobs!=""&&lan!=""&&adds)
{ 

        
            var language="";
    var lang=$(".lang");
for(var i=0;i<lang.length;i++)
{
if(lang[i].checked) 
{
language+=lang[i].value+",";
}
}



// var f1=$('#name').val();
// var f2=$('#age').val();
// var f3=$('#gender').val();
// var f4=$('#dob').val();
// var f5=$('.lang').val();

// var f6=$('#add').val();

// var actions="<button>Edit</button><button>Delete</button>"
            var url = "table.html?"  +encodeURIComponent(names)+" "+ encodeURIComponent(ages)+ " "+encodeURIComponent(genders) + " "+ encodeURIComponent(dobs)+" "+  encodeURIComponent(lan)+" "+ encodeURIComponent(adds);
            window.location.href = url;
        

}

});
});
