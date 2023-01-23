// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../db/db';
import User from '../db/models/User';
import mongoose from 'mongoose';
import nextConnect from 'next-connect';

new User();

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.get(async (req, res) => {
  await dbConnect();
  const User = mongoose.models.User;
  User.insertMany(req.query);
  console.log(req.query)
  res.status(200).send({ name: 'John Doe', fetchResult: true });
})

export default handler;