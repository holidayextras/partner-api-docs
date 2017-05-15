#!/bin/bash
set -e
RELEASE_BRANCH='master'
echo "Current branch: ${TRAVIS_BRANCH}"
if [ "${TRAVIS_BRANCH}" != "${RELEASE_BRANCH}" ]; then
  echo "ERROR: Not on ${RELEASE_BRANCH} branch"
  exit 2
fi
git --version
git branch
git checkout ${RELEASE_BRANCH}
git remote set-branches --add origin gh-pages
echo "fetching..."
git fetch origin
git pull
echo "showing remote branches..."
git ls-remote
echo "showing remote branches #2 ..."
git branch -r
echo "showing branches..."
git branch -a -v
git branch gh-pages origin/gh-pages
git checkout gh-pages
git branch
git merge ${RELEASE_BRANCH}
cp -a _site/* ./
git add * || true
git status
if [[ -n $(git status -s) ]] ; then
  echo "Updated site needs committing"
  git commit -m "Updated live site"
  git push origin gh-pages
fi
echo "...done"
