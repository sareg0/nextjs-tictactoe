// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Game } from '../../../lib/tictactoe'

type Data = {
  game: Game
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const game = new Game()
  res.status(200).json({ game })
}

// POst to game, a get a new game, with an ID
// Post to game/:id/addMove to make a 

// TODO, get the tests back in
// fix the TS errors
// 