class Donation < ActiveRecord::Base
  validates :amount, :user_id, :fundraiser_id, presence: :true
  validates_inclusion_of :visible, in: [true, false]

  belongs_to :fundraiser
  belongs_to :user
end
