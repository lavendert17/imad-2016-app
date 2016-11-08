var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
      articleOne: {
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
     
    },
      articleTwo: { 
      title: 'Article two | Sonia T',
      heading: 'Article two',
      date: 'Sept 10, 2016',
      content: ` 
            <p>
               This is the content for my second article.
             </p>`
     
    },
      articleThree: {
      title: 'Article three | Sonia T',
      heading: 'Article three',
      date: 'Sept 15, 2016',
      content: ` 
            <p>
               This is the content for my third article.
             </p>`
      },
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
                    I am into Digital Marketing
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

var counter = 0;
app.get('/counter', function (req,res) {
    counter = counter + 1;
    res.send(counter.toString());
});

app.get('/:articleName', function (req, res) {
    // articleName == article-one
    // articles[articleName] == {} content object for article one
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style/css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi/png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names = [];
app.get('/submit-name', function(req,res) { // URL: /submit-name?name=xxxxx
    //Get the name from the request object
var name = req.query.name;

names.push(name);
//JSON : Javascript Object Notation
res.send(JSON.stringify(names));

});
var port = 8080; //Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log  ('IMAD course app listening on port ${port}!');
  
});