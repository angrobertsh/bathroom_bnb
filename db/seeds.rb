# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create(username: "Poopo", password: "password")

Bathroom.create(description: "3rd and 7th 14th floor unicrapper", gender: "unisex", lat: 10.8, lng: 12, single: true)
Bathroom.create(description: "3rd and 7th 14th floor unicrapper", gender: "men", lat: 10.8, lng: 12, single: false)
Bathroom.create(description: "3rd and 7th 14th floor unicrapper", gender: "women", lat: 10.8, lng: 12, single: false)

Review.create(body: "cozy, nice, unsmelly", user_id: 1, bathroom_id: 1, stars: 5)
Review.create(body: "wasn't allowed in because i'm a lady", user_id: 1, bathroom_id: 2, stars: 3)

Tag.create(tagname: "snug", bathroom_id: "1")
Tag.create(tagname: "roomy", bathroom_id: "2")
Tag.create(tagname: "roomy", bathroom_id: "3")

Vote.create(value: 1, user_id: 1, votable_id: 1, votable_type: "Bathroom")
Vote.create(value: 1, user_id: 1, votable_id: 1, votable_type: "Review")
Vote.create(value: -1, user_id: 1, votable_id: 2, votable_type: "Review")
Vote.create(value: 0, user_id: 1, votable_id: 3, votable_type: "Bathroom")
Vote.create(value: 1, user_id: 1, votable_id: 2, votable_type: "Bathroom")

# ajax tests

# $.ajax({
#   url: "api/bathrooms",
#   method: "POST",
#   data: {bathroom: {description: "a snug little buttvalley", lat: 1, lng: 235, single: true, gender: "men", tags: "lovely, filthy, Glory"}},
#   success: (data) => {console.log(data)},
#   error: (error) => {console.log(error)}
# })
