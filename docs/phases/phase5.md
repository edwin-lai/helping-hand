# Phase 5: Donations (1 day)

## Rails
### Models
* Donation

### Controllers
* Api::DonationsController (create, index, show)

### Views
* /fundraisers/:fundraiser_id/donations/index.json.jbuilder

## Flux
### Views (React Components)
* Donations
  - Donation
* DonationForm
* FundraiserDonation
  - DonationStatus

### Stores
* Donation
* DonationForm

### Actions
* ApiActions.receiveDonationsByFundraiser -> triggered by ApiUtil
* ApiActions.receiveDonationsByUser -> triggered by ApiUtil
* ApiActions.receiveSingleDonation
* DonationActions.fetchDonationsByFundraiser -> triggers ApiUtil
* DonationActions.fetchDonationsByUser -> triggers ApiUtil
* DonationActions.fetchSingleDonation
* DonationActions.createDonation
* DonationActions.updateDonation

### ApiUtil
* ApiUtil.fetchAllDonations
* ApiUtil.fetchSingleDonation
* ApiUtil.createDonation
* ApiUtil.updateDonation

## Gems/Libraries
* stripe
