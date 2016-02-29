json.extract! @fundraiser, :id, :title, :description, :image_url, :user_id, :goal_amount, :category, :thumbnail_url, :donations, :created_at, :total_donations, :num_donors
json.user @fundraiser.user, :first_name, :last_name
