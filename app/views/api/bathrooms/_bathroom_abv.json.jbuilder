json.set! "#{bathroom.id}" do
  json.extract! bathroom, :id, :description, :gender, :url, :lat, :lng, :single
  json.votes bathroom.votes.length
  json.reviews bathroom.reviews.length
end
