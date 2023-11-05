import express, { Request, Response } from "express"; // Import the Request and Response types
import mongoose from "mongoose";

const app = express();
const PORT = 4000;
var client_id = "process.env.SPOTIFY_CLIENT_ID";
var client_secret = "process.env.SPOTIFY_CLIENT_SECRET";
var redirect_uri = "http://localhost:4000/callback";
var querystring = require("querystring");

mongoose.connect("mongodb://mongo:27017");

app.get("/", (req: Request, res: Response) => {
  // Use the Request and Response types
  res.send("Hello from the backend!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

var generateRandomString = function (length: number) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

app.get("/login", function (req: Request, res: Response) {
  var state = generateRandomString(16);
  var scope = "user-read-private user-read-email";

  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state,
      })
  );
});

app.get("/callback", function (req, res) {
  var code = req.query.code || null;
  var state = req.query.state || null;

  if (state === null) {
    res.redirect(
      "/#" +
        querystring.stringify({
          error: "state_mismatch",
        })
    );
  } else {
    var authOptions = {
      url: "https://accounts.spotify.com/api/token",
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: "authorization_code",
      },
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          Buffer.from(client_id + ":" + client_secret).toString("base64"),
        json: true,
      },
    };
  }
});
