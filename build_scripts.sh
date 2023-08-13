#!/bin/bash

# Read parameters from CircleCI
BUILD_ENV="$1"
BUILD_VERSION="$2"

# Copy file .env
cp -f "./env/env.${BUILD_ENV}.template" "./.env"

# Replace text in the .env file
sed -i "s/${BUILD_ENV}_VERSION_RELEASE/${BUILD_VERSION}/g" ./.env

echo "$BUILD_VERSION_ENV"