# Amaro Link

[Amaro Link](http://www.amaro.link/) is a web application made to easily share URLs between devices.
It is developed using [React](https://github.com/facebook/react) and [Meteor](https://github.com/meteor/meteor).

This project was inspired by an [Andrew Mead's course](https://mead.io/).

## Installation

Make sure you have Meteor >= 1.6 installed.

1.  Clone or unzip the repo into a folder
2.  Install dependencies via `meteor npm install`
3.  Run via `meteor`

## How to contribute

Feel free to contribute to the project. There are some open issues that address some [known problems](https://github.com/GoodNello/amaro-link/issues).

## Changelog

### 1.0

* Limited app to only have 9999 links saved
* Codes now expire after 20 minutes
* Removed /development component

### 0.3

#### 0.3.3

* Added more information for NotFound component
* Added focus property for pin input
* Changed footer showLess prop behavior
* Added link to /development in /howtouse

#### 0.3.2

* Added :hover property for Header component
* Footer component now shows less links in certain pages
* Changed the way urls are retrieved using the form
* Modified API url handling
* Minor text corrections

#### 0.3.1

* Added Google Analytics

#### 0.3.0

* Changed API url to api/link
* **beta1** Added support for API keys
* **alpha4** Merged fixes from v0.2.4
* **alpha3** Initial API support (POST)
* **alpha2** Initial API support (GET)
* **alpha1** Refactored code

### 0.2

#### 0.2.4

* Added link to the Amaro Team website
* Removed older versions from changelog

#### 0.2.3

* Fixed pin input not working correctly

#### 0.2.2

* Fixed security issues

#### 0.2.1

* Prepartion for Heroku deployment

#### 0.2.0

* Added pages for development and how to use
* **alpha4** Styled components
* **alpha4** Added pin input boxesthanks to [react-pin-input](https://github.com/arunghosh/react-pin-input)
* **alpha3** Refactored code
* **alpha3** Added controlled inputs
* **alpha3** Added changelog page
* **alpha3** Moved /code to /getcode
* **alpha2** Refactored code
* **alpha1** Refactored code
* **alpha1** Support for accessing links via form

### 0.1.0

* Removed non-working form for accessing links via form (exp. in next release)
* **alpha2** Input validation via [simpl-schema](https://github.com/aldeed/meteor-simple-schema)
* **alpha2** Redirection via code in URL
* **alpha1** First developer release
