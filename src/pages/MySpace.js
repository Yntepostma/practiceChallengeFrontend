import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectUser, selectSpace } from "../store/user/selectors";
import {
  deleteStory,
  getUserWithStoredToken,
  editSpace,
} from "../store/user/thunks";
import { NavLink } from "react-router-dom";
import { PostPage } from "../components/PostPage";
import { selectFormStatus, selectEdit } from "../store/user/selectors";
import { toggleForm, toggleEdit } from "../store/user/slice";
import { Edit } from "../components/Edit";
import "./style.css";

const MySpace = () => {
  const space = useSelector(selectSpace);
  const formStatus = useSelector(selectFormStatus);
  const edit = useSelector(selectEdit);
  const dispatch = useDispatch();

  const spaceStyle = !space
    ? " "
    : {
        color: `${space.color}`,
        backgroundColor: `${space.backgroundColor}`,
      };

  return (
    <div>
      {!space ? (
        " Loading"
      ) : (
        <div style={spaceStyle}>
          <div>
            <h2>{space.title}</h2>
            {!formStatus ? (
              <button onClick={() => dispatch(toggleForm())}>
                Add a cool story bro
              </button>
            ) : (
              <button onClick={() => dispatch(toggleForm())}>Hide form</button>
            )}

            {formStatus ? <PostPage /> : ""}
          </div>
          <div>
            {!edit ? (
              <button onClick={() => dispatch(toggleEdit())}>Edit Space</button>
            ) : (
              <button onClick={() => dispatch(toggleEdit())}>Hide form</button>
            )}

            {edit ? <Edit /> : ""}
          </div>
          <h4>description:</h4>
          <p>{space.description}</p>
          {space.stories.map((story) => {
            return (
              <div key={story.id}>
                <h2>{story.name}</h2>
                <img className="image" src={story.imageUrl} alt={story.name} />
                <p>{story.content}</p>
                <button onClick={() => dispatch(deleteStory(story.id))}>
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MySpace;
