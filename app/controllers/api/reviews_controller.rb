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
      render_errors(@errors)
    end
  end

  def update
    @review = Review.find_by_id(params[:id])

    if @review.update_attributes(review_params)
      @bathroom = Bathroom.find_by_id(@review.bathroom_id)
      render "api/bathrooms/show"
    else
      @errors = @review.errors.full_messages
      render_errors(@errors)
    end
  end

  def destroy
    @review = Review.find_by_id(params[:id])
    @bathroom = Bathroom.find_by_id(@review.bathroom_id)
    @review.destroy
    render "api/bathrooms/show"
  end

  private

  def review_params
    params.permit(:review).require(:body, :bathroom_id)
  end

  def match_review
    if current_user.id != Review.find_by_id(params[:id]).user_id
      @errors = ["Unable to edit other people's reviews."],
      render_errors(@errors)
    end
  end

end
