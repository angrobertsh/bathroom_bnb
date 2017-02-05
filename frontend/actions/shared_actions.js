export const upvote = (vote) => {
  return{
    type: "UPVOTE",
    vote: vote
  }
}

export const editUpvote = (vote) => {
  return{
    type: "EDIT_UPVOTE",
    vote: vote
  }
}

export const receiveBathreviewErrors = (errors) => {
  return{
    type: "RECEIVE_BATHREVIEW_ERRORS",
    errors: errors
  }
};

export const clearBathreviewErrors = () => {
  return{
    type: "CLEAR_BATHREVIEW_ERRORS"
  }
};
