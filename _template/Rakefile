require 'haml'

namespace :deck do

  task :generate do
    p "Generating slides #{Time.now}"
    target = Dir.new("slides")
    source = Dir.new("src")
    template = File.read("lib/template.html")
    `rm -rf #{target.path}/*.*`
    `sass assets/stylesheets/style.scss assets/stylesheets/style.css`
    source.each do |filename|
      next if ["..", "."].include?(filename)
      body = File.read(File.join(source.path, filename))
      haml_engine = Haml::Engine.new(body)
      outgoing_file = File.join(target.path, filename).gsub("haml", "html")
      File.open(outgoing_file, "w") do |target_file|
        target_file << template.gsub("<!-- body -->", haml_engine.render)
      end
    end
  end

end
