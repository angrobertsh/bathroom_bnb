class Api::BathroomsController < ApplicationController

  def show
    @bathroom = Bathroom.find_by_id(params[:id])
  end

  def create

    # Only a problem if you create a bathroom with ajax--no db level validation for logged in
    if logged_in? == false
      @errors = ["Please log in to review a bathroom."]
      render "api/shared/error"
    end

    @bathroom = Bathroom.new(bathroom_params)
    if @bathroom.save
      @tags = bathroom_params[:tags].split(",").map(&:lstrip).map(&:downcase)
      @tags.each{|tagname| Tag.create({tagname: tagname, bathroom_id: @bathroom.id}}
      render "api/bathrooms/show"
    else
      @errors = @bathroom.errors.full_messages
      render(
        "api/shared/error",
        status: 422
      )
    end

  end

  def update
    @bathroom = Bathroom.find_by_id(params[:id])
    if @bathroom.update_attributes(bathroom_params)
      render "api/bathrooms/show"
    else
      @errors = @bathroom.errors.full_messsages
      render(
        "api/shared/error",
        status: 422
      )
    end
  end

  private

  def bathroom_params
    params.require(:bathroom).permit(:url, :lat, :lng, :gender, :description, :tags, :single)
  end

end
