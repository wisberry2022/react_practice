// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect';

type Data = {
  name: string
  fetchResult?: boolean
}

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.get((req, res) => {
  res.status(200).send({ name: 'John Doe', fetchResult: true });
})

export default handler;