class Fundraiser < ActiveRecord::Base
  validates :title, :description, :image_url, :user_id, presence: :true
  validates :goal_amount, :category, presence: :true
  validates_numericality_of :goal_amount, greater_than: 0, only_integer: true

  belongs_to :user
end
