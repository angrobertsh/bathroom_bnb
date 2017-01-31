class Bathroom < ActiveRecord::Base
  validates :lat, :lng, :gender, :description, :single, presence: true
  validates :lat, uniqueness: { scope: :lng, :gender }

  has_many :reviews
  has_many :tags
  has_many :votes, :as => :votable


end
