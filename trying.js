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

//   const submit = button.querySelector('#submitBtn') ;
//   submit.addEventListener('click',function(){
//        window.open(input.value.toUpperCase())  ;
//   }) ;

// rating star with console the chosing pic
  const num1 = document.querySelector('.num1');
  const num2 = document.querySelector('.num2');
  const num3 = document.querySelector('.num3');
  const star1 = num1.querySelectorAll('.star') ;
  const star2 = num2.querySelectorAll('.star') ;
  const star3 = num3.querySelectorAll('.star') ;
  const stars = [star1,star2,star3] ;
  const image1 = document.getElementById('img1') ;
  const image2 = document.getElementById('img2') ;
  const image3 = document.getElementById('img3') ;

 for(let i =0 ; i<star1.length ; i++){
    star1[i].addEventListener('click',function(){
        for (let j=0 ; j < star1.length ; j++){
            if(j <= i){
                star1[j].style.color = "yellow" ;
            } else {
                star1[j].style.color = "";
            }
                console.log(`${image1.alt}: ${i+1}`) ;
        }
            })
        }

        for(let i =0 ; i<star2.length ; i++){
            star2[i].addEventListener('click',function(){
                for (let j=0 ; j < star2.length ; j++){
                    if(j <= i){
                        star2[j].style.color = "yellow" ;
                    } else {
                        star2[j].style.color = "";
                    }
                    console.log(`${image2.alt}: ${i+1}`) ;
                }
                    })
                }

                
                for(let i =0 ; i<star3.length ; i++){
                    star3[i].addEventListener('click',function(){
                        for (let j=0 ; j < star3.length ; j++){
                            if(j <= i){
                                star3[j].style.color = "yellow" ;
                            } else {
                                star3[j].style.color = "";
                            }
                            console.log(`${image3.alt}: ${i+1}`) ;
                        }
                            })
                        }
                

 






