class Fundraiser < ActiveRecord::Base
  validates :title, :description, :image_url, :user_id, presence: :true
  validates :goal_amount, :category, :thumbnail_url, presence: :true
  validates_numericality_of :goal_amount, greater_than: 0, only_integer: true

  has_many :donations

  belongs_to :user

  def total_donations
    donations.map(&:amount).inject(:+)
  end

  def num_donors
    donations.map(&:user_id).uniq.size
  end
end
