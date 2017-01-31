json.set! "#{review.id}" do
  json.extract! review, :id, :body, :bathroom_id, :user_id
  json.username review.user.username
  json.url review.user.url
  json.votes review.votes do |vote|
    json.partial! "api/votes/vote", vote: vote
  end
end
