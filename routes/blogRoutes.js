const express = require ('express');
const blogController = require('../controllers/blogController');

const router = express.Router();


const Blog = require('../models/blog');

router.get('/create', blogController.blog_create_get);
router.get('/', blogController.blog_index);
router.post('/', blogController.blog_create_post);
router.get('/:id', blogController.blog_details);
router.delete('/:id', blogController.blog_delete);

module.exports = router;


//SUBSTITUIDOS POR FUNÇÕES NO blogController
//GET ALL POSTS REQUEST
/*
router.get('/', (req, res) => {
    Blog.find().sort({ createdAt: -1 }) //ordenar resultados
    .then((result) => {
        res.render('index', { title: 'All blogs', blogs: result })
    })
    .catch((err) => {
        console.log(err);
    })
});

//CREATE NEW BLOG
router.get('/create', (req, res) => {
    res.render('create');
})

//POST REQUEST
router.post('/', async (req, res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch ((err) => {
        console.log(err);
        });
});


//GET REQUEST
router.get('/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('details', { blog: result, title: 'Blog Details' });
        })
        .catch(err =>{
            console.log(err)
        });
})

//DELETE REQUEST
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    
    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect:'/blogs' });
        })
        .catch(err => {
            console.log(err);
        })
})


module.exports = router;
*/

// router.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new blog 2',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     });

//     blog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// router.get('/all-blogs', (req, res) => {
//     Blog.find()
//     .then((result) => {
//         res.send(result);
//     })
//     .catch((err) => {
//         console.log(err)
//     });
// });

// router.get('/single-blog', (req, res) => {
//     Blog.findById('61b3acd6a25886e588fea789')
//     .then((result) => {
//         res.send(result);
//     })
//     .catch((err) => {
//         console.log(err)
//     });
// });
