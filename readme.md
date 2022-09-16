Install pug CLI
```sh
npm i pug-cli -g
```

Compile PUG to pretty HTML
```sh
pug index.pug -P
```

Automate the PUG compilation to pretty HTML
```sh
pug -w . -o ./ -P
```

Automate PUG compilation on dist folder
```sh
pug -w src/index.pug -o dist
```

Run SASS
```sh
sass --watch src/styles/main.scss dist/css/main.css
```