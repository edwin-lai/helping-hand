# Phase 2: Fundraisers Model, API, and basic APIUtil (1.5 days)

## Rails
### Models
* Fundraiser

### Controllers
* FundraisersController (create, destroy, index, show, update)

### Views
* fundraisers/index.json.jbuilder
* fundraisers/show.json.jbuilder

## Flux
### Views (React Components)

### Stores

### Actions
* FundraiserActions.receiveAllFundraisers -> triggered by FundraiserUtil
* FundraiserActions.receiveSingleFundraiser
* FundraiserActions.deleteFundraiser

### Util
* FundraiserUtil.fetchAllFundraisers
* FundraiserUtil.fetchSingleFundraiser
* FundraiserUtil.createFundraiser
* FundraiserUtil.editFundraiser
* FundraiserUtil.destroyFundraiser

## Gems/Libraries
* Flux Dispatcher (npm)
* React, etc. (npm)
