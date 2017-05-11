task default: %w[check_links]

desc "Check all external links"
task :check_links do
  require 'link_checker'
  LinkChecker.new(
    :options => {
      :no_warnings => true,
      :max_threads => 10
    }
  ).check_uris
end
