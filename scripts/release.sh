#!/bin/bash
set -e

failed=0

publish_package() {
  local dir=$1
  [ -f "$dir/package.json" ] || return 0

  local name version output exit_code
  name=$(node -p "require('./$dir/package.json').name")
  version=$(node -p "require('./$dir/package.json').version")
  exit_code=0

  echo "→ $name@$version"
  output=$(cd "$dir" && npm publish --access restricted 2>&1) || exit_code=$?

  if [ $exit_code -eq 0 ]; then
    echo "  ✓ published"
  elif echo "$output" | grep -q "E409"; then
    echo "  ↷ already at this version, skipping"
  else
    echo "  ✗ failed:"
    echo "$output" | sed 's/^/    /'
    failed=1
  fi
}

publish_package "packages/ds-tokens"

for dir in packages/atoms/*/; do
  publish_package "${dir%/}"
done

for dir in packages/molecules/*/; do
  publish_package "${dir%/}"
done

exit $failed
