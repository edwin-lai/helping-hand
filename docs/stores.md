# Flux Stores

### FundraiserStore

Holds all persisted fundraiser data.

##### Actions:
- `receiveAllFundraisers`
- `receiveSingleFundraiser`
- `removeFundraiser`

##### Listeners:
- `FundraisersIndex` (passes to `FundraiserIndexItem` via props)
- `FundraiserDetail`

### DonationStore

Holds all persisted donation data.

##### Actions:
- `receiveAllDonations`
- `receiveSingleDonation`

##### Listeners:
- `DonationIndex`

### SearchStore

Holds search parameters to send to the API.

##### Actions:
- `receiveSearchParams`

##### Listeners:
- `SearchIndex`

### SearchSuggestionStore

Holds typeahead suggestions for search.

##### Actions:
- `receiveSearchSuggestions`

##### Listeners:
- `SearchSuggestions`
