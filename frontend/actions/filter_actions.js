export const updateBounds = (bounds) => ({
  type: "UPDATE_BOUNDS",
  bounds: bounds
});

export const updateTag = (tag) => ({
  type: "UPDATE_TAG",
  tag: tag
})

export const removeTags = () => ({
  type: "REMOVE_TAGS"
})
