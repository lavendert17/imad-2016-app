console.log('Loaded!');

//Change the text of the main text div
var element = document.getElementById('main-text'
);

element.innerHTML = 'NEW VALUE';

//MOVE THE IMAGE
var img = document.getElementById('madi');
img.onclick = function () {
    function moveRight () {
        marginLeft = marginLeft + 10;
        img.style.marginLeft = marginLeft + 'px';
        
    }
    var interval = setInterval(moveRight, 100);
    img.style.marginLeft = '100px';
};



//counter code

var button = document.getElementById('counter');

button.onclick = function(){
        //Not done yet  
};
    
        //Make the request
    
            request.open('GET', 'http://lavendert17.imad.hasura-app.io/submit-name?name=' + name, true);
            request.send(null);

    
//Submit name

     var submit = document.getElementById('submit_btn');
     submit.onclick = function () {
 
     //Create a request object
     var request = new XMLHttpRequest();
  
     // Capture the response and store it in a variable
    request.onreadystatechange = function() {
      if(request.readyState === XMLHttpRequest.DONE) {
        // Take some action
          if (request.status === 200) {
           //capture a list of names and render it as list.
             var names = request.responseText;
             names = JSON.parse(names);
             var list = '';
             for (var i=0; i< names.length; i++);{
                  list += '<li>' +names[i] + '</li>';
            }
             var ul = document.getElementById('namelist');
             ul.innerHTML = list;
  
          }
    }
       // Not done yet
       
 };
           //Make a request to the server and send the name
            var nameInput = document.getElementById('name');
            var name = nameInput.value;     
            request.open('GET', 'http://lavendert17.imad.hasura-app.io/submit-name?name=' + name, true);
            request.send(null);
      
  
};

     

