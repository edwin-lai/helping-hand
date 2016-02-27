class Donation < ActiveRecord::Base
  validates :amount, :user_id, :fundraiser_id, :visible, presence: :true

  belongs_to :fundraiser
  belongs_to :user
end
