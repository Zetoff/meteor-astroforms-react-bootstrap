// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by meteor-astroforms-react-bootstrap.js.
import { name as packageName } from "meteor/meteor-astroforms-react-bootstrap";

// Write your tests here!
// Here is an example.
Tinytest.add('meteor-astroforms-react-bootstrap - example', function (test) {
  test.equal(packageName, "meteor-astroforms-react-bootstrap");
});
