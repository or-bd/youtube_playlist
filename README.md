# Youtube Playlist

A simple shared youtube playlist (works like radio), once you add your video other clients can view / edit it with you.

Demo: https://youtube.sudozone.com. 

### Installation

First you need to clone this project to your local machine:

``` 
$ git clone https://github.com/or-bd/youtube_playlist.git
```

Then install app dependencies using npm:

``` 
$ cd youtube_playlist && npm i --production
```

The next step is to generate the `credentials.json` file, follow `Step 1` at google docs -  
[Youtube Data API Quickstart](https://developers.google.com/youtube/v3/quickstart/nodejs) then save the file in `/server/utils/googleAuth/credentials.json`.

**IMPORTANT**: Make sure to change the file name to `credentials.json`.



### Execution

The following command will start the node server on port 3001:

``` 
$ npm start
```

*NOTE: At the first execution you'll be asked to generate `token.json` using the CLI so just visit the google link and enter the code back to the CLI.*

That's it! you'r ready to visit your app: http://localhost:3001.
