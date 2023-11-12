import React, { useState, useEffect } from "react";
import { addComment } from "../api/backend";

const CommentForm = ({ report_number }) => {
  const [content, setContent] = useState("");

  const submit = () => {
    if (content) {
      const date = new Date();
      const commentYear = date.toLocaleString("default", { year: "numeric" });
      const commentMonth = date.toLocaleString("default", { month: "2-digit" });
      const commentDay = date.toLocaleString("default", { day: "2-digit" });
      const commentDate = commentYear + "-" + commentMonth + "-" + commentDay;
      addComment(report_number, commentDate, content);
      setContent("");
      alert("Comment posted");
    }
  };

  return (
    <div className="flex flex-col w-full gap-2">
      <div className="font-semibold text-gray-600">Add a Comment:</div>
      <textarea
        className="block border-2 rounded-sm p-2"
        type="text"
        name="content"
        placeholder="Enter comment here"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button
        className="block w-[150px] leading-6 border-2 py-2 rounded-sm self-center"
        onClick={submit}
      >
        Post Comment
      </button>
    </div>
  );
};

export default CommentForm;
