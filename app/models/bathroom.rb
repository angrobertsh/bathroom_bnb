class Bathroom < ActiveRecord::Base
  validates :description, :gender, :lat, :lng, presence: true
  validates :single, inclusion: { in: [true, false] }
  validates :lat, uniqueness: { scope: [:lng, :gender] }

  has_many :reviews
  has_many :tags
  has_many :votes, :as => :votable


end
