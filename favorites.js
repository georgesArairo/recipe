const input = document.querySelector('.form-control') ;
const myList = document.querySelector('#myList') ;
input.addEventListener('click',function(){
myList.style.display = "block" ;
})

document.addEventListener('click', function(e){
  const target = e.target ;
 if( target != input){
  myList.style.display = "none"
 } else myList.style.display = "block";
}) ;

input.addEventListener('keyup',function(){
    let result = input.value.toUpperCase();
    let li = myList.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
       let a = li[i].getElementsByTagName("a")[0];
       let txtValue = a.textContent || a.innerHTML;
        if (txtValue.toUpperCase().indexOf(result) > -1) {
            li[i].style.display = "" ;
        } else {
            li[i].style.display = "none";
        }   
    }}) ;

