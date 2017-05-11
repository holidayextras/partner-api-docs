# Holiday Extras Partner API Documentation

## Overview

Holiday Extras Partner API Documentation. Documentation to give to partners who would like to integrate with our API.

## Contributing

### Installation

Setting up ruby:

    curl -sSL https://get.rvm.io | bash -s stable
    rvm install ruby-2.4.1
    gem install bundler
    bundle install

### Running locally

    bundle exec jekyll serve

Then open [http://127.0.0.1:4000/](http://127.0.0.1:4000/).

### Testing

    rake

## ToDo's (should probably raise as issues)

- Add linting, plus everyting else a good repo should have (Contributing md file) - Run past forkability
- Wire up CI, Travis or Circle, for auto build on change
- Add Google Analytics
- Update examples to be valid dates etc
- Make live code examples
- Rework DE pages to so they are a language switch on the EN pages. Also need 100% coverage

## Scibbles so they don't get lost

How to export from DokuWiki txt files to Markdown

    php ../../dokuwiki-to-markdown-converter/convert.php ./

Need, clear and test for npm script
https://medium.com/quality-functions/how-to-design-and-build-a-hyper-fast-test-automation-stack-84dc6985e569#.4ux1mej6e

Look at Google Developer docs. They are some of the best around. https://developers.google.com/actions/  https://docs.api.ai/
