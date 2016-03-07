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
User.create(
  first_name: 'Siobhan',
  last_name: 'MacDougal',
  email: 'siobhan.macdougal@yahoo.com',
  password: 'password'
)
User.create(
  first_name: 'Jose',
  last_name: 'de la Cruz',
  email: 'jose@delacruz.com',
  password: 'password'
)
User.create(
  first_name: 'Kylie',
  last_name: 'Maxwell',
  email: 'kylie.maxwell@gmail.com',
  password: 'password'
)
User.create(
  first_name: 'Joe',
  last_name: 'Black',
  email: 'joe_black@yahoo.com',
  password: 'password'
)

Fundraiser.create(
  title: 'Help Brianne Beat Cancer',
  description: 'Our 2 year old daughter was recently diagnosed with leukemia. Her medical treatment is very expensive. Please contribute to help her beat cancer!',
  image_url: 'https://images.unsplash.com/photo-1455723268471-b227afd576cd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=0ab5c8c509d84c8095ed33eafa4bed54',
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
  image_url: 'https://images.unsplash.com/photo-1443381301867-5a36ffaafc42?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=55305b8bccaf697caf527ec7afb2979a',
  user_id: 3,
  goal_amount: 1000,
  category: 'Memorials',
  thumbnail_url: 'https://images.unsplash.com/photo-1443381301867-5a36ffaafc42?crop=entropy&fit=crop&fm=jpg&h=275&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=400'
)
Fundraiser.create(
  title: 'Helping Refugees in Calais',
  description: "I am just one woman. One strong hefty lump of an Irish woman. Lifting and carrying stuff is no bother for me. There's a crew of local folk building shelters for the refugees and I know I can help them.
    On this Friday morning I am driving to Calais with a boot full of sturdy shoes, blankets, jackets and the like to give away to those in need.
    On Saturday I am going to help with the building and then I am going to a march in Calais.  People are gathering in order to highlight the current living conditions in the refugee camp and attempt to improve this. I intend to interview the demonstrators and report back via social media. There's a distinct lack of media coverage out of Calais and I know i can help with this too.
    The fuel costs for the car will be about £120. The ferry will be £80 and then I need to shelter and eat. Anything above this will be used to buy more insulation and building materials. I know this is short notice, but I just can't sit here in my comfy warm home and do nothing. I feel so guilty.
    Friends have volunteered to mind my child, cat and home. Thank you so much to all of them. And thank you a hundred million times for any donations you can offer.",
  image_url: 'https://images.unsplash.com/photo-1452505975376-3503058deda8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=b5335804c9b62e21bdde5537cda3e6ba',
  user_id: 4,
  goal_amount: 400,
  category: 'Volunteer',
  thumbnail_url: 'https://images.unsplash.com/photo-1452505975376-3503058deda8?crop=entropy&fit=crop&fm=jpg&h=250&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=375'
)
Fundraiser.create(
  title: 'Beloved Teacher in Need After Fire',
  description: 'Today the home of Lindsey Donovan, one of Kerhonkson Elementary School\'s most amazing and beloved teachers, burnt down in a devastating fire. Currently she, her husband, and son are staying in a hotel. I am asking for our community to rally together and lend a helping hand in this family\'s hour of need. Lindsey has dedicated herself to shaping the minds of our children and giving so much of herself to her students. Her devotion and dedication meets no end. So again I ask for everyone to please show your support for the most worthy of causes.',
  image_url: 'https://images.unsplash.com/photo-1455747634646-0ef67dfca23f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=a541c4449b419cd20d442f18864c5ecf',
  user_id: 5,
  goal_amount: 10000,
  category: 'Emergencies',
  thumbnail_url: 'https://images.unsplash.com/photo-1455747634646-0ef67dfca23f?crop=entropy&fit=crop&fm=jpg&h=300&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=375'
)
Fundraiser.create(
  title: 'My Olympic Bid',
  description: "Hi everyone, My name is Kylie Maxwell, my dream is to represent Australia at the Rio Olympics in 2016. I am the current Australian Female Freestyle Wrestling Champion. Only the top 18 countries in each division get to represent their countries at the Olympics. This journey is hard and long and I have finally reached the final stage. Now the last step is to compete in Algiers in Africa. All of the top wrestlers across Oceania and Africa will be there – but only the top two competitors in each division across both continents will get the chance to represent their country.
  This is a mammoth task and I am determined to represent Australia and be our countries first Australian born Female Olympic Wrestler. To do this I have put everything I have into wrestling, physically, mentally, emotionally and financially.
  I am prepared to do whatever it takes to get there. Currently I am doing the majority of my training interstate with the best coaches and wrestlers in the country. I have the full support of my husband and family, who are often left back home looking on from a distance. My biggest sacrifice is not always being able to be with my daughter, but I hope by doing this when she gets older she will know she can achieve anything she truly believes in and follows her passion, and I will be there to support her with that!
  I believe in myself.
  I am asking for you believe me too. I would really appreciate any donations no matter how small to help with training, transport and accommodation. Every dollar counts and I will truly appreciate any help anyone can give. If you can’t afford to donate, but would still like to support me please leave a comment as moral support is the next best thing :-)",
  image_url: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d?crop=entropy&fit=crop&fm=jpg&h=625&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1350',
  user_id: 6,
  goal_amount: 5000,
  category: 'Sports',
  thumbnail_url: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d?crop=entropy&fit=crop&fm=jpg&h=250&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=375'
)
Fundraiser.create(
  title: 'My Dog Was Shot',
  description: "Last Wednesday, my dog was senselessly and cruelly shot by a Mill County sheriff's deputy.
    There was a call to the sheriff's office from a home about half a mile south of us stating they heard gunshots and believed a bullet struck the side of their house. Deputies responded and began investigating. After determining that the shot came from the east, they sent a deputy to question the property owner to the east.
    Instead, for reasons yet to be explained, the deputy turned into my driveway. My property is north, with other properties being between mine and where the call came in. My property does not border either of the properties in question - about half a mile from both and in a different direction. Furthermore, there is a creek and wooded area between my house and my neighbors and several buildings between me and the property in question.
    According to my security cameras, we left home less than 10 minutes before the deputy arrived. I am heartsick!
    The deputy drove down my long driveway, pulled in behind my vehicle and exited his patrol car. Based upon what I have been told, and also his body language and facial expression - the deputy heard and saw Fido barking a warning. Fido is very protective of our home and family. The deputy chose to continue towards the house - my dog barked loudly and ran in a wide arch. Within 4 seconds the deputy shot my dog.
    According to the deputy and confirmed in a video taped interview - my dog never touched the deputy. My dog did bark loudly. The deputy said he felt threatened and he panicked and shot the dog. He didn't pepper spray the dog, he didn't tase the dog......instead he used lethal force and shot my dog while Fido was doing his job and protecting our property.
    Fido was a part of our family. Fido protected and watched over my kids daily. Fido walks my kids to the end of the driveway and waits with them for the school bus - rain or shine.
    After the deputy shot my dog - he left a handwritten note telling me that he was attacked by the dog (contrary to his current testimony and contrary to the video). He wrote \"I shot your dog\" and he asked that I call the dispatcher in Mill County.
    As if that wasn't enough...
    My kids were at church taking part in Wednesday night youth group. A friend brought them home and the first thing they noticed was the note... and then they discovered Fido covered in blood, laying on the porch crying and bleeding. My husband and I arrived about 15 minutes later and at first sight we thought he had been shot in the gut and needed to be put down. We were heartbroken!!
    Fortunately our vet recommended to at least get him looked at since he was still coherent. We took him to the Emergency Animal Hospital and discovered the bullet was in his shoulder joint - and 2 bones had shattered as well as the bullet.
    We did not know if he would live.
    Today has been an emotional rollercoaster. I began calling the County sheriff office early trying to find answers, wanting to know why they were even at our house.
    My calls were diverted to voicemail, or a message was taken with promise of a call back - I heard a lot of \"I am not at liberty to discuss this case\" and, three hours into it I was told that the deputy was seeking legal counsel from the City Attorney.
    The sheriff did not call me back.
    A couple of investigative reporters got involved and made so much more progress than I did!! They stayed after it and actually managed to get a recorded interview with the sheriff - he confirmed that my dog did not attack.
    Tonight Fido is staying at the hospital because he will not eat or drink and he is in excrutiating pain.
    He needs a shoulder replacement or an amputation of his front leg -- neither of which is a great option for such an active, energetic dog that was simply protecting his family.
    The deputy left my dog bleeding and dying.... it was nearly 3 hours before we returned home.
    Who wounds an animal and then leaves him suffering?
    My dog was at least 100 yards into our property from all sides. My dog was protecting his/our home. My dog was doing his job. My dog was giving verbal warning.... my dog DID NOT attack or touch or injure anyone.
    Fido needs surgery - he needs care that only an orthopedic specialist can provide. Fido needs thousands of dollars worth of medical care.
    Will Mill County do the right thing and pay his vet bills? I don't know -- Fido doesn't have weeks to wait and find out. Fido needs care now.
    I am setting up this fund in response to dozens of fellow dog owners who have so kindly offered assistance.
    If Mill County does the right thing and they reimburse veterinary expenses then remaining funds will be set up as a Scholarship to provide life-saving funds for pets whose owners are financially unable to afford the care.
    100% of all funds will be used to cover Veterinary and medical care.
    Fido needs surgery this week - tomorrrow - yesterday.
    Please help me save Fido's leg - he shouldn't be further punished for doing his job.",
  image_url: 'https://images.unsplash.com/reserve/UzWklzFdRBSbkRKhEnvc_1-6128.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=8180b9fcead159fd72a92bcfbe69eb69',
  user_id: 7,
  goal_amount: 4000,
  category: 'Animals',
  thumbnail_url: 'https://images.unsplash.com/reserve/UzWklzFdRBSbkRKhEnvc_1-6128.jpg?crop=entropy&fit=crop&fm=jpg&h=250&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=375'
)
Fundraiser.create(
  title: 'Sleepbus: the First Bus of Many',
  description: "In 1993, I fell behind in my rent and was evicted. I had a job, but for the next 4 months I lived in my car while I saved up enough money for a months bond and a months rent on another place. I would park in a car park near my old place for the night, and in the mornings, drive to a caravan park near by, sneak in, have a shower and go to work.
    Since then, I have made a good living for years as a chef and entrepreneur, for the most part living selfishly and not giving a second thought to those sleeping rough.
    In May 2015, I was walking along Carlisle street in St. Kilda East, Melbourne, to my local Cole’s supermarket. As I approached the brand new Bank of Melbourne I see a bright, white sleeping bag crumpled up in the  tiny alcove of an unused doorway. As I got   closer I noticed there was a man curled up in the sleeping bag, on the hard concrete floor, trying to get some sleep… at lunch time.
    So many people were walking past, looking, but moving on with their day, as I have probably done since 1993. This time I couldn’t walk past. I stopped and asked  him if he was ok… he said \“yeah mate, thanks, just trying to get some sleep\”. He looked so tired. I said, \“here mate\” and gave him the $20 I had in my pocket. His eyes lit up, he smiled and was so grateful. He shook my hand, thanked me again with a smile and curled back up under the sleeping bag. When I got home, I told my family what had happened and tears rolled down my face.
    That man trying to sleep on a concrete floor in the middle of the day on a busy city street affected me in a profound way. And that’s a mild story, for many sleeping on the streets are being subjected to terrible weather, harassment, bullying, being robbed and worse. No one should have to live like that.
    For me, charity is practical. It's the ability to use one's position of influence, relative wealth and power to affect lives for the better.
    I’m not a religious person, but there's a story in the Bible about a man beaten near death by robbers. He's stripped naked and lying on the roadside. Most people pass him by, but one man stops. He picks him up and bandages his wounds. He puts him on his horse and walks alongside until they reach an inn. He checks him in and throws down his Amex. \”Whatever he needs until he gets better.\”
    Because he could.
    Using my 20+ years of business experience, I set about developing a simple solution with a mission; to provide people sleeping \“rough\” a safe overnight place to sleep. The more I developed and researched a solution, the more I discovered what a good night’s sleep can do for a person’s physical and mental health. Just being able to sleep through the night, warm and safe, can give a person a whole new outlook on life.
    Sleep Bus is distinct from, yet complementary to, existing efforts from other organisations supporting Australians experiencing or at risk of ending up on the streets. Our work aims to fill a ‘gap’, rather than overlapping or replicating activities that support the urgent needs of people in Australia.
    The least we can do is provide safe overnight accommodation to people sleeping rough in Australia, until they get back on their feet. ",
  image_url: 'http://a30de2edae0c4b0bc6ba-a8477a60b1c5d9e290ed2e4c0d53743c.r24.cf1.rackcdn.com/14/2/large.jpg',
  user_id: 2,
  goal_amount: 15000,
  category: 'Other',
  thumbnail_url: 'http://a30de2edae0c4b0bc6ba-a8477a60b1c5d9e290ed2e4c0d53743c.r24.cf1.rackcdn.com/14/2/large.jpg'
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
