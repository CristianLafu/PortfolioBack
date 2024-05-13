const router = require('express').Router();

const Posts = require('../../models/publication.model')

router.post('/', async (req, res) => {
    try {
        const post = await Posts.create(req.body);
        res.json(post);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
    const posts = await Posts.find()
    res.json(posts);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.get('/:status', async (req, res) => {
    const { status } = req.params;
    try {
        const posts = await Posts.find({ status: (status === 'true') }); 
        res.json(posts);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});



module.exports = router;