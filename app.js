//const { response } = require('express');
const express = require ('express');
const morgan = require ('morgan');
const mongoose = require ('mongoose');
const { result } = require('lodash');

const Blog = require('./models/blog');
const { post } = require('../deved/routes/posts');



//express app 
const app = express();

//CONNECT TO MONGODB//

//mongodb+srv://<username>:<password>@cluster0.8bj40.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

//mongoose.connect(mongodb+srv://clusterAnything.mongodb.net/test?retryWrites=true&w=majority, { user: process.env.MONGO_USER, pass: process.env.MONGO_PASSWORD, useNewUrlParser: true, useUnifiedTopology: true })
//mongoose.connect('mongodb+srv://cluster0.8bj40.mongodb.net/node-netninja?retryWrites=true&w=majority', { user: process.env.netninja, pass: process.env.senha, useNewUrlParser: true, useUnifiedTopology: true })

const dbUser = 'netninja';
const dbPassword = 'password1234';
const dbURI = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.8bj40.mongodb.net/node-netninja?retryWrites=true&w=majority`;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('listening on port 3000'))
    .catch((err) => console.log(err));


//register view engine
app.set('view engine', 'ejs');

//listen for requests port 3000
app.listen(3000);


//MIDDLEWARE -- SUBSTITUIDO PELO MORGAN
// app.use((req, res, next) => {
//     console.log('new request made:');
//     console.log('host', req.hostname);
//     console.log('path', req.path);
//     console.log('method', req.method);
//     next();
// });

// app.use((req, res, next) => {
//     console.log('in the next middleware');
//     next();
// });

//midleware and static files
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));


//ROUTES
app.get('/', (req, res) => {
    // const blogs = [
    //     {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //   ];
    //   res.render('index', { title: 'Home', blogs });

    res.redirect('/blogs')
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



//ROUTES
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 }) //ordenar resultados
    .then((result) => {
        res.render('index', { title: 'All blogs', blogs: result })
    })
    .catch((err) => {
        console.log(err);
    })
});

//AULA10
//POST REQUEST
app.post('/blogs', async (req, res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch ((err) => {
        console.log(err);
        });
});

app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog 2',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    });

    blog.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/all-blogs', (req, res) => {
    Blog.find()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err)
    });
});

app.get('/single-blog', (req, res) => {
    Blog.findById('61b3acd6a25886e588fea789')
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err)
    });
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
//app.use é similar a um catch all, tem que ficar no fim da página
app.use((req, res) => { 
    // res.status(404).sendFile('./views/404.html', { root: __dirname })
    res.status(404).render('404')
}); 
