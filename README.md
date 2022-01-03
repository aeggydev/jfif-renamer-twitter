# What is this
Whenever you want to download an image from twitter.com,
there's a pretty high chance it's gonna be downloaded as a .jfif
file. Jfif files are basically just JPGs, but almost no service 
supports them. This extension automatically renames 
every downloaded .jfif from twitter to .jpg.

## Building
Running `npm run build` compiles the typescript code files to normal javascript.

## Packing
Running `npm run pack` strips out the typescript files and adds a ready-to-use extension to /dist.
