//Add a checked symbol when clicking on a list item 
var list = document.querySelector('ul')
list.addEventListener('click',function(ev){
  if(ev.target.tagName === 'LI'){
    ev.target.classList.toggle('checked');
  }
},false);
//Create a new list item when clicking on the add button
function newElement(){
  const node  = document.createElement("li");
  const inputValue = document.getElementById("myInput").value; 
  const textnode = document.createTextNode(inputValue);
  node.appendChild(textnode);
  if(inputValue === ''){
    alert("You must write something!");
  }else{
    document.getElementById("myList").appendChild(node);
  }
  document.getElementById("myInput").value = "";
}
