@bathrooms.each do |bathroom|
  json.partial! "api/bathrooms/bathroom", bathroom: bathroom
end
