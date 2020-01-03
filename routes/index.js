const { Router } = require('express');
const router = Router();
const controllers = require('../controllers');

router.get('/', (req, res) => res.send('Welcome'))
router.get('/posts', controllers.getAllPosts);
router.post('/posts', controllers.createPost);
router.get('/posts/:postId', controllers.getPostById);
router.put('/posts/:postId', controllers.updatePost);
router.delete('/posts/:postId', controllers.deletePost);

module.exports = router;
