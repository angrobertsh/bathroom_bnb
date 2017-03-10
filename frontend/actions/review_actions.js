export const createNewReview = (review) => ({
    type: "CREATE_NEW_REVIEW",
    review: review
});

export const updateReview = (review) => ({
    type: "UPDATE_REVIEW",
    review: review
});

export const deleteReview = (id) => ({
    type: "DELETE_REVIEW",
    id: id
});
