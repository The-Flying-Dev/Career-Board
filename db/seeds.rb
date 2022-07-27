# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Job.create(
  company: 'Amazon',
  position: 'Staff Software Engineer',
  description: 'Be the lead technical resource'
)

Job.create(
  company: 'Youtube',
  position: 'Data Scientist',
  description: 'make sense of data'
)

Job.create(
  company: 'KPMG',
  position: 'CEO',
  description: 'Lead the company growth'
)