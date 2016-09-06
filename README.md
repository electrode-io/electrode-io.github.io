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
