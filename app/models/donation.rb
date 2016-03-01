class Donation < ActiveRecord::Base
  validates :amount, :user_id, :fundraiser_id, presence: :true
  validates_inclusion_of :visible, in: [true, false]
  validates_numericality_of :amount, greater_than: 0, only_integer: true
  validates_numericality_of :amount, less_than_or_equal_to: :user_bank

  belongs_to :fundraiser
  belongs_to :user

  def user_bank
    user.bank
  end
end
