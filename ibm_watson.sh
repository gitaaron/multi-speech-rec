#!/bin/bash
sox static/uploads/blob.wav -c 1 static/uploads/blob_m.wav 
curl "https://api.att.com/rest/2/SpeechToText" \
    --insecure \
    --request POST \
    --header "Authorization: Bearer 7f22db97e74ddf4b5ab244aca16a5012" \
    --header "Content-type: audio/wav" \
    --header "Accept: application/json" \
    --header "X-SpeechContext: Generic" \
    --data-binary "@/Users/surtyaar/Project/demos/ethan/speech_rec/static/uploads/blob_m.wav"
