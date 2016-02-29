json.extract! donation, :id, :amount, :comment, :visible
json.user donation.user, :id, :first_name, :last_name
json.fundraiser donation.fundraiser, :id, :title
json.recipient donation.fundraiser.user, :id, :first_name, :last_name
