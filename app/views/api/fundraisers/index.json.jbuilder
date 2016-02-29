json.array! @fundraisers do |fundraiser|
  json.id fundraiser.id
  json.title fundraiser.title
  json.category fundraiser.category
  json.user_id fundraiser.user_id
  json.image_url fundraiser.image_url
  json.description fundraiser.description
  json.thumbnail_url fundraiser.thumbnail_url
  json.goal_amount fundraiser.goal_amount
  json.donations fundraiser.donations
  json.total_donations fundraiser.total_donations
  json.user fundraiser.user, :first_name, :last_name
end
