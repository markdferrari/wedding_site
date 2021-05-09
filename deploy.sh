#!/bin/bash
s3_bucket="s3://judy-makin.mark-ferrari.com"
distribution_id="E1KG8Q9DRF0F74"

# Sync contents to s3
aws s3 sync . $s3_bucket \
    --exclude "*.git*" \
    --exclude "deploy.sh"

echo "Clearing Cloudfront cache"
# Invalidate cloudfront distribution
aws cloudfront create-invalidation \
    --distribution-id $distribution_id \
    --paths "*"
