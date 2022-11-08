import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectUser, selectSpace } from "../store/user/selectors";
import { deleteStory, getUserWithStoredToken } from "../store/user/thunks";
import { NavLink } from "react-router-dom";
import { PostPage } from "../components/PostPage";
import { selectFormStatus } from "../store/user/selectors";
import { toggleForm } from "../store/user/slice";

const MySpace = () => {
  const space = useSelector(selectSpace);
  const formStatus = useSelector(selectFormStatus);
  const dispatch = useDispatch();

  return (
    <div>
      {!space ? (
        " Loading"
      ) : (
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

          <h4>description:</h4>
          <p>{space.description}</p>
          {space.stories.map((story) => {
            return (
              <div key={story.id}>
                <h2>{story.name}</h2>
                <img src={story.imageUrl} alt={story.name} />
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
