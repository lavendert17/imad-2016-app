var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
  title: 'Article one | Sonia T',
  heading: 'Article one',
  date: 'Sept 5, 2016',
  content: ` 
        <p>
           This is the content for my first article.This is the content for my first article.This is the content for my first article.
           This is the content for my first article.This is the content for my first article.This is the content for my first article.
        </p>
        <p>
           This is the content for my first article.This is the content for my first article.This is the content for my first article.
           This is the content for my first article.This is the content for my first article.This is the content for my first article.
        </p>
        <p>
           This is the content for my first article.This is the content for my first article.This is the content for my first article.
           This is the content for my first article.This is the content for my first article.This is the content for my first article.
        </p>`
 
};
function createtemplate (data){
        var title = data.title;
        var date = data.date;
        var heading = data.heading;
        var content = data.content;
        var htmlTemplate = '
        <html>
            <head>
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class="container">
                   <div class="center">
                    <img id="madi" src="http://learnlocal.org.au/wp-content/uploads/2016/05/still-learning-300x238.jpg" class="img-medium"/>
                   </div>
                   <h3>Personal</h3>
                   <div>
                    Hi. My name is Sonia 
                   </div>
                     <hr/>
                     <h3>Professional</h3>
                   <div>
                    Finally found it here!
                   </div>
                    <hr/>
                   <div class="footer">
                     This button <button id="counter">Click me!</button>has been clicked <span id="count">0</span> times.
                     <hr/>
                     <input type="text" id="name" placeholder="name"></input>
                     <input type="submit" value="Submit" id="submit_btn"></input>
                     <ul id= "namelist">
                    </ul>
                     
                   </div>
                </div>
                <script type="text/javascript" src="/ui/main.js">
                </script>
            </body>
        </html>
        ';
        return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.send(createTemplate(articleOne));
});

app.get('/ui/style/css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi/png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var port = 8080; //Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log  ('IMAD course app listening on port ${port}!');
  
});