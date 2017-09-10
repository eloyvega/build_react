#!/bin/bash

PROJECT_ROOT=$(cd ..; pwd)

docker run -i -v $PROJECT_ROOT/public/:/opt/app/public/ --entrypoint=/bin/bash --rm=true $1 -c "npm install --only=dev; npm run build"
