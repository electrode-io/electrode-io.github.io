# electrode-io.github.io

[![ci][1]][2]

This repository contains the source for the Electrode documentation site, which
is generated using [Jekyll](http://jekyllrb.com/).

## Contributing

* Commit contributions to the `master` branch
* Use [Markdown](https://daringfireball.net/projects/markdown/) when authoring
  new documentation

## Installation

### Prerequisites

* [Ruby](https://www.ruby-lang.org/en/)
* [Bundler](https://bundler.io/)

### Setup & Run

Install the project dependencies using Bundler:

```sh
npm run bootstrap
```

Run the server locally:

```sh
npm start
```

You should be able to access the site at: [127.0.0.1:4000](http://127.0.0.1:4000/)

## Deploying to GitHub Pages

Every push to `master` (i.e. every pull request merged) will automatically
build and deploy the website to `gh-pages`.

Explore the [Electrode.io](http://www.electrode.io/) Website.

Built with :heart: by [Team Electrode](https://github.com/orgs/electrode-io/people)
@WalmartLabs.

[1]: https://github.com/electrode-io/electrode-io.github.io/workflows/ci/badge.svg
[2]: https://github.com/electrode-io/electrode-io.github.io/actions
