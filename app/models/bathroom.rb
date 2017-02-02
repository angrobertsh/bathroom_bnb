class Bathroom < ActiveRecord::Base
  validates :description, :gender, :lat, :lng, presence: true
  validates :single, inclusion: { in: [true, false] }
  validates :lat, uniqueness: { scope: [:lng, :gender], message: "This bathroom already exists." }

  has_many :reviews
  has_many :tags
  has_many :votes, :as => :votable

  def tags=(tags)
  end

end
