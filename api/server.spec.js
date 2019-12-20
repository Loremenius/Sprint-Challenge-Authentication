const request = require('supertest');

const server = require('./server');

let token = '';

describe("server.js",function(){
    describe("environment",function(){
       it("should set environment to development", function(){
           expect(process.env.DB_ENV).toBe("testing");
       });
    });
});

describe("POST /api/users/register",function(){
    it.skip("should return a 201 OK", function(){
        return request(server).post("/api/auth/register")
            .send({username:"TxApexx",password:"zed"})
            .then(res=>{
                expect(res.status).toBe(201);
            });
    });
    it.skip("should message stating register was successful", function(){
        return request(server).post("/api/auth/register")
            .send({username:"Bowserbot",password:"leona"})
            .then(res=>{
                expect(res.body.message).toBe("User created successfully");
            });
    });
});

describe("POST /api/users/login",function(){
    it("should return a 200 OK", function(){
        return request(server).post("/api/auth/login")
            .send({username:"Loremenius",password:"zed"})
            .then(res=>{
                expect(res.status).toBe(200);
            });
    });
    it("should message welcoming user on successful login", function(){
        return request(server).post("/api/auth/login")
            .send({username:"Loremenius",password:"zed"})
            .then(res=>{
                token = res.body.token;
                console.log(token);
                expect(res.body.message).toBe("Welcome Loremenius");
            });
    });
});

describe("GET /api/jokes",function(){
    //no token
    it("should return a 400 Error", function(){
        return request(server).get("/api/jokes")
            .then(res=>{
                expect(res.status).toBe(400);
            });
    });
    it("should message asking user to relogin", function(){
        return request(server).get("/api/jokes")
            .then(res=>{
                expect(res.body.message).toBe("Please login and try again");
            });
    });
    // //valid token
    // it("should return a 400 Error", function(){
    //     return request(server).get("/api/jokes")
    //         .set('authorization', "test")
    //         .then(res=>{
    //             expect(res.status).toBe(400);
    //         });
    // });
    // it("should message asking user to relogin", function(){
    //     return request(server).get("/api/jokes")
    //         .set('authorization', token)
    //         .then(res=>{
    //             expect(res.body.message).toBe("Please login and try again");
    //         });
    // });
});