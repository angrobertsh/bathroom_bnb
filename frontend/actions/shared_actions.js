export const upvote = (vote) => ({
    type: "UPVOTE",
    vote: vote
});

export const editUpvote = (vote) => ({
    type: "EDIT_UPVOTE",
    vote: vote
});

export const receiveBathreviewErrors = (errors) => ({
    type: "RECEIVE_BATHREVIEW_ERRORS",
    errors: errors
});

export const clearBathreviewErrors = () => ({
    type: "CLEAR_BATHREVIEW_ERRORS"
});
