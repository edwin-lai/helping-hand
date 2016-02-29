json.array! @donations do |donation|
  json.id donation.id
  json.amount donation.amount
  json.user donation.user, :id, :first_name, :last_name
  json.fundraiser donation.fundraiser, :id, :title
  json.recipient donation.fundraiser.user, :id, :first_name, :last_name
  json.comment donation.comment
  json.visible donation.visible
end
