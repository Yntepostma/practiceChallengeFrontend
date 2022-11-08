import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectUser, selectSpace } from "../store/user/selectors";
import { deleteStory } from "../store/user/thunks";
import { tokenStillValid } from "../store/user/slice";

const MySpace = () => {
  const space = useSelector(selectSpace);

  console.log("space in mySpace", space);
  const dispatch = useDispatch();

  return (
    <div>
      {!space ? (
        " Loading"
      ) : (
        <div>
          <h2>{space.title}</h2>
          <button>Add a cool story bro</button>
          <h4>description:</h4>
          <p>{space.description}</p>
          {space.stories.map((story) => {
            return (
              <div key={story.id}>
                <h2>{story.name}</h2>
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
