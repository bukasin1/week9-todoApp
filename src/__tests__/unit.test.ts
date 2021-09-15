const app = require('../app')
// const request = require ('supertest');
import request from 'supertest';
import bcrypt from 'bcryptjs'

const Users = require('../model/user')

describe("Test trial.", () => {
    it("Runs test", () => {
        expect(1).toBe(1)
    })
})