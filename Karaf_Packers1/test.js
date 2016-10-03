var chai=require('chai');
var request = require('supertest');
var should = require('should');
var expect = chai.expect;

var url = 'http://localhost:3000';
chai.should();

//User Timeline
describe('User Timeline',function () {
    it('It should get the status in User_timeline',function (done) {
        //console.log('Testing Status_UserTimeline');
        request(url).get('/status').send()
            .end(function(err, res) {
                //console.log('Testing Status_UserTimeline END');
                if (err) {
                    //console.log('Testing Status_UserTimeline Throw');

                    throw err;
                }
                res.status.should.be.equal(200);
                done();
            });
    });
});

//Home Timeline
describe('Home Timeline',function () {
    it('It should get the status in Home timeline',function (done) {
        //console.log('Testing Status Home Timeline');
        request(url).get('/hometimeline').send()
            .end(function(err, res) {
                //console.log('Testing Status Home Timeline END');
                if (err) {
                    //console.log('Testing Status Home Timeline Throw');
                    throw err;
                }
                res.status.should.be.equal(200);
                done();
            });
    });
});

//Friendship
describe('Friendship',function () {
    it('It should make Friend',function (done) {
        //console.log('Testing Friendship');
        request(url).post('/friendship').send()
            .end(function(err, res) {
                //console.log('Testing Friendship END');
                if (err) {
                    //console.log('Testing Friendship Throw');
                    throw err;
                }
                res.status.should.be.equal(200);
                done();
            });
    });
});

//Search
describe('Search',function () {
    it('It should get the data searched',function (done) {
        //console.log('Testing Search');
        request(url).get('/search').send()
            .end(function(err, res) {
                //console.log('Testing END');
                if (err) {
                    console.log('Testing Throw');
                    throw err;
                }
                res.status.should.be.equal(200);
                done();
            });
    });
});


//update status
describe('Update Status',function () {
    it('It should update status',function (done) {
        //console.log('Testing');
        request(url).post('/updateStatus').send()
            .end(function(err, res) {
                //console.log('Testing END');
                if (err) {
                    console.log('Testing Throw');
                    console.log(err);
                    throw err;
                }
                res.status.should.be.equal(200);
                console.log(err);
               done();
            });
    });
});

//followers
describe('Followers',function () {
    it('It should get followers',function (done) {
        request(url).get('/followers').send()
            .end(function(err, res) {
                if (err) {
                    console.log('Testing Throw');
                    throw err;
                }
                res.status.should.be.equal(200);
                done();
            });
    });
});

//followerslist
describe('Followers List',function () {
    it('It should get followers list',function (done) {
        request(url).get('/followerslist').send()
            .end(function(err, res) {
                if (err) {
                    console.log('Testing Throw');
                    throw err;
                }
                res.status.should.be.equal(200);
                done();
            });
    });
});

//block
describe('Blocked Users',function () {
    it('It should get list of blocked users',function (done) {
        request(url).get('/block').send()
            .end(function(err, res) {
                if (err) {
                    throw err;
                }
                res.status.should.be.equal(200);
                done();
            });
    });
});

//searchUser
describe('Search User',function () {
    it('It should search for a user',function (done) {
        request(url).get('/searchUser').send()
            .end(function(err, res) {
                if (err) {
                    console.log('Testing Throw');
                    throw err;
                }
                res.status.should.be.equal(200);
                done();
            });
    });
});

//trends/place
describe('Trends Place',function () {
    it('It should search for a user',function (done) {
        request(url).get('/place').send()
            .end(function(err, res) {
                if (err) {
                    console.log('Testing Throw');
                    throw err;
                }
                res.status.should.be.equal(200);
                done();
            });
    });
});

//