import React from "react";

const Post = ({ title, content, editPost, id, deletePost }) => {
  return (
    <React.Fragment>
      <section className="post-container">
        <h2 className="post_h2">{title}</h2>
        <h3 className="post-content"> {content}</h3>
        <button className="blog_button" onClick={() => editPost(id)}>Edit</button>
        <button className="blog_button" onClick={() => deletePost(id)}>Delete</button>
      </section>
    </React.Fragment>
  );
};
export default Post;
