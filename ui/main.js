//counter code

var button = document.getElementById('counter');
var counter = 0;
button.onclick = function(){
  //Make a request to the counter endpoint
  var request = new XMLhttpRequest();
  
  // Capture the response and store it in a variable
  
  requestonreadystatechange = function() {
    if(request.readyState)  
      
  };
  //Render the variable in the correct span
  
  counter = counter + 1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
  };