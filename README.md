# Project Overview

In this project I was given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to stop work under app and I'm now left with an application with an incomplete test suite. My goal was to complete test suite and write some new tests in TDD paradigm.

## Requirements

Project was reviewed according to this [rubric](http://i.imgur.com/79L92ou.png).

# How to use

* To see this project on your PC you should just clone repository with command `git clone https://github.com/dalex01/fend-feedreader.git` and start build/index.html file.
* Or [click](http://dalex01.github.io/fend-feedreader)

## Features tested and implemented

* (implemented) RSS Feeds are defined
* (implemented) RSS Feeds has a URL defined and that the URL is not empty
* (implemented) RSS Feeds has a Name defined and that the Name is not empty
* (implemented) The menu is hidden by default
* (implemented) The menu changes visibility when the menu icon is clicked
* (implemented) Initial Entries exist when feed when feed is loaded
* (implemented) New Feed Selection changes content when new feed is loaded

## Features tested and NOT implemented

* (NOT implemented) New Feed should be added to allFeeds data structure by addFeed function

The test for the last not implemented feature is checking that:
1. length of the allFeeds increased by 1 after addition of new feed
2. new feed has defined name field and its length greater than zero
3. new feed has defined URL field and its length greater than zero