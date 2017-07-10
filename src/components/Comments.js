import React, {PropTypes} from 'react';

const Comments = ({ comment }) => {
    const { name, text } = comment;
    return (
      <div>
        <h5>{name}</h5>
        <p>{text}</p>
      </div>
    );
};

Comments.propTypes = {
  comment: PropTypes.object.isRequired
};

export default Comments;
