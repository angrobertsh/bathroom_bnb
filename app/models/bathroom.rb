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
    self.reviews.inject(0){|acc, review| acc + review.stars}/self.reviews.length
  end

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
  end

end
