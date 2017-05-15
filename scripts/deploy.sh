#!/bin/bash
set -e
RELEASE_BRANCH='master'
exit 1
echo "Current branch: ${CURRENT_BRANCH}"
if [ "${CURRENT_BRANCH}" != "${RELEASE_BRANCH}" ]; then
  echo "ERROR: Not on ${RELEASE_BRANCH} branch"
  exit 2
fi
git checkout ${RELEASE_BRANCH}
git branch
git add docs
git status
if [[ -n $(git status -s) ]] ; then
  echo "Updated dist needs committing"
  git commit -m "Updated live site"
  git push origin ${RELEASE_BRANCH}
fi
