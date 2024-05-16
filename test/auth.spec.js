import request from 'supertest' ;
//import request  from "supertest";
//const {request } = require("supertest");
import { expect } from "chai";
import 'dotenv/config'



describe('Auth',()=>{

it('login valid',async ()=>{

const res=await request('process.env.BASE_URL')
.post('user/login')
.send({email:process.env.EMAIL,password:process.env.PASSWORD})

expect(res.status).to.eq(200)
console.log(res.status)
expect(res.body.message).to.equal('Auth success')
})


    
})