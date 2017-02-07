export const requestSingleBathroom = (id) => ({
    type: "REQUEST_SINGLE_BATHROOM",
    id: id
});

export const requestAllBathrooms = (filters) => ({
    type: "REQUEST_ALL_BATHROOMS",
    filters: filters
});

export const createNewBathroom = (bathroom) => ({
    type: "CREATE_NEW_BATHROOM",
    bathroom: bathroom
});

export const updateBathroom = (bathroom) => ({
    type: "UPDATE_BATHROOM",
    bathroom: bathroom
});

export const receiveSingleBathroom = (bathroom) => ({
    type: "RECEIVE_SINGLE_BATHROOM",
    bathroom: bathroom
});

export const receiveAllBathrooms = (bathrooms) => ({
    type: "RECEIVE_ALL_BATHROOMS",
    bathrooms: bathrooms
});
