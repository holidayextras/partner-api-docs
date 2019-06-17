#!/bin/bash
set -e

git config --global user.email travis@holidayextras.com

#Travis deploy script does not support RVM
export PATH=~/.rvm/rubies/ruby-2.3.1/bin:$PATH
which ruby
ruby -v
bundle exec rake deploy

echo "... Done"
