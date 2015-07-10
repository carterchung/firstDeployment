# Carter's Deployment Attempt

This repo is designed to make sure I understand what's going on, so everything is going to be explained line by line.

The public folder is 

## The Procfile
this is so Heroku knows exactly what command to run to start my app. web is the process type, and attaches it to the http routing stack.

## package.json 
This includes the node dependencies (express and ejs) to install. Run:
```sh
$ npm install.
```
Under scripts, "start" tells us what to run on the "npm start" command

## Running locally
```sh
$ npm start.
```

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```