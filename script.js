const vowels = ["a", "e", "i", "o", "u"];

function vowelsCounter() {
  
  let text = document.getElementById("ip").value;
  let count = 0;

  for (let i of text.toLowerCase()) {
      if (vowels.includes(i)) {
          count++;
      }
  }

  document.getElementById("ans").innerHTML = "Count(Vowels) : " + count;
}