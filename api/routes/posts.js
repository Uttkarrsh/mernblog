const router = require('express').Router();
const Posts = require('../models/Post');
const User = require('../models/User');

//create

router.post("/", async (req,res)=>{
    const newPost = new Posts(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }catch(err){
        res.status(500).json(err);
    }
})

//update

router.put("/:id", async (req,res)=>{
    try{
        const post = await Posts.findById(req.params.id);
        if(post.username === req.body.username ){
            try{
                const updatedPost = await Posts.findByIdAndUpdate(req.params.id,
                    {
                        $set: req.body,
                    },
                    {new:true});
                    res.status(200).json(updatedPost)

            }catch(err){
                res.status(500).json("Wrong Username");
            }
        }
        
    }catch(err){
        res.status(500).json(err);
    }
})

//delete

router.delete("/:id", async (req,res)=>{
    try{
        const post = await Posts.findById(req.params.id);
        if(post.username === req.body.username ){
            try{
                await post.delete();
                res.status(200).json("Post has been deleted")
            }catch(err){
                res.status(500).json("Wrong Username");
            }
        }
        
    }catch(err){
        res.status(500).json(err);
    }
});

//get

// router.get("/:id", async (req, res)=>{
//     try{
//         const post = await Posts.findById();
//         res.status(200).json(post);
//     }catch(err){
//         res.status(500).json(err);
//     }
// })
router.get("/:id", async (req, res)=>{
    try{
        const post = await Posts.findById(req.params.id);
        // const {password, ...other} = user._doc;
        res.status(200).json(post);
    }catch(err){
        res.status(500).json(err);
    }
})

//get all post

router.get("/", async (req,res)=>{
    const username = req.query.user;
    const catName = req.query.cat;
    try{
        let posts;
        if(username){
            posts = await Posts.find({ username });
        }else if(catName){
            posts = await Posts.find({ categories :{
                $in: [catName],
            },
        });
        }else{
            posts = await Posts.find();
        }
        res.status(200).json(posts)
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;