class Api::VotesController < ApplicationController
  before_action :ensure_logged_in, only: [:create]

  def create
    new_params = vote_params
    new_params[:user_id] = current_user.id
    @vote = Vote.find_by_votable_type_and_votable_id_and_user_id(vote_params[:votable_type], vote_params[:votable_id], current_user.id)
    if @vote.nil?
      Vote.create(new_params)
    else
      if @vote.vote_val == vote_params[:vote_val].to_i
        @vote.update({vote_val: 0})
      else
        @vote.update(new_params)
      end
    end
    if new_params[:votable_type] == "Review"
      @bathroom = Review.find_by_id(new_params[:votable_id]).bathroom
    else
      @bathroom = Bathroom.find_by_id(new_params[:votable_id])
    end
    render "api/bathrooms/show"
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

end
