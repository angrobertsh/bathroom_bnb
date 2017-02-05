json.extract! review, :id, :body, :bathroom_id, :user_id, :stars
json.username review.user.username
json.userimageurl review.user.url
json.votes review.votes.each do |vote|
  json.partial! "api/votes/vote", vote: vote
end
