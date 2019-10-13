/**
 * Feed - Controller
 */

const getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: '1',
        title: 'First Post',
        content: 'This is the first post!',
        imageUrl: 'images/duck.jpg',
        creator: {
          name: 'Tiago'
        },
        createdAt: new Date()
      }
    ]
  });
};

const createPost = (req, res, next) => {
  const { title, content } = req.body
  
  // Create post in db
  
  res.status(201).json({
    message: 'Post created successfully!',
    post: { id: new Date().toISOString(), title: title, content: content }
  });
};

module.exports = {
  getPosts,
  createPost
}