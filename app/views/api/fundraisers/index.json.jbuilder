json.array! @fundraisers do |fundraiser|
  json.id fundraiser.id
  json.title fundraiser.title
  json.category fundraiser.category
  json.user_id fundraiser.user_id
  json.thumbnail_url fundraiser.thumbnail_url
  json.goal_amount fundraiser.goal_amount
  json.first_name fundraiser.user.first_name
  json.last_name fundraiser.user.last_name
end
