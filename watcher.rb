require 'haml'
p "watching for changes"
watch('src/(.*\.haml)' )  do |md| 
  generate_one_slide(md[1]) 
end

watch('assets/stylesheets/(.*)\.scss' )  do |md| 
  update_stylesheet(md[1])
end

def target
  Dir.new("slides")
end

def source
  Dir.new("src")
end

def template
  File.read("lib/template.html")
end

def generate_one_slide(filename)
  p "Generating a slide from #{filename}"
  outgoing_file = File.join(target.path, filename).gsub("haml", "html")
  File.delete(outgoing_file) if File.exists?(outgoing_file)
  body = File.read(File.join(source.path, filename))
  haml_engine = Haml::Engine.new(body)
  File.open(outgoing_file, "w") do |target_file|
    target_file << template.gsub("<!-- body -->", haml_engine.render)
  end
rescue Exception => e
  p "Error on line #{e.line}" if e.respond_to?(:line) 
  p e
end

def update_stylesheet(filename)
  p "updating stylesheet for #{filename}"
  system("sass assets/stylesheets/#{filename}.scss assets/stylesheets/#{filename}.css")
end