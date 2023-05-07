// there's a common code still with the recipe.js 
//if (pageTitle === recipe){}

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

//search filter
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

    //rating star
    
    const image1Star = document.querySelectorAll('.num1 .star');
    const image2Star = document.querySelectorAll('.num2 .star');
    const image3Star = document.querySelectorAll('.num3 .star');
    
    // data to store rating score
    let data = [] ;

   for (let i=0 ; i<image1Star.length ; i++){
      image1Star[i].addEventListener('click',function(){
      for(let j = 0 ;j<image1Star.length ; j++){
          if(j <= i){
              image1Star[j].style.color = "yellow"
          } else {
              image1Star[j].style.color = ""
          }
      }
       localStorage.setItem(`${pageTitle + 1}`, i+1) ;
       console.log(`${pageTitle + 1}: ${localStorage.getItem(`${pageTitle + 1}`)}`) ;
       
  });

       

    }
   
    for (let i=0 ; i<image2Star.length ; i++){
       image2Star[i].addEventListener('click',function(){
       for(let j = 0 ;j<image2Star.length ; j++){
           if(j <= i){
               image2Star[j].style.color = "yellow"
           } else {
               image2Star[j].style.color = ""
           }
       }
       localStorage.setItem(`${pageTitle + 2}`, i+1) ;
       console.log(`${pageTitle + 2}: ${localStorage.getItem(`${pageTitle + 2}`)}`) ;
   })
    }
   
    for (let i=0 ; i<image3Star.length ; i++){
       image3Star[i].addEventListener('click',function(){
       for(let j = 0 ;j<image3Star.length ; j++){
           if(j <= i){
               image3Star[j].style.color = "yellow"
           } else {
               image3Star[j].style.color = ""
           }
       }
       localStorage.setItem(`${pageTitle + 3}`, i+1) ;
       console.log(`${pageTitle + 3}: ${localStorage.getItem(`${pageTitle + 3}`)}`) ;
     })
    }