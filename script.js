function vowelsCounter() {

  let modal = document.getElementById("myModal");
  
  let text = document.getElementById("ip").value;
  let check = text.match(/[aeiou]/gi);
  let count = 0;

  if (check) {    
      count = check.length;
  } 

  modal.style.display = "block";

  document.getElementById("ans").innerHTML = "Count(Vowels) : " + count;
}

function exit() {
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
}