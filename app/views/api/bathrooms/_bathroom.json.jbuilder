json.set! "#{bathroom.id}" do
  json.extract! bathroom, :id, :description, :gender, :url, :lat, :lng, :single
  json.votes bathroom.votes.each do |vote|
    json.partial! "api/votes/vote", vote: vote
  end
  json.reviews bathroom.reviews.each do |review|
    json.partial! "api/reviews/review", review: review
  end
end
