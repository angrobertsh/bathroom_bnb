class Vote < ActiveRecord::Base
  validates :user_id, uniqueness: { scope: [:votable_id, :votable_type] }
  validates :value, presence: true


  belongs_to :votable, polymorphic: true
  belongs_to :user

end
