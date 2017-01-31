class Api::ReviewsController < ApplicationController
  before_action :match_review, only: [:update, :destroy]

  def create
    new_params = review_params
    new_params[:user_id] = current_user.id
    @review = Review.new(new_params)
    if @review.save
      @bathroom = Bathroom.find_by_id(new_params[:bathroom_id])
      render "api/bathrooms/show"
    else
      @errors = @review.errors.full_messages
      error_render(@errors)
    end
  end

  def update
    @review = Review.find_by_id(params[:id])
    new_params = review_params
    new_params[:user_id] = current_user.id

    if @review.update_attributes(new_params)
      @bathroom = Bathroom.find_by_id(new_params[:bathroom_id])
      render "api/bathrooms/show"
    else
      @errors = @review.errors.full_messages
      error_render(@errors)
    end
  end

  def destroy
    @review = Review.find_by_id(params[:id])
    new_params = review_params
    new_params[:user_id] = current_user.id


    @review.destroy
    @bathroom = Bathroom.find_by_id(new_params[:bathroom_id])
    render "api/bathrooms/show"

  end

  private

  def review_params
    params.permit(:review).require(:body, :bathroom_id)
  end

  def match_review
    if current_user.id != Review.find_by_id(params[:id]).user_id
      @errors = ["Unable to edit other people's reviews."],
      error_render(@errors)
    end
  end

  def error_render(errors)
    @errors = errors
    render(
      "api/shared/errors",
      status: 422
    )
  end

end
