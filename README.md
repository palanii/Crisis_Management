1. install Node
2. install Ruby
	http://rubyinstaller.org/downloads/
	Check this - Add Ruby executables to your path
3. open command prompt with Ruby and install compass
	gem install compass
4. npm install -g grunt-cli (set https-proxy if any errors)
5. copy paste gruntfile.js and package.json
6. goto project root folder(ie. outside app directory)
7. run "npm install"
8. run "grunt dev" command
9. include this in head of index page
	<script src="http://localhost:35729/livereload.js"></script>
10. Open http://localhost:9007/#/


1. Remove stylesheet from routes.js
2. add main.css to index and remove header.css, footer.css
3. Move page specific styles to pages folder
4. Add partial sass files
	_helpers.sass
	_layout.sass
	_components.sass