# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(
  first_name: 'Guest',
  last_name: 'User',
  email: 'guest.user@helping-hand.com',
  password: 'password'
)
User.create(
  first_name: 'Edwin',
  last_name: 'Lai',
  email: 'edwinlai@ucla.edu',
  password: 'password'
)
User.create(
  first_name: 'April',
  last_name: 'Flowers',
  email: 'april.flowers@gmail.com',
  password: 'password'
)

Fundraiser.create(
  title: 'Help Brianne Beat Cancer',
  description: 'Our 2 year old daughter was recently diagnosed with leukemia. Her medical treatment is very expensive. Please contribute to help her beat cancer!',
  image_url: 'https://images.unsplash.com/photo-1455723268471-b227afd576cd?crop=entropy&fit=crop&fm=jpg&h=600&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1375',
  user_id: 3,
  goal_amount: 5000,
  category: 'Medical',
  thumbnail_url: 'https://images.unsplash.com/photo-1455723268471-b227afd576cd?crop=entropy&fit=crop&fm=jpg&h=300&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=450'
)
Fundraiser.create(
  title: 'Help Springfield School',
  description: 'At Springfield School, many of the students are underprivileged and homeless, but that’s not their only obstacle. Almost all of their technology doesn’t work, their entire roof is falling apart and their gym is completely shut down. Springfield School is in dire need of millions of dollars in renovations and we would love your help. Thank you for your attention and generosity in helping such an amazing school.',
  image_url: 'https://images.unsplash.com/reserve/1JyANL0DTguQcnvDRTg1_DSC_1962.jpg?crop=entropy&fit=crop&fm=jpg&h=600&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1375',
  user_id: 2,
  goal_amount: 10_000,
  category: 'Education',
  thumbnail_url: 'https://images.unsplash.com/reserve/1JyANL0DTguQcnvDRTg1_DSC_1962.jpg?crop=entropy&fit=crop&fm=jpg&h=275&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=400'
)
Fundraiser.create(
  title: 'Jim\'s Funeral Expenses',
  description: 'I recently lost my husband, Jim, in a tragic accident. Please help me through the many difficult days ahead by donating any amount that you can to pay for funeral expenses and the many life transitions my children and I will now have to make without him. ',
  image_url: 'https://images.unsplash.com/photo-1443381301867-5a36ffaafc42?crop=entropy&fit=crop&fm=jpg&h=600&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1375',
  user_id: 3,
  goal_amount: 1000,
  category: 'Memorial',
  thumbnail_url: 'https://images.unsplash.com/photo-1443381301867-5a36ffaafc42?crop=entropy&fit=crop&fm=jpg&h=275&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=400'
)

Donation.create(
  amount: 20,
  user_id: 2,
  fundraiser_id: 3,
  comment: 'I am truly touched by your story. Please accept my donation. Best wishes, Edwin',
  visible: true
)

Donation.create(
  amount: 50,
  user_id: 3,
  fundraiser_id: 2,
  comment: 'I feel for these kids! I hope my donation helps! -April',
  visible: true
)

Donation.create(
  amount: 10,
  user_id: 1,
  fundraiser_id: 3,
  visible: false
)
