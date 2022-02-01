import sinon from 'sinon';
import { expect } from 'chai';
import { MongoClient } from 'mongodb';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { getByEmail } from '../models/findByEmail';
import { insertOne } from '../models/insertOne';
import { updateOne } from '../models/updateOne';

describe('make a search for a user by email', () => {
  const DBServer = new MongoMemoryServer();
  beforeAll(async () => {
    const mockUrl = await DBServer.getUri();
    const connetionMock = await MongoClient.connect(mockUrl);
    sinon.stub(MongoClient, 'connect').resolves(connetionMock);
    await insertOne({
      email: 'pedro@delicoli.com',
    })
  })
  
  afterAll(async () => {
    await DBServer.stop();
  })

  it('find successfuly and return a object', async () => {
    const email = 'pedro@delicoli.com'
    const user = await getByEmail(email)
    expect(user).to.be.an('object');
    expect(user).to.include.all.keys('email');
  });
  it('dont find any user that match and return a empty object', async () => {
    const email = 'pedro@hotmail.com'
    const user = await getByEmail(email)
    expect(user).to.be.empty;
  })
  it('can update user that is find', async() => {
    const user = {
      email: 'pedro@delicoli.com',
      trades: [{
        value: '1.34',
      }]      
    }
    await updateOne(user);
    const userUpdate = await getByEmail(user.email);
    expect(userUpdate).to.include.all.keys('trades');
  })
})
