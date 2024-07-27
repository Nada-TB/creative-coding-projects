var text = [
    "hello world",
    "bonjour le monde",
    "Hallo Welt",
    "Ciao mondo",
    "Hola Mundo"
  ];
  
  function write(arr) {
    //slice sentences
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split("");
    }
    // indicate the start
    var pos = 0;
    var start = -1;
  
    var pen = setInterval(function () {
      start++;
      document.querySelector("span").textContent += arr[pos][start];
  
      if (start === arr[pos].length) {
        start = -1;
        document.querySelector("span").textContent = "";
        pos++;
      }
      if (pos === arr.length) {
        pos = 0;
      }
    }, 250);
  }
  
  write(text);