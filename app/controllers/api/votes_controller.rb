class Api::VotesController < ApplicationController
  before_action :ensure_logged_in, only: [:create, :update]

  def create
    new_params = vote_params
    new_params[:user_id] = current_user.id
    @vote = Vote.new(new_params)
    if @vote.save
      render_bathroom
    else
      @errors = @vote.errors.full_messages
      render_errors(@errors)
    end
  end

  def update
    new_params = vote_params
    new_params[:user_id] = current_user.id
    @vote = Vote.find_by_votable_type_and_votable_id_and_user_id(vote_params[:votable_type], vote_params[:votable_id], current_user.id)
    if @vote.vote_val == new_params[:vote_val].to_i
      new_params[:vote_val] = 0
    end
    if @vote.update(new_params)
      render_bathroom
    else
      @errors = @vote.errors.full_messages
      render_errors(@errors)
    end
  end

  private

  def vote_params
    params.permit(:vote).require(:value, :votable_id, :votable_type)
  end

  def ensure_logged_in
    if logged_in? == false
      @errors = ["Please log in to upvote."]
      render "api/shared/error"
    end
  end

  def render_bathroom
    if vote_params[:votable_type] == "Review"
      @bathroom = Review.find_by_id(vote_params[:votable_id]).bathroom
    else
      @bathroom = Bathroom.find_by_id(vote_params[:votable_id])
    end
    render "api/bathrooms/show"
  end

  def render_errors(errors)
    @errors = errors
    render(
      "api/shared/error",
      status: 422
    )
  end

end
