#!/bin/bash
aws s3 sync . s3://judy-makin.mark-ferrari.com --exclude "*.git*" --exclude "deploy.sh"
