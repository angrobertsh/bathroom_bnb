export const getAllBathrooms = (success, error) => {
  $.ajax({
    url: "api/bathrooms",
    method: "GET",
    success,
    error
  })
}

export const getSingleBathroom = (success, error, id) => {
  $.ajax({
    url: `api/bathrooms/${id}`,
    method: "GET",
    success,
    error
  })
}

export const createBathroom = (success, error, bathroom) => {
  $.ajax({
    url: "api/bathrooms",
    method: "POST",
    data: bathroom,
    success,
    error
  })
}

export const editBathroom = (success, error, bathroom) => {
  $.ajax({
    url: `api/bathrooms/${bathroom.id}`,
    method: "PATCH",
    data: bathroom,
    success,
    error
  })
}
