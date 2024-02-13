let count = 0;

const increment = () =>{
  count++
  document.getElementById("count").innerHTML=count
}

const decrement = () =>{
  count--
  document.getElementById("count").innerHTML= count
}