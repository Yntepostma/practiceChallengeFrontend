import { useState } from "react";
import { useSelector } from "react-redux";
import { selectSpace, selectUser } from "../store/user/selectors";
import { editSpace } from "../store/user/thunks";
import { useDispatch } from "react-redux";
import "./style.css";

export const Edit = () => {
  const dispatch = useDispatch();
  const space = useSelector(selectSpace);
  const [title, setTitle] = useState(space.title);
  const [description, setDescription] = useState(space.description);
  const [backgroundColor, setBackgroundColor] = useState(space.backgroundColor);
  const [color, setColor] = useState(space.color);

  const user = useSelector(selectUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = space.id;
    const editedSpace = { id, title, description, backgroundColor, color };
    dispatch(editSpace(editedSpace));
  };

  return (
    <div>
      <h2>Edit page</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          <h4>Title</h4>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </label>
        <label>
          <h4>Description</h4>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>
        </label>
        <label>
          <h4>Background color</h4>
          <input
            type="color"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          ></input>
        </label>
        <label>
          <h4>Color</h4>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          ></input>
        </label>
        <button type="submit">submit changes</button>
      </form>
    </div>
  );
};
