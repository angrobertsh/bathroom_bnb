json.reviewVotes @review_votes.each do |vote|
  json.partial! "api/votes/vote", vote: vote
end
json.bathroomVotes @bathroom_votes.each do |vote|
  json.partial! "api/votes/vote", vote: vote
end
