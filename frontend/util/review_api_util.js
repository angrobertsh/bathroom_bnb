export const createReview = (success, error, review) => {
  $.ajax({
    url: "api/reviews",
    method: "POST",
    data: bathroom,
    success,
    error
  })
};

export const editReview = (success, error, review) => {
  $.ajax({
    url: `api/reviews/${review.id}`,
    method: "PATCH",
    data: bathroom,
    success,
    error
  })
};

export const destroyReview = (success, error, id) => {
  $.ajax({
    url: `api/reviews/${id}`,
    method: "DELETE",
    success,
    error
  })
};
