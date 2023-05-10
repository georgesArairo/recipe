
//declaring variables

const myList = document.querySelector('#myList') ;
const input = document.querySelector('.form-control') ;

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

//new variables
const form = document.querySelector('.navbar-left') ;
const submit = document.querySelector('.btn-default') ;

// myList open and close
input.addEventListener('click',function(){
myList.style.display = "block" ;
})

document.addEventListener('click', function(e){
  const target = e.target ;
 if( target != input){
  myList.style.display = "none"
 } else { 
    myList.style.display = "block";
}
}) ;

// search inside myList
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
    }
}) ;


// search function to activate the submit button later
    const searchFunction = () => {
        const menuItems = myList.getElementsByTagName('a') ;
        const word = input.value.trim().toUpperCase();
        if ( word !== ''){
             for (let i=0;i<menuItems.length ; i++){
                const menuItem = menuItems[i].innerHTML.toUpperCase();
                     if (menuItem.includes(word)){
                         const newHref = menuItems[i].getAttribute('href') ;
                         form.setAttribute('action',newHref) ;
                     }
             }
             
        }
         }


 /* trying to save it on local storage */ 




/*activate the submit button*/ 

submit.addEventListener('click',function(){
    searchFunction();
})



// rating star with console the chosing pic


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
                

 






