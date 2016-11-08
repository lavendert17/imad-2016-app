//counter code

var button = document.getElementById('counter');
button.onclick = function () {

       // Create a request
       var request = new XMLHttpRequest();
       
       // Capture the response and store it in a variable
       request.onreadystatechange = function () {
       if (request.readyState === XMLHttpRequest.DONE) {
          // tAKE SOME ACTION
        if (request.status === 200) {
            var counter = request.responseText;
             var span = document.getElementById('count');
             span.innerHTML = counter.toString();
            
        }
    }
       
       // Not done yet
    };
       
       //Make the request
    
        request.open('GET', 'http://lavendert17.imad.hasura-app.io/submit-name?name=' + name, true);
        request.send(null);
};
//Submit name
var nameInput = document.getElementById('name');


     var submit = document.getElementById('submit_btn');
     submit.onclick = function () {
 
     
    
}
       // Not done yet
       
 };
           //Make a request to the server and send the name
            var nameInput = document.getElementById('name');
            var name = nameInput.value;     
            request.open('GET', 'http://lavendert17.imad.hasura-app.io/submit-name?name=' + name, true);
            request.send(null);
      
  
};

     

