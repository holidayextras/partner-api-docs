task default: %w[build html_proofer]

desc "Build site"
task :build do
  sh "bundle exec jekyll build"
end

desc "Check generated HTML"
task :html_proofer do
  require 'html-proofer'
  options = { :assume_extension => true }
  HTMLProofer.check_directory("./_site", options).run
end
