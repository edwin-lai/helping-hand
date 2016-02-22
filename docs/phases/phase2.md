# Phase 2: Fundraisers Model, API, and basic APIUtil (1.5 days)

## Rails
### Models
* Fundraiser

### Controllers
* Api::FundraisersController (create, destroy, index, show, update)

### Views
* fundraisers/index.json.jbuilder
* fundraisers/show.json.jbuilder

## Flux
### Views (React Components)

### Stores

### Actions
* ApiActions.receiveAllFundraisers -> triggered by ApiUtil
* ApiActions.receiveSingleFundraiser
* ApiActions.deleteFundraiser

### ApiUtil
* ApiUtil.fetchAllFundraisers
* ApiUtil.fetchSingleFundraiser
* ApiUtil.createFundraiser
* ApiUtil.editFundraiser
* ApiUtil.destroyFundraiser

## Gems/Libraries
* Flux Dispatcher (npm)
* React, etc. (npm)
