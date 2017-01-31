class Review < ActiveRecord::Base
  validates :body, :user_id, :bathroom_id, presence: true

  belongs_to :user
  belongs_to :bathroom
  has_many :votes, :as => :votable

end
