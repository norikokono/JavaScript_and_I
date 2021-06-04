import React from "react";
const ModifyPost = (props) => {
  return (
    <React.Fragment>
      <div id="modify_body">
        <section className="create-post">
          <form>
            <h2 className="post_h1">Modify Post</h2>
            <input type='text'
              defaultValue={props.title}
              onChange={props.savePostTitleToState}
              text
              placeholder="title"
              size="39"
            ></input>
            <br />
            <br />
            <textarea
              defaultValue={props.content}
              placeholder="content"
              onChange={props.savePostContentToState}
              rows="8"
              cols="41"
            ></textarea>
            <br />
            <br />
            <section className="button-wrapper">
            <button className="blog_button" onClick ={props.updatePost}>Update Post</button>
            </section>
          </form>
        </section>
      </div>
    </React.Fragment>
  );
};
export default ModifyPost;
