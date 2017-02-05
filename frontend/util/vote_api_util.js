export const createUpvote = (success, error, vote) => {
  $.ajax({
    url: "api/votes",
    method: "POST",
    data: vote,
    success,
    error
  })
};

export const updateUpvote = (success, error, vote) => {
  $.ajax({
    url: `api/votes/${vote.id}`,
    method: "PATCH",
    data: vote,
    success,
    error
  })
};
