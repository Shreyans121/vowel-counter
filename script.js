function vowelsCounter() {
  
  let text = document.getElementById("ip").value;
  let check = text.match(/[aeiou]/gi);
  let count = 0;

  if (check) {    
      count = check.length;
  } 

  document.getElementById("ans").innerHTML = "Count(Vowels) : " + count;
}