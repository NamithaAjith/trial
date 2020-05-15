  var sn =document.querySelector("#sec1");
  var nam =document.querySelector("#sec2");
  var quty =document.querySelector("#sec3");
  var dept =document.querySelector("#sec4");
  var ut =document.querySelector("#sec5");
  var nts =document.querySelector("#sec6");
  

  function groceryitems(){
      sn.innerHTML = "Sl.No";
      nam.innerHTML = "Item";
      quty.innerHTML = "Quantity";
      dept.innerHTML = "Department";
      ut.innerHTML = "Unit";
      nts.innerHTML = "Note";

      // Creating an XHR Object
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function(){
  
      if(this.readyState==4&&this.status==200){
      var get = JSON.parse(this.responseText);
//         //   console.log(get);
      var print = get.grocerylist;
//         //   console.log(print);
        document.getElementById("sl").innerHTML = "";
        document.getElementById("itm").innerHTML = "";
        document.getElementById("qty").innerHTML = "";
        document.getElementById("dpt").innerHTML = "";
        document.getElementById("unit").innerHTML = "";
        document.getElementById("np").innerHTML = "";

        for(i=0; i<print.length;i++){

          document.getElementById("sl").innerHTML  += +print[i].SlNo +"</br>";
          document.getElementById("itm").innerHTML +=  print[i].item + "</br>";
          document.getElementById("qty").innerHTML += print[i].quantity +  "</br>";
          document.getElementById("dpt").innerHTML += print[i].department +  "</br>";
          document.getElementById("unit").innerHTML+= print[i].unit + "</br>";
          document.getElementById("np").innerHTML  += print[i].notes + "</br>";  

        }
        var hd = document.querySelector("#heading");
        var cnt =document.querySelector("#content");

        hd.style.backgroundColor = "burlywood";
        sl.style.backgroundColor = "lightgray";
        itm.style.backgroundColor= "darkgray";
        qty.style.backgroundColor = "lightgray";
        dpt.style.backgroundColor= "darkgray";
        unit.style.backgroundColor = "lightgray";
        np.style.backgroundColor= "darkgray";
      }     
      }  
       
    xhttp.open("GET", "grocery.json", true);
    xhttp.send();
}
  




































// function groceryitems(){


//     // Creating an XHR Object
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function(){
  
//       if(this.readyState==4&&this.status==200){
//           var get = JSON.parse(this.responseText);
//         //   console.log(get);
//           var print = get.grocerylist;
//         //   console.log(print);
        
//         var table = document.getElementById("data");
//         var row = table.insertRow();
//         var cell1 = row.insertRow(0);
//         var cell2 = row.insertRow(1);
//         var cell3= row.insertCell(2);
//         var cell4 = row.insertCell(3);
//         var cell5= row.insertCell(4);
//         var cell6 = row.insertCell(5);
//         var cell11 = row.insertCell();
//         var cell12 = row.insertCell(1);
//         // function createTable(){
//         //   rn = window.prompt("Input number of rows", 1);
//         //   cn = window.prompt("Input number of columns",1);
          
//         //   for(var r=0;r<parseInt(15);r++){
//         //   var x=document.getElementById('myTable').insertRow(r);
//         //   for(var c=0;c<parseInt(6);c++)  
//         //       {
//         //       var y=  x.insertCell(c);
//         //       y.innerHTML="Row-"+r+" Column-"+c; 
//         //       }
//         //   }
//         //   }
  
//         var con = "";
//         var sub1 = "";
//         var sub2 = "";

//         var i= "";
//         var j = "";
       
//         for (i in print) {
//           con += "<h2>" +print[i].Sl.No+ "</h2>";
//         for (j in print[i].item) {
//             sub1 += print[i].item[j] + "<br>";
//           }
//         for (j in print[i].item) {
//             sub += print[i].item[j] + "<br>";
//           }
//         }
//         cell1.innerHTML = con; 
//         cell2.innerHTML = sub;
        
//       }     
//     }   
//   xhttp.open("GET", "grocery.json", true);
//   xhttp.send();
//   }
  