import React from "react";

const CreateNewPost = props => {
  return (
    <React.Fragment>
    <section className="create-post">
      <form onSubmit={props.savePost}>
        <h1 className="post_h1">Create New Post</h1>
        <input
          type="text"
          onChange={props.savePostTitleToState}
          placeholder="Title"
          size="39"
          required
          ref={props.getTitle}
        ></input>
        <br />
        <br />
        <textarea
          onChange={props.savePostContentToState}
          placeholder="Content"
          rows="8"
          cols="41"
          required
          ref={props.getContent}
        ></textarea>
        <br />
        <br />
        <section className="button-wrapper">
        <button className="blog_button">Save Post</button></section>
      </form>
      </section>
    </React.Fragment>
  );
};
export default CreateNewPost;
