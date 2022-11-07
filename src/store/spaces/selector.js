export const selectSpaces = (reduxState) => reduxState.spaces.spaces;

export const selectSpacesWithStories = (id) => (reduxState) => {
  const clonedArray = reduxState.spaces.spacesWithStories;
  const spaceToDisplay = clonedArray.find((space) => {
    return id === space.id;
  });
  return spaceToDisplay;
};
