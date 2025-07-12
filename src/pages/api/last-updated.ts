import type { NextApiRequest, NextApiResponse } from 'next';
import { exec } from 'child_process';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  exec('git log -1 --format=%cd --date=iso', (err, stdout) => {
    if (err) {
      res.status(500).json({ date: null });
      return;
    }
    res.status(200).json({ date: stdout.trim() });
  });
}
