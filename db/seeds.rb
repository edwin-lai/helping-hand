# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Fundraiser.create(
  title: 'Help Brianne Beat Cancer',
  description: 'Our 2 year old daughter was recently diagnosed with leukemia.
    Her medical treatment is very expensive. Please contribute to help her beat
    cancer!',
  image_url: 'https://unsplash.com/photos/50YQevDoVhw/info',
  user_id: User.all.first.id,
  goal_amount: 5000,
  category: 'Medical'
)
Fundraiser.create(
  title: 'Help Springfield School',
  description: 'At Springfield School, many of the students are underprivileged
    and homeless, but that’s not their only obstacle. Almost all of their
    technology doesn’t work, their entire roof is falling apart and their gym is
    completely shut down. Springfield School is in dire need of millions of
    dollars in renovations and we would love your help. Thank you for your
    attention and generosity in helping such an amazing school.',
  image_url: 'https://unsplash.com/photos/eZC5I4ozAMA',
  user_id: User.all.first.id,
  goal_amount: 10_000,
  category: 'Education'
)
Fundraiser.create(
  title: 'Jim\'s Funeral Expenses',
  description: 'I recently lost my husband, Jim, in a tragic accident. Please
    help me through the many difficult days ahead by donating any amount that
    you can to pay for funeral expenses and the many life transitions my
    children and I will now have to make without him. ',
  image_url: 'https://unsplash.com/photos/50YQevDoVhw/info',
  user_id: User.all.first.id,
  goal_amount: 1000,
  category: 'Memorial'
)
