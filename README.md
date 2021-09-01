# URL shortener

### how it works

you make a post request to the root, with a url properity with your url to make short, then it's going to give you back a key, if you access the root with this key you will be redirected to the url that you choose

### EXAMPLE

POST REQUEST TO ADD THE URL

to your server url
{
  "url":"thewebtsitetogettheurlshorter.com"
}

OUTPUT: the key (lets call it "a")

>yourserverurl</a ("the key that came back from the post request") <- this will redirect you to the "hewebtsitetogettheurlshorter.com"
