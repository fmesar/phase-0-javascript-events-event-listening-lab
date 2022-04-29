function addingEventListener(){
const color = document.querySelector('#color');
 color.addEventListener('mouseover', function(){
    color.style.background = "blue";

    
})
const input = document.getElementById('input');
input.addEventListener('click', function() {
  alert('I was clicked!');
});
}
 addingEventListener()