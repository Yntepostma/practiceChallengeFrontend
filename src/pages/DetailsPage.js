import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSpacesWStories } from "../store/spaces/thunks";
import { selectSpacesWithStories } from "../store/spaces/selector";
import Story from "../components/Story";

export const DetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getSpacesWStories());
  }, [dispatch]);

  const spaceAndStory = useSelector(selectSpacesWithStories(parseInt(id)));

  const spaceStyle = !spaceAndStory
    ? " "
    : {
        color: `${spaceAndStory.color}`,
        backgroundColor: `${spaceAndStory.backgroundColor}`,
      };

  return (
    <div>
      {!spaceAndStory ? (
        "Loading"
      ) : (
        <div style={spaceStyle}>
          <h1>{spaceAndStory.title}</h1>
          <p>{spaceAndStory.description}</p>
          <h2>Stories:</h2>
          {spaceAndStory.stories.map((story) => {
            return (
              <Story
                key={story.id}
                id={story.id}
                name={story.name}
                content={story.content}
                image={story.imageUrl}
                created={story.createdAt}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
