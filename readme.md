# Dependancies
- npm
- node
- direnv

# Install
`npm install`
`git remote remove origin`
`git remote add upstream git@github.com:maxmckenzie/node-bable-standardjs-boilerplate.git`
`git remote add origin <new_repo_url>`

# Pulling changes
`git fetch upstream`

with github flow
`git checkout master`
`git merge upstream/master`

with git flow
`git checkout develop`
`git merge upstream/master`

# Test
`npm test`

# Build
`npm run build`

# Dev Server
`npm run dev`

# Production Server
`npm start`
