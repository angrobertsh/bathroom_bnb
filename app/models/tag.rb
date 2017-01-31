class Tag < ActiveRecord::Base
  validates :tagname, :bathroom_id, presence: true

  belongs_to :bathroom
end
