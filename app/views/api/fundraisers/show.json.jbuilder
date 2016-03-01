json.extract! @fundraiser, :id, :title, :description, :image_url, :user_id, :goal_amount, :category, :thumbnail_url, :created_at, :total_donations, :num_donors, :donations
json.user @fundraiser.user, :first_name, :last_name
json.donations @fundraiser.donations do |donation|
  json.id donation.id
  json.amount donation.amount
  json.visible donation.visible
  json.comment donation.comment
  json.created_at donation.created_at
  json.user do
    json.id donation.user.id
    json.first_name donation.user.first_name
    json.last_name donation.user.last_name
  end
end
