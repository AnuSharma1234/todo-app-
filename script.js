//add a checked symbol when clicking on a list item
const list = document.querySelector('.text');
list.addEventListener('click', function(ev){
    if(ev.target.tagName === 'UL'){
        ev.target.classList.toggle('checked');
    }
});
//create a new list item when clicking on add button
function Add(){
   const input = document.getElementById('inp');
   var list = document.querySelector('.text');
   var modal = document.getElementById("myModal");
   var span = document.getElementsByClassName("close-modal")[0];
   if(input.value === ''){
    modal.style.display = "block";
    span.onclick = function(){
        modal.style.display = "none";
    }
    window.onclick = function(event){
        if(event.target == modal){
            modal.style.display = "none";
        }
    }
}else{
    var newElement = document.createElement('ul');
    newElement.innerHTML = `${input.value}`;

   //add a close button to list item
   var close = document.createElement('SPAN');
   var text = document.createTextNode("X");
   close.appendChild(text);
   close.className = "close";

   //assign a close function to close button
   close.addEventListener('click', function(){
        newElement.remove();
   });
   newElement.appendChild(close);
   list.appendChild(newElement);
   input.value = '';
}
};

