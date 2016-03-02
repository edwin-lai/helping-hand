class Api::DonationsController < ApplicationController
  before_action :require_login, except: [:index, :show]

  def index
    if params[:fundraiser_id]
      @donations = Donation.includes(:user).where(
        fundraiser_id: params[:fundraiser_id]
      ).order(
        created_at: :desc
      )
    elsif params[:user_id]
      @donations = Donation.includes(:fundraiser).where(
        user_id: params[:user_id]).order(created_at: :desc)
    end
    render :index
  end

  def new
    @donation = Donation.new
  end

  def create
    @donation = Donation.new(donation_params)
    if @donation.save
      @donation.user.update(bank: @donation.user.bank - @donation.amount)
      recipient = @donation.fundraiser.user
      recipient.update(bank: recipient.bank + @donation.amount)
      render :show
    else
      render json: { errors: @donation.errors.full_messages }, status: 422
    end
  end

  def show
    @donation = Donation.find_by_id(params['id'])
  end

  def edit
    @donation = Donation.find_by_id(params['id'])
    require_correct_user
  end

  def update
    @donation = Donation.find_by_id(params['id'])
    @donation.update!(update_donation_params)
    require_correct_user
    render :show if current_user.id == @donation.user_id
  end

  private

  def require_login
    redirect_to :root unless current_user
  end

  def require_correct_user
    redirect_to :root unless current_user.id == @donation.user_id
  end

  def donation_params
    params.require(:donation).permit(
      :amount,
      :user_id,
      :fundraiser_id,
      :comment,
      :visible
    )
  end

  def update_donation_params
    params.require(:donation).permit(:comment)
  end
end
