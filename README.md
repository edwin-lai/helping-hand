# Helping Hand

[Heroku link][heroku]

[heroku]: http://helping-hand.herokuapp.com

## Minimum Viable Product

Helping Hand is a web application inspired by GoFundMe built using Ruby on Rails
and React.js. Helping Hand allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Create, read, update, and delete fundraisers
- [ ] Users can donate money to other users
      (login not necessary to donate on real site)
- [ ] Users can withdraw money from fundraisers
- [ ] Users can search fundraisers by title

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

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Fundraisers Model, API, and basic APIUtil (1.5 days)

**Objective:** Fundraisers can be created, read, edited and destroyed through
the API.

- [ ] create `Fundraiser` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for notes (`Fundraiser`)
- [ ] jBuilder views for notes
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Fundraisers can be created, read, edited and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each fundraiser component, building out the flux loop as needed.
  - [ ] `FundraisersIndex`
  - [ ] `FundraiserIndexItem`
  - [ ] `FundraiserForm`
- [ ] save Fundraisers to the DB when the form loses focus or is left idle
  after editing.

### Phase 4: Start Styling (1 day)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Donations (1 day)

**Objective:** Donations belong to Fundraisers, and can be viewed by fundraiser.

- [ ] create `Donation` model
- build out API, Flux loop, and components for:
  - [ ] Donation CRUD
  - [ ] adding donations requires a fundraiser
  - [ ] viewing donations by fundraiser
- [ ] Use CSS to style new views

### Phase 6: Withdrawal (0.5 days)

**Objective:** Allow users to withdraw funds they have raised.
(Do I even need to have real money integration in my project??)

- build out API, Flux loop, and components for:
  - [ ] fetching funds raised by user
  - [ ] transferring funds to user
- [ ] Style new elements

### Phase 7: Search Fundraisers by Title (0.5 days)

**objective:** Implement search-by-title utility.

- build out API, Flux loop, and components for:
  - [ ] fetching titles by matching letter from database
  - [ ] rendering search results on webpage for user to use
- [ ] Style new elements

### Phase 8: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (2+ days)
- [ ] User page listing fundraisers and donations by user (0.5 days)
- [ ] Assign tags and/or categories to fundraisers (0.5 - 1 days)
- [ ] Search fundraisers by tag and/or category (0.5 - 1 days)
- [ ] Multiple sessions (TBD)

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
