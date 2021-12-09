const { response } = require('express');
const express = require ('express');

//express app 
const app = express();

//register view engine
app.set('view engine', 'ejs');

//listen for requests port 3000
app.listen(3000);


//MIDDLEWARE
app.use((req, res, next) => {
    console.log('new request made:');
    console.log('host', req.hostname);
    console.log('path', req.path);
    console.log('method', req.method);
    next();
});

app.use((req, res, next) => {
    console.log('in the next middleware');
    next();
});

app.get('/', (req, res) => {
    const blogs = [
      {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
    res.render('index', { title: 'Home', blogs });
  });

app.get('/',(req, res) => {
    
    // res.send('<p>home page</p>'); //express method
    //res.sendFile('./views/index.html', { root: __dirname }); //(relative path, root folder)

    res.render('index');

});

app.get('/about',(req, res) => {
    
    // res.sendFile('./views/about.html', { root: __dirname }); //(relative path, root folder)

    res.render('about');

});


//REDIRECTS
//about us
// app.get('/about-us',(req, res) => {
    
//     res.redirect('/about');

// });

app.get('/blogs/create', (req, res) => {
    res.render('create');
})

//404 page
//app.use é similar a um catch all, tem queficar no fim da página
app.use((req, res) => { 
    // res.status(404).sendFile('./views/404.html', { root: __dirname })

    res.status(404).render('404')

}); 
