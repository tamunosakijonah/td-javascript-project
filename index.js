let input = document.querySelector('input')
let nameValue = document.querySelector('.nameValue')
const prize = document.querySelector('.prize')
const buyNow = document.querySelector('button')

    
function countLetters(e){
    let RealInput = input.value.replaceAll(' ','')
    nameValue.innerHTML = RealInput 
    prize.innerHTML ='$' + RealInput.length *5
    
}
const buyEvent = () =>{
   if (input.value ===''){
    alert(`you didn't enter any name.`)
   }else if(input.value === "enter name"){
      alert(`you didn't enter any name`)
   }else if(input.value.length > 15){
    alert(`you have exceeded word limit`)
   }else{
    alert('successful')
   }
}

input.addEventListener('input',countLetters)

buyNow.addEventListener('click',buyEvent)