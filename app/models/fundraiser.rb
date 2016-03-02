class Fundraiser < ActiveRecord::Base
  validates :title, :description, :image_url, presence: :true
  validates :goal_amount, :category, :thumbnail_url, presence: :true
  validates_numericality_of :goal_amount, greater_than: 0, only_integer: true, if: "!goal_amount.nil?"
  validates_associated :user

  has_many :donations, dependent: :destroy

  belongs_to :user

  def total_donations
    donations.empty? ? 0 : donations.map(&:amount).inject(:+)
  end

  def num_donors
    donations.map(&:user_id).uniq.size
  end
end
