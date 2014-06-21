#!/bin/sh

rm -rf _site

grunt build

jekyll serve --baseurl "" --watch

