import {musics} from "../../data/Data";

export default function handler(req, res) {
  res.status(200).json(musics)
}
