@bathrooms.each do |bathroom|
  json.partial! "api/bathrooms/bathroom_abv", bathroom: bathroom
end
