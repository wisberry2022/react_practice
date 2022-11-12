import type { NextApiRequest, NextApiResponse } from "next";

export default function Handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.status(200).send({ req_result: 'OK' });
}