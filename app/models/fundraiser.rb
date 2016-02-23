class Fundraiser < ActiveRecord::Base
  validates :title, :description, :image_url, :user_id, presence: :true
  validates :goal_amount, :category, presence: :true

  belongs_to :user
end
