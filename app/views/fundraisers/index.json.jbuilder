json.array! @fundraisers do |fundraiser|
  json.fundraiser fundraiser, :title, :description, :image_url, :user_id, :goal_amount, :category
end
