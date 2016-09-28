# electrode-io.github.io
This repository contains the source for the Electrode documentation site, which is generated using [Jekyll](http://jekyllrb.com/).

## Contributing

* Commit contributions to the `develop` branch.
* Always use [markdown](https://daringfireball.net/projects/markdown/) when authoring new documentation.


## Installation

### Pre-requisites

Requires **jekyll** and **bundler**. You can install them with **gem**:

```bash
$ gem install jekyll bundler
```
### Setup & Run

First, clone the repository and install the project dependencies using bundler:

```bash
$ git clone https://github.com/electrode-io/electrode-io.github.io.git  
$ cd electrode-io.github.io  
$ bundle install  
```

Run the server locally:

```bash
$ bundle exec jekyll serve
```

You should be able to access the site at: http://127.0.0.1:4000/

## Deploying to GitHub Pages

The site must be generated locally and deployed using [jgd](http://www.yegor256.com/2014/06/24/jekyll-github-deploy.html).

> NOTE: this should be done from a local clone of the **original repo**; make sure you're _**not**_ working in a fork.

First, make sure the `jgd` gem is installed by running `bundle install`.
Next, generate and deploy to `master` with the following command:

```bash
$ jgd --branch=master
```

Explore the [Electrode.io](http://www.electrode.io) Website.

Built with :heart: by [Team Electrode](https://github.com/orgs/electrode-io/people) @WalmartLabs.
