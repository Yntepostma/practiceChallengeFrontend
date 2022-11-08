import { useState } from "react";
import { useSelector } from "react-redux";
import { selectSpace, selectUser } from "../store/user/selectors";

const Edit = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [color, setColor] = useState("");
  const space = useSelector(selectSpace);
  const user = useSelector(selectUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = space.id;
  };

  return (
    <div>
      <h2>Edit page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <h4>Title</h4>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </label>
      </form>
    </div>
  );
};
