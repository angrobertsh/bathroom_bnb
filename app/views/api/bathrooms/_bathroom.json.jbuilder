json.set! "#{bathroom.id}" do
  json.extract! bathroom, :id, :description, :gender, :url, :lat, :lng, :single
  json.votes bathroom.votes do |vote|
    json.partial! "api/votes/vote", vote: vote
  end
  json.reviews bathroom.reviews do |review|
    json.partial! "api/reviews/review", review: review
  end
end
