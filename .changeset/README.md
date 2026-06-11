# Changesets

This directory contains changeset files that describe changes made to packages in this monorepo.

## How to add a changeset

After making changes to one or more packages, run:

```bash
npx changeset add
```

You will be prompted to:
1. Select which packages changed
2. Choose the bump type: `patch` (bug fix), `minor` (new feature), or `major` (breaking change)
3. Write a short description of the change

This creates a markdown file in `.changeset/`. Commit it alongside your code changes.

## How releases work

1. Merge a PR that includes `.changeset/*.md` files → GitHub Actions opens a **"chore: release packages"** PR
2. That PR bumps versions in `package.json` for all affected packages and updates `CHANGELOG.md`
3. Merge the release PR → GitHub Actions publishes only the packages with new versions to GitHub Packages

## Bump type guide

| Type | When to use | Example |
|------|-------------|---------|
| `patch` | Bug fix, style tweak, internal refactor | `1.0.0` → `1.0.1` |
| `minor` | New prop, new variant, backwards-compatible feature | `1.0.0` → `1.1.0` |
| `major` | Breaking change to public API | `1.0.0` → `2.0.0` |
