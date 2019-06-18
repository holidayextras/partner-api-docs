#!/bin/bash
set -e

export GT_TOKEN=$GH_TOKEN

#Travis deploy script does not support RVM
export PATH=~/.rvm/rubies/ruby-2.3.1/bin:$PATH
which ruby
ruby -v
bundle exec rake deploy

echo "... Done"
