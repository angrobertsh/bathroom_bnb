class Bathroom < ActiveRecord::Base
  validates :description, :gender, :lat, :lng, presence: true
  validates :single, :accessible, inclusion: { in: [true, false] }
  validates :lat, uniqueness: { scope: [:lng, :gender], message: "This bathroom already exists." }

  has_many :reviews
  has_many :tags
  has_many :votes, :as => :votable

  def tags=(tags)
  end

  def stars
    self.reviews.inject(0){|acc, review| acc + review.stars}
  end

end
