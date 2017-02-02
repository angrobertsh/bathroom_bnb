class Review < ActiveRecord::Base
  validates :body, :user_id, :bathroom_id, :stars, presence: true
  validates :stars, :numericality => { greater_than: 0, less_than: 6 }

  belongs_to :user
  belongs_to :bathroom
  has_many :votes, :as => :votable

end
