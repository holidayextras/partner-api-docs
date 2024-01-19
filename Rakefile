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

desc "Deploy site to production"
task :deploy do
  sh "cp -a _site /tmp/"
  sh "git config pull.rebase true"
  sh "git pull origin gh-pages"
  sh "git checkout gh-pages"
  sh "rm -rf _site"
  sh "mv /tmp/_site ."
  sh "git status"
  sh "git commit -am 'Deploy'"
  sh "git push"
end
