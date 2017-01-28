class Bathroom < ActiveRecord::Base
  validates :lat, :lng, :gender, :description, presence: true
  validates :lat, uniqueness: { scope: :lng, :gender }

  belongs_to :user

end
