#!/bin/bash
set -e

#Travis deploy script does not support RVM
export PATH=~/.rvm/rubies/ruby-2.4.6/bin:$PATH
which ruby
ruby -v
bundle exec rake deploy

echo "... Done"
