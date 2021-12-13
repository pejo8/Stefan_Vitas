import React from "react";

const Comments = (props) => {
  const { comments } = props;

  return (
    <div className="p-3">
      <h3>Comments</h3>
      <div>
        {!comments.length ? (
          <p className="mt-4">Be the first to leave a comment about me!</p>
        ) : (
          <div style={{ textAlign: "left" }}>
            {comments.map((comment, index) => (
              <div key={index}>
                <h6
                  className={`mb-0 mt-2 ${
                    comment.gender === 2
                      ? "text-info"
                      : comment.gender === 1
                      ? "text-warning"
                      : "text-secondary"
                  }`}
                >
                  {comment.firstName + " " + comment.lastName + ":"}
                </h6>
                <p style={{ marginLeft: "10px" }}>{comment.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comments;
