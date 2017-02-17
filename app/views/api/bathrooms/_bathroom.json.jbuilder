json.set! "#{bathroom.id}" do
  json.extract! bathroom, :id, :description, :gender, :url, :lat, :lng, :single, :accessible
  json.stars bathroom.stars
  json.tags bathroom.tags.map{|tag| tag.tagname}
  json.votes bathroom.votes.each do |vote|
    json.partial! "api/votes/vote", vote: vote
  end
  json.reviews bathroom.reviews.each do |review|
    json.partial! "api/reviews/review", review: review
  end
end
