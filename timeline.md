# Helping Hand

Tagline: Show that you care

[Heroku link][heroku]

[heroku]: http://helping-hand.herokuapp.com

## Minimum Viable Product

Helping Hand is a web application inspired by GoFundMe built using Ruby on Rails
and React.js. Helping Hand allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [x] Create an account
- [x] Log in / Log out
- [x] Create, read, update, and delete fundraisers
- [x] Users can donate CareCoins to other users
  - (login not necessary to donate on real site)
- [x] Users can search fundraisers by title

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### [Phase 1: Backend setup and User Authentication][phase-one] (0.5 days)

**Objective:** Functioning rails project with Authentication

- [x] create new project
- [x] create `User` model
- [x] authentication
- [x] user signup/signin pages
- [x] blank landing page after signin

### [Phase 2: Fundraisers Model, API, and basic APIUtil][phase-two] (1.5 days)

**Objective:** Fundraisers can be created, read, edited and destroyed through
the API.

- [x] create `Fundraiser` model
- [x] seed the database with a small amount of test data
- [x] CRUD API for fundraisers (`Fundraiser`)
- [x] jBuilder views for fundraisers
- [x] setup Webpack & Flux scaffold
- [x] setup `APIUtil` to interact with the API
- [x] test out API interaction in the console.

### [Phase 3: Flux Architecture and Router][phase-three] (1.5 days)

**Objective:** Fundraisers can be created, read, edited and destroyed with the
user interface.

- [x] setup the flux loop with skeleton files
- [x] setup React Router
- implement each fundraiser component, building out the flux loop as needed.
  - [x] `FundraisersIndex`
  - [x] `FundraiserIndexItem`
  - [x] `FundraiserForm`
  - [x] `Fundraiser`
- [x] write auth forms in React
- [x] integrate Cloudinary image upload

Brooke's TODOs:

- [x] Reset window.currentUser
- [x] Protect resources with before actions "401 restricted resource"

### [Phase 4: Start Styling][phase-four] (1 day)

**Objective:** Existing pages (including signup/signin) will look good.

- [x] create a basic style guide
- [x] position elements on the page
- [x] add basic colors & styles

### [Phase 5: Donations][phase-five] (1 day)

**Objective:** Donations belong to Fundraisers, and can be viewed by fundraiser.

- [x] create `Donation` model
- build out API, Flux loop, and components for:
  - [x] Donation CRUD
  - [x] adding donations requires a fundraiser
  - [x] viewing donations by fundraiser
  - [x] Users cannot donate more CareCoins than they have in their bank
- [x] Use CSS to style new views

### [Phase 6: Search Fundraisers by Title][phase-six] (0.5 days)

**Objective:** Implement search-by-title utility.

- build out API, Flux loop, and components for:
  - [x] fetching titles by matching letter from store
  - [x] rendering search results on webpage for user to use
- [x] Style new elements

### [Phase 7: Styling Cleanup and Seeding][phase-seven] (1 day)

**Objective:** Make the site feel more cohesive and awesome.

- [x] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [x] Add modals, transitions, and other styling flourishes.

### Bonus Features (2+ days)
I will probably get to some of these. However, they are not part of the
*minimum* viable product.
- [ ] [User page listing fundraisers and donations by user][bonus-one] (0.5 days)
- [x] Search fundraisers by category (0.5 - 1 days)
  - (This will be accomplished by refactoring Phase 7, so it will not get its
        own phase page.)
- [ ] Users can comment on fundraisers
- [ ] Multiple sessions (TBD)

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[phase-six]: ./docs/phases/phase6.md
[phase-seven]: ./docs/phases/phase7.md
[bonus-one]: ./docs/phases/bonus1.md
