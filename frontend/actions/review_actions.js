export const createReview = (review) => {
  return{
    type: "CREATE_REVIEW",
    review: review
  }
}

export const updateReview = (review) => {
  return{
    type: "UPDATE_REVIEW",
    review: review
  }
}

export const deleteReview = (id) => {
  return{
    type: "DELETE_REVIEW",
    id: id
  }
}
