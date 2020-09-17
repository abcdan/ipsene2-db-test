# ipsene2-db-test
A simple database testing tool written in Node.js

# What databases?
* MySQL
* PostgreSQL
* Yugabyte
* ~~MariaDB~~ (issues)

# Why no volumes?
This is a `one time` test. All data that is stored into the database will be destroyed after the test is done.

# Running
* `docker-compose up` to start the databases
* `npm i` in root to get dependencies
* `node app` to start it

# Dependencies
You need to have a working node-gyp:
`npm install --global --production windows-build-tools --vs2015`


# Copyright
You're allowed to use this application for you own personal research. If the results of this test are being used or published, you'll have to put a link to this repo in your source part or directly under the results