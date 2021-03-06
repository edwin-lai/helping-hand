# Schema Information

## fundraisers
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
title         | string    | not null
description   | text      | not null
image_url     | string    | not null
thumbnail_url | string    | not null
user_id       | integer   | not null, foreign key (references user), indexed
goal_amount   | integer   | not null
category      | string    | not null, used only in bonus

## donations
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
amount        | integer   | not null
user_id       | integer   | foreign key (references user), indexed
fundraiser_id | string    | not null, foreign key (references fundraiser), indexed
comment       | text      |
visible       | boolean   | not null

## users
column name          | data type | details
---------------------|-----------|-----------------------
id                   | integer   | not null, primary key
email                | string    | not null, indexed, unique
password_digest      | string    | not null
session_token        | string    | not null, indexed, unique
first_name           | string    | not null
last_name            | string    | not null
bank                 | integer   | not null
