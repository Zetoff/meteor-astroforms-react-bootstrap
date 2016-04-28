import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

checkNpmVersions({
  "react": ">=0.14.7 || ^15.0.0-rc.2",
  "react-bootstrap": ">=0.29.0"
});
