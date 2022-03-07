// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Game } from '../../../lib/tictactoe'
import * as fs from 'fs'

type Data = {
  game: Game
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const game = new Game()
  fs.readFile('<entire path to json file here>', 'utf8', (err, jsonString) => {
    if (err) {
      console.log('file read failed:', err)
      return
    }
    try {
      const games = JSON.parse(jsonString)
      console.log('games', games)

    } catch(e) {}
    console.log('file data:', jsonString)
  })
  res.status(200).json({ game })
}

//Post to game/new brings back a new game, but also stores that game in a JSON file.
// GET a new game, by an ID
// UPDATE to game/:id to make a
// will need to write to a file. Local memory will be wiped

// TODO, get the tests back in