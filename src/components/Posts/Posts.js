import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;
  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/*okay, posts now optionally have hidden true/false value. if it's === true, I need to remove them.*/}
      {
        posts
          .filter(post => !post.hidden === true)
          .map(post => <Post post={post} likePost={likePost} key={post.id} />)
      }
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
