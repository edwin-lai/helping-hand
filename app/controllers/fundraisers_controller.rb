class FundraisersController < ApplicationController
  def index
    @fundraisers = Fundraiser.all
  end

  def new
    @fundraiser = Fundraiser.new
  end

  def create
    @fundraiser = Fundraiser.new
  end

  def show
    @fundraiser = Fundraiser.find_by_id(params['id'])
  end

  def edit
    @fundraiser = Fundraiser.find_by_id(params['id'])
  end

  def update
    @fundraiser = Fundraiser.find_by_id(params['id'])
    # edit fundraiser using params
    @fundraiser.save!
  end

  def destroy
    @fundraiser = Fundraiser.find_by_id(params['id'])
    @fundraiser.destroy!
  end
end
