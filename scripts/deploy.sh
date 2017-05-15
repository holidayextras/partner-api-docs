#!/bin/bash
set -e
RELEASE_BRANCH='master'
echo "Current branch: ${TRAVIS_BRANCH}"
if [ "${TRAVIS_BRANCH}" != "${RELEASE_BRANCH}" ]; then
  echo "ERROR: Not on ${RELEASE_BRANCH} branch"
  exit 2
fi
git --version
git checkout ${RELEASE_BRANCH}
git remote set-branches --add origin gh-pages
echo "fetching..."
git fetch origin
git branch gh-pages origin/gh-pages
git checkout gh-pages
git branch
echo "merging..."
git merge ${RELEASE_BRANCH} -m 'Merged'
echo "copying files..."
cp -a _site/* ./
git status
echo "adding files..."
git add * || true
git status
if [[ -n $(git status -s) ]] ; then
  echo "Updated site needs committing"
  git commit -m "Updated live site"
  git push origin gh-pages
fi
echo "...done"
