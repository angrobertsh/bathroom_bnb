export const requestSingleBathroom = (id) => {
  return {
    type: "REQUEST_SINGLE_BATHROOM",
    id: id
  }
};

export const requestAllBathrooms = () => {
  return {
    type: "REQUEST_ALL_BATHROOMS"
  }
};

export const createNewBathroom = (bathroom) => {
  return{
    type: "CREATE_NEW_BATHROOM",
    bathroom: bathroom
  }
}

export const updateBathroom = (bathroom) => {
  return{
    type: "UPDATE_BATHROOM",
    bathroom: bathroom
  }
}

export const receiveSingleBathroom = (bathroom) => {
  return{
    type: "RECEIVE_SINGLE_BATHROOM",
    bathroom: bathroom
  }
};

export const receiveAllBathrooms = (bathrooms) => {
  return{
    type: "RECEIVE_ALL_BATHROOMS",
    bathrooms: bathrooms
  }
};
