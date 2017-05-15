#!/bin/bash
set -e
RELEASE_BRANCH='master'
echo "Current branch: ${TRAVIS_BRANCH}"
if [ "${TRAVIS_BRANCH}" != "${RELEASE_BRANCH}" ]; then
  echo "ERROR: Not on ${RELEASE_BRANCH} branch"
  exit 2
fi
git branch
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
