# Faubourg Simone: mobile app [![GitHub license](https://img.shields.io/github/license/proustibat/fbrgsmn.mobile.app.svg)](https://github.com/proustibat/fbrgsmn.mobile.app/blob/master/LICENSE) [![Twitter Follow](https://img.shields.io/twitter/follow/faubourgsimone.svg?style=social&label=Follow)](https://twitter.com/faubourgsimone)

Source code of [Faubourg Simone](http://faubourgsimone.paris/) mobile applications built with Ionic. 

------------

| <a href='https://play.google.com/store/apps/details?id=com.mfkr.faubourg.simone&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png' width="150"/></a> <br/> <a href='https://itunes.apple.com/fr/app/faubourg-simone-radio/id617687434&pcampaignid=GITHUB'><img alt='Get it on Apple Store' src='https://devimages-cdn.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg' width="132"/></a> | [![Build Status](https://travis-ci.org/proustibat/fbrgsmn.mobile.app.svg?branch=master)](https://travis-ci.org/proustibat/fbrgsmn.mobile.app) <br/> [![Sonar quality gate](https://sonarcloud.io/api/badges/gate?key=fbrgsmn.mobile.app)](https://sonarcloud.io/dashboard?id=fbrgsmn.mobile.app) </br> [![Code Climate](https://codeclimate.com/github/proustibat/fbrgsmn.mobile.app/badges/gpa.svg)](https://codeclimate.com/github/proustibat/fbrgsmn.mobile.app) | [![Maintenance](https://img.shields.io/maintenance/yes/2018.svg)](https://github.com/proustibat/fbrgsmn.mobile.app/commits/master) <br/> [![GitHub last commit](https://img.shields.io/github/last-commit/proustibat/fbrgsmn.mobile.app.svg)](https://github.com/proustibat/fbrgsmn.mobile.app/commits/master) <br/> [![Open issues](https://sonarcloud.io/api/badges/measure?key=fbrgsmn.mobile.app&metric=open_issues)](https://sonarcloud.io/component_measures?id=fbrgsmn.mobile.app&metric=open_issues) | [![Greenkeeper badge](https://badges.greenkeeper.io/proustibat/fbrgsmn.mobile.app.svg)](https://greenkeeper.io/) <br/> [![Dependencies Status](https://david-dm.org/proustibat/fbrgsmn.mobile.app/status.svg)](https://david-dm.org/proustibat/fbrgsmn.mobile.app) <br/> [![DevDependencies Status](https://david-dm.org/proustibat/fbrgsmn.mobile.app/dev-status.svg)](https://david-dm.org/proustibat/fbrgsmn.mobile.app?type=dev) |
| --- | :---- | :---- | :---- 


----------------

# Features
- Listening to our radio
- See content of our website: Pola / Calepins / Dans le casque

----------------

# For Developers


## Prerequisites
Be sure [Ionic](https://ionicframework.com/) and [Cordova](https://cordova.apache.org/) are installed:

```bash
cordova -v
ionic -v
```

If it's not the case, run `npm install -g ionic cordova`.

You also needs sdks:
- For Android development we recommand to install [Android Studio](https://developer.android.com/studio/index.html). 
- For IOS you don't have the choice: you need [XCode](https://developer.apple.com/xcode/)

Run `ionic info` to be sure your system is ok.


## Installation

```bash
git clone git@github.com:proustibat/fbrgsmn.mobile.app.git
cd fbrgsmn.mobile.app
ionic cordova prepare
```

Answer `Y` to the following question to run `npm install` automatically:
```bash
? Looks like a fresh checkout! No ./node_modules directory found. Would you like to install project dependencies? (Y/n) 
```

## Watching

### In a browser
```bash
ionic serve -l
```

### On a device
```bash
ionic cordova run android -l -c -s
```

### On a simulator

```bash
ionic cordova emulate ios --target="iPhone-8"
```

## Build
```bash
ionic cordova build ios android
```

## Code documentation is [available here](https://proustibat.github.io/fbrgsmn.mobile.app/)

## Contribute
- Issue Tracker: [https://github.com/proustibat/fbrgsmn.mobile.app/issues](https://github.com/proustibat/fbrgsmn.mobile.app/issues)
- Source Code: [https://github.com/proustibat/fbrgsmn.mobile.app](https://github.com/proustibat/fbrgsmn.mobile.app)

## Support
If you are having issues, please let us know: tech.team@faubourgsimone.com

## License
The project is licensed under the [GNU Affero General Public License v3.0 license](LICENSE)

--------------------

## Tools

### Travis CI
- lint
- sonar scan
- build
- documentation
- deploy doc

### CodeClimate
- tslint 

### Sonarqube
We use **[Sonarqube](https://www.sonarqube.org/)** on [Sonarcloud.io](https://about.sonarcloud.io/get-started/) to keep our code safe.
The dashboard is available here: [https://sonarcloud.io/dashboard?id=fbrgsmn.mobile.app](https://sonarcloud.io/dashboard?id=fbrgsmn.mobile.app)

### Greenkeeper

### Typedoc

### Commitizen
We use [commitizen](https://github.com/commitizen/cz-cli), so if you wanna contribute to the project and create a pull request, use it by running `git cz` instead of `git commit`.

--------------------

## A glance at our actual Sonarqube metrics

#### Complexity
How simple or complicated the control flow of the application is. 

[![Complexity](https://sonarcloud.io/api/badges/measure?key=fbrgsmn.mobile.app&metric=complexity)](https://sonarcloud.io/component_measures?id=fbrgsmn.mobile.app&metric=complexity) 
[![Complexity per file](https://sonarcloud.io/api/badges/measure?key=fbrgsmn.mobile.app&metric=file_complexity)](https://sonarcloud.io/component_measures?id=fbrgsmn.mobile.app&metric=file_complexity)
[![Cognitive Complexity](https://sonarcloud.io/api/badges/measure?key=fbrgsmn.mobile.app&metric=cognitive_complexity)](https://sonarcloud.io/component_measures?id=fbrgsmn.mobile.app&metric=cognitive_complexity)


Cyclomatic Complexity measures the minimum number of test cases requiref for full test coverage. 
Cognitive Complexity is a measure of how difficult the application is to understand

*Complexity for Javascript or typescript is incremented by one for each:*
- *function (i.e non-abstract and non-anonymous constructors, functions, procedures or methods)*
- *if statement*
- *short-circuit (AKA lazy) logical conjunction (&&)*
- *short-circuit (AKA lazy) logical disjunction (||)*
- *ternary conditional expressions*
- *loop*
- *case clauses of a switch statement*
- *throw and catch statement*
- *return statement (except when it is the very last statement of a function)*

*Complexity of the web page is measured by counting the decision tags (such as if and forEach) and boolean operators in expressions (&& and ||), plus one for the body of the document. 
The decision tags and the operators are configurable through the Complexity rule.*


#### Documentation & sizes

[![Lines](https://sonarcloud.io/api/badges/measure?key=fbrgsmn.mobile.app&metric=lines)](https://sonarcloud.io/component_measures?id=fbrgsmn.mobile.app&metric=lines) 
[![Lines of code](https://sonarcloud.io/api/badges/measure?key=fbrgsmn.mobile.app&metric=ncloc)](https://sonarcloud.io/component_measures?id=fbrgsmn.mobile.app&metric=ncloc) 
[![Comment lines](https://sonarcloud.io/api/badges/measure?key=fbrgsmn.mobile.app&metric=comment_lines)](https://sonarcloud.io/component_measures?id=fbrgsmn.mobile.app&metric=comment_lines) 
[![Comments (%)](https://sonarcloud.io/api/badges/measure?key=fbrgsmn.mobile.app&metric=comment_lines_density)](https://sonarcloud.io/component_measures?id=fbrgsmn.mobile.app&metric=comment_lines_density)

[![Directories](https://sonarcloud.io/api/badges/measure?key=fbrgsmn.mobile.app&metric=directories)](https://sonarcloud.io/component_measures?id=fbrgsmn.mobile.app&metric=directories) 
[![Files](https://sonarcloud.io/api/badges/measure?key=fbrgsmn.mobile.app&metric=files)](https://sonarcloud.io/component_measures?id=fbrgsmn.mobile.app&metric=files)
[![Classes](https://sonarcloud.io/api/badges/measure?key=fbrgsmn.mobile.app&metric=classes)](https://sonarcloud.io/component_measures?id=fbrgsmn.mobile.app&metric=classes) 
[![Functions](https://sonarcloud.io/api/badges/measure?key=fbrgsmn.mobile.app&metric=functions)](https://sonarcloud.io/component_measures?id=fbrgsmn.mobile.app&metric=functions)


#### Duplications

[![Duplicated blocks](https://sonarcloud.io/api/badges/measure?key=fbrgsmn.mobile.app&metric=duplicated_blocks)](https://sonarcloud.io/component_measures?id=fbrgsmn.mobile.app&metric=duplicated_blocks) 
[![Duplicated lines](https://sonarcloud.io/api/badges/measure?key=fbrgsmn.mobile.app&metric=duplicated_lines)](https://sonarcloud.io/component_measures?id=fbrgsmn.mobile.app&metric=duplicated_lines)


#### Issues

[![Open issues](https://sonarcloud.io/api/badges/measure?key=fbrgsmn.mobile.app&metric=open_issues)](https://sonarcloud.io/component_measures?id=fbrgsmn.mobile.app&metric=open_issues)
[![Confirmed issues](https://sonarcloud.io/api/badges/measure?key=fbrgsmn.mobile.app&metric=confirmed_issues)](https://sonarcloud.io/component_measures?id=fbrgsmn.mobile.app&metric=confirmed_issues)
[![Won't fix issues](https://sonarcloud.io/api/badges/measure?key=fbrgsmn.mobile.app&metric=wont_fix_issues)](https://sonarcloud.io/component_measures?id=fbrgsmn.mobile.app&metric=wont_fix_issues) 


#### Maintainability

Issues in this domain mark code that will be more difficult to update competently than it should

[![Code smells](https://sonarcloud.io/api/badges/measure?key=fbrgsmn.mobile.app&metric=code_smells)](https://sonarcloud.io/component_measures?id=fbrgsmn.mobile.app&metric=code_smells)
[![SQALE Rating](https://sonarcloud.io/api/badges/measure?key=fbrgsmn.mobile.app&metric=sqale_rating)](https://sonarcloud.io/component_measures?id=fbrgsmn.mobile.app&metric=sqale_rating)

Rating given to the project related to the value of the Technical Debt Ratio. 
The default Maintainability Rating grid is:
- A=0-0.05, 
- B=0.06-0.1,
- C=0.11-0.20, 
- D=0.21-0.5, 
- E=0.51-1

The Maintainability rating scale can be alternately stated by saying that if the outstanding remediation cost is:
* <=5% of the time that has already gone into the application, the rating is A 
* between 6 to 10% the rating is a B 
* between 11 to 20% the rating is a C 
* between 21 to 50% the rating is a D
* anything over 50% is an E

#### Technical debt
Effort to fix all maintainability issues. The measure is stored in minutes. An 8-hour day is assumed when values are shown in days. (The value of the cost to develop a line of code is 0.06 days)

[![Technical debt](https://sonarcloud.io/api/badges/measure?key=fbrgsmn.mobile.app&metric=sqale_index)](https://sonarcloud.io/component_measures?id=fbrgsmn.mobile.app&metric=sqale_index) 
[![Technical debt ratio](https://sonarcloud.io/api/badges/measure?key=fbrgsmn.mobile.app&metric=sqale_debt_ratio)](https://sonarcloud.io/component_measures?id=fbrgsmn.mobile.app&metric=sqale_debt_ratio)


#### Reliability

Issues in this domain mark code where you will get behavior other than what was expected.

[![Bugs](https://sonarcloud.io/api/badges/measure?key=fbrgsmn.mobile.app&metric=bugs)](https://sonarcloud.io/component_measures?id=fbrgsmn.mobile.app&metric=bugs)
[![Reliability remediation effort](https://sonarcloud.io/api/badges/measure?key=fbrgsmn.mobile.app&metric=reliability_remediation_effort)](https://sonarcloud.io/component_measures?id=fbrgsmn.mobile.app&metric=reliability_remediation_effort)
[![Reliability Rating](https://sonarcloud.io/api/badges/measure?key=fbrgsmn.mobile.app&metric=reliability_rating)](https://sonarcloud.io/component_measures?id=fbrgsmn.mobile.app&metric=reliability_rating)

**Reliability remediation effort**

Effort to fix all bug issues. The measure is stored in minutes. An 8-hour day is assumed when values are shown in days.

**Reliability rating**

- A or 1 = 0 Bug
- B or 2 = at least 1 Minor Bug
- C or 3 = at least 1 Major Bug
- D or 4 = at least 1 Critical Bug
- E or 5 = at least 1 Blocker Bug


#### Security

[![Vulnerabilities](https://sonarcloud.io/api/badges/measure?key=fbrgsmn.mobile.app&metric=vulnerabilities)](https://sonarcloud.io/component_measures?id=fbrgsmn.mobile.app&metric=vulnerabilities)
[![Security remediation effort](https://sonarcloud.io/api/badges/measure?key=fbrgsmn.mobile.app&metric=security_remediation_effort)](https://sonarcloud.io/component_measures?id=fbrgsmn.mobile.app&metric=security_remediation_effort)
[![Security Rating](https://sonarcloud.io/api/badges/measure?key=fbrgsmn.mobile.app&metric=security_rating)](https://sonarcloud.io/component_measures?id=fbrgsmn.mobile.app&metric=security_rating)


**Security remediation effort**

Effort to fix all vulnerability issues. The measure is stored in minutes in the DB. An 8-hour day is assumed when values are shown in days.

**Security rating**

- A = 0 Vulnerability
- B = at least 1 Minor Vulnerability
- C = at least 1 Major Vulnerability
- D = at least 1 Critical Vulnerability
- E = at least 1 Blocker Vulnerability