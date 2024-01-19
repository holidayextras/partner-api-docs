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
  sh "rm -rf _site"
  sh "mkdir _site"
  sh "git clone -b gh-pages `git config remote.origin.url` _site"
  Rake::Task["build"].invoke
  Dir.chdir('_site')
  sh "git status"
  sh "git config --global user.name `git log -1 --pretty=format:'%an'`"
  sh "git config --global user.email `git log -1 --pretty=format:'%ae'`"
  sh "git commit -am 'Deploy'"
  sh "git push"
end
