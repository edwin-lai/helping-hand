# Schema Information

## fundraisers
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
image_link  | string    | not null
user_id     | integer   | not null, foreign key (references user), indexed
goal_amount | integer   | not null

## donations
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
amount        | integer   | not null
user_id       | integer   | not null, foreign key (references user), indexed
fundraiser_id | string    | not null, foreign key (references fundraiser), indexed
comment       | text      |

## users
column name          | data type | details
---------------------|-----------|-----------------------
id                   | integer   | not null, primary key
email                | string    | not null, indexed, unique
password_digest      | string    | not null
session_token        | string    | not null, indexed, unique
first_name           | string    | not null
last_name            | string    | not null
funds_raised         | integer   | not null
credit_card_number   | integer   |
credit_card_exp_date | date      |
CVV                  | integer   |
bank_account_number  | integer   |
routing_number       | integer   |
