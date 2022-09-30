# Holiday Extras Partner API Documentation

## Overview

Documentation to give to partners who would like to integrate with our API.

## Contributing

### Installation

Setting up ruby (only need to be done once per machine):

    curl -sSL https://get.rvm.io | bash -s stable
    rvm install ruby-3.1.2
    gem install bundler
    bundle install

### Running locally

    rake start

Then open [http://127.0.0.1:4000/](http://127.0.0.1:4000/).

### Testing

    rake

## Deployment

Merges to master will automatically deploy changes via CI (currently running on travis-ci).
