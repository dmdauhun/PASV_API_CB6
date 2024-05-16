import request from 'supertest' ;
//import request  from "supertest";
//const {request } = require("supertest");
import { expect } from "chai";



describe('Auth',()=>{

it('login valid',async ()=>{

const res=await request('https://clientbase-server.herokuapp.com/v6/')
.post('user/login')
.send({email:'jacksparrow@pirate.com',password:'Pirate666'})

expect(res.status).to.eq(200)
console.log(res.status)
expect(res.body.message).to.equal('Auth success')
})


    
})