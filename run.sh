#!/bin/sh

rm -rf _site

grunt build

#jekyll serve --baseurl "" --watch
jekyll serve --host $IP --port $PORT --baseurl ''
