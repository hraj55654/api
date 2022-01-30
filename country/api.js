
var container = document.getElementById("container");
var table = document.getElementById("table");
var ul = document.getElementById("ul");

// th1.innerText = "symbol";
// th2.innerText = "price";
// th3.innerText = "count";



var newURL = "http://universities.hipolabs.com/search?country=india";
// fetch(newURL).then(something =>something.json())
// .then(resp =>console.log(resp));

// line 8 or 9 and line 12 to 20 both code are same
fetch(newURL)
  .then((response) => {
    console.log("inside first then");
    return response.json();
  })
  .then((data) => {
    console.log("inside second then");
    console.log(data);
    for(i in data){
        var li = document.createElement("li");
        var div1 = document.createElement("div");
        // var div2 = document.createElement("div");
        div1.innerText = data[i].name;
        // div2.innerText = data[i]["state-province"];
      //   //   div2.innerText = data[i].state-province;
        li.appendChild(div1);
        // li.appendChild(div2);
        ul.appendChild(li);
        


        // element.innerHTML = data[i].name;
        // container.appendChild(element);
    }
  }) 
  .catch((err) => console.log("api has failed"));


  
 function myFunction(){
  var input, filter, ul, li, div, i, txtValue;
   
  var input = document.getElementById("mYInput");
  var filter = input.ariaValueMax.toUpperCase();
  var ul = document.getElementById("ul");
  li = ul.getElementsByTagName("li");
  for(i=0; i<=li.length;i++){
    li[i].getElementsByTagName('div')[0];
    txtValue = div.texContent || div.innerText;
    if(txtValue.toUpperCase().indexOf(filter)>-1){
      li[i].style.display ="";
    }
    else{
      li[i].style.display = "none";
    }
  }


 }
