require 'html-proofer'

task default: %w[build html_proofer]

desc "Build site"
task :build do
  sh "bundle exec jekyll build"
end

desc "Run the site locally"
task :start do
  sh "bundle exec jekyll serve"
end

desc "Check generated HTML"
task :html_proofer do
  #options = { :assume_extension => true, :allow_hash_href => true, :disable_external => true }
  options = { :allow_hash_href => true, :disable_external => true }
  HTMLProofer.check_directory("./_site", options).run
end

desc "Deploy site"
task :deploy do
end