import express from 'express';

import {
  getPosts,
  createPost,
  updatePost,
  likePost,
  deletePost,
} from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/createPost', createPost);
router.patch('/:id/updatePost', updatePost);
router.delete('/:id/deletePost', deletePost);
router.patch('/:id/likePost', likePost);

export default router;
