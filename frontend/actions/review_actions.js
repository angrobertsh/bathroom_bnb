export const createReview = (review) => ({
    type: "CREATE_REVIEW",
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
