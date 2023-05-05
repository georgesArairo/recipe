// variables
const input = document.getElementById('inputText') ;
const submit = document.getElementById('submitBtn') ;
const list = document.getElementById('list') ;

// array to hold everything in it
let todoList = [] ;


const displayList = () => {
    list.innerHTML = "" ;
    for (i = 0 ; i< todoList.length ; i++){
        const li = document.createElement('li');
        list.appendChild(li) ;
        li.innerHTML = todoList[i] ;
    }
}

if(localStorage.todoList){
 todoList = JSON.parse(localStorage.todoList) ;
 displayList() ;
}


//add an evenet listener to the submit btn
submit.addEventListener('click', function(){
    const newInput = input.value ;
    (newInput !== "")? todoList.push(newInput) : todoList ;
    input.value = "" ;
    displayList() ;

    //save it on the local storage
localStorage.setItem('todoList',JSON.stringify(todoList)) ;
});



//add an evenet listener to the list
list.addEventListener('click' , function(e){
    const targetItem = e.target ;
    if (targetItem.tagName === "LI"){
        const targetItemIndex = Array.from(targetItem.parentNode.children).indexOf(targetItem) ;
        todoList.splice(targetItemIndex,1) ;
    }
    displayList() ;
//save it on the local storage
localStorage.setItem('todoList' , JSON.stringify(todoList)) ;

}) ;


