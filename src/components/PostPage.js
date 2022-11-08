import { selectToken, selectUser, selectSpace } from "../store/user/selectors";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNewPost } from "../store/user/thunks";
import { selectPostMessage } from "../store/user/selectors";

export const PostPage = () => {
  const dispatch = useDispatch();
  const space = useSelector(selectSpace);
  const message = useSelector(selectPostMessage);

  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  console.log("name", name, "content", content, "image", imageUrl);

  const handleSubmit = (e) => {
    e.preventDefault();
    const spaceId = space.id;
    const newPost = { name, content, imageUrl, spaceId };
    dispatch(addNewPost(newPost));
    setName("");
    setContent("");
    setImageUrl("");
  };

  return (
    <div>
      <h2>Add a new Post</h2>
      <h4>{!message ? "" : message}</h4>

      <form onSubmit={handleSubmit}>
        <label>
          <h4>Name of Post:</h4>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          <h4>Content:</h4>
          <input
            type="text"
            placeholder="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <br></br>
        <label id="image-preview">
          <h4>Image URL:</h4>
          <input
            // type="file"
            placeholder="imageUrl"
            value={imageUrl}
            accept="image/*"
            id="choose-file"
            name="choose-file"
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </label>
        <br></br>
        <button type="Submit">POST</button>
      </form>
      {imageUrl && (
        <img style={{ width: 200, height: "auto" }} alt={name} src={imageUrl} />
      )}
    </div>
  );
};
