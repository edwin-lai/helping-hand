class Donation < ActiveRecord::Base
  validates :amount, presence: :true
  validates_inclusion_of :visible, in: [true, false]
  validates_numericality_of :amount,
                            greater_than: 0, only_integer: true,
                            less_than_or_equal_to: :user_bank,
                            message: :invalid
  validates_presence_of :user, :fundraiser
  validate :cannot_donate_to_self

  belongs_to :fundraiser
  belongs_to :user

  def user_bank
    user.bank
  end

  def cannot_donate_to_self
    if user.id == fundraiser.user.id
      errors.add(:user, 'cannot donate to yourself.')
    end
  end
end
