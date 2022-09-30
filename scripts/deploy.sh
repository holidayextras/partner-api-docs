#!/bin/bash
set -e

#Travis deploy script does not support RVM
export PATH=~/.rvm/rubies/ruby-3.1.2/bin:$PATH
which ruby
ruby -v
bundle exec rake deploy

echo "... Done"
