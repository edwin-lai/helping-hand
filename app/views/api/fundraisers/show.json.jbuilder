json.extract! @fundraiser, :id, :title, :description, :image_url, :user_id, :goal_amount, :category
json.user @fundraiser.user, :first_name, :last_name
