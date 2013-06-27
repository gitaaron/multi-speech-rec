#!/bin/sh
sox static/uploads/blob.wav static/uploads/message.flac rate 16k
wget -q -U "Mozilla/5.0" --post-file static/uploads/message.flac --header="Content-Type: audio/x-flac; rate=16000" -O - "http://www.google.com/speech-api/v1/recognize?lang=en-en&client=chromium" 
