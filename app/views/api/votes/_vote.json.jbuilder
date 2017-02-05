json.set! "#{vote.votable_id}" do
  json.extract! vote, :votable_id, :value, :user_id
end
