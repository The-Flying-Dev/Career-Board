class Job < ApplicationRecord
  #validations
  validates :company, :position, :description, presence: true
end
