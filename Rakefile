require 'rake-jekyll'

task default: %w[build html_proofer]

desc "Build site"
task :build do
  sh "bundle exec jekyll build"
end

task :start do
  sh "bundle exec jekyll serve"
end

desc "Check generated HTML"
task :html_proofer do
  require 'html-proofer'
  options = { :assume_extension => true, :allow_hash_href => true, :disable_external => true }
  HTMLProofer.check_directory("./_site", options).run
end

Rake::Jekyll::GitDeployTask.new(:deploy)
