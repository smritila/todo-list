// Selectors
document.querySelector('form').addEventListener('submit',handleSubmitForm);
// Event Handlers
function handleSubmitForm(e){
  e.preventDefault();
  let input=document.querySelector('input');
  if(input.value != '')
   addTodo (input.value);
   input.value=';'
}    

// Helpers
 function addTodo(todo) {
    let ul=document.querySelector('ul');
    let li=document.createElement('li');

 }