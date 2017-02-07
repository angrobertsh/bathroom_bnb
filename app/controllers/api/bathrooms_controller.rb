class Api::BathroomsController < ApplicationController
  before_action :ensure_logged_in, only: [:create]

  def index
    @bathrooms = Bathroom.in_bounds(params[:bounds])
  end

  def show
    @bathroom = Bathroom.find_by_id(params[:id])
  end

  def create
    @bathroom = Bathroom.new(bathroom_params)
    if @bathroom.save
      @tags = bathroom_params[:tags].split(",").map(&:lstrip).map(&:downcase)
      @tags.each{|tagname| Tag.create({tagname: tagname, bathroom_id: @bathroom.id})}
      render "api/bathrooms/show"
    else
      @errors = @bathroom.errors.full_messages
      render_errors(@errors)
    end
  end

  def update
    @bathroom = Bathroom.find_by_id(params[:id])
    if @bathroom.update_attributes(bathroom_params)
      render "api/bathrooms/show"
    else
      @errors = @bathroom.errors.full_messages
      render_errors(@errors)
    end
  end

  private

  def bathroom_params
    params.require(:bathroom).permit(:url, :lat, :lng, :gender, :description, :tags, :single)
  end

  def ensure_logged_in
    # Only a problem if you create a bathroom with ajax--no db level validation for logged in
    if logged_in? == false
      @errors = ["Please log in to review a bathroom."]
      render "api/shared/error"
    end
  end

end
