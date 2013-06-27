#!/bin/bash
curl "https://api.att.com/oauth/token" --insecure \
    --header "Accept: application/x-www-form-urlencoded" \
    --header "Content-Type: application/x-www-form-urlencoded" \
    --data "client_id=84135c9f924b18fb880e7a3ee1350dfb&client_secret=08f8a9cf1e6e506d&grant_type=client_credentials&scope=SPEECH"
