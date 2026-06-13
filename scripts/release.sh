#!/bin/bash
set -e

# changesets/action creates ~/.npmrc for npmjs.com before this script runs.
# Append GitHub Packages auth so changeset publish can read and write packages
# under the @karinmelissa scope.
echo "@karinmelissa:registry=https://npm.pkg.github.com" >> ~/.npmrc
echo "//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}" >> ~/.npmrc

npx changeset publish
