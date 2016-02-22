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

### FundraiserFormStore

Holds un-persisted fundraiser data to send to the API.

##### Actions:
- `receiveFundraiserFormParams`

##### Listeners:
- `FundraiserForm`

### DonationStore

Holds all persisted donation data.

##### Actions:
- `receiveAllDonations`
- `receiveSingleDonation`

##### Listeners:
- `DonationIndex`

### DonationFormStore

Holds un-persisted donation data to send to the API.

##### Actions:
- `receiveDonationFormParams`

##### Listeners:
- `DonationForm`

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
