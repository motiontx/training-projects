import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/dbconnect";
import URL from "../../models/url";

type Data = {
  url?: string;
  error: string | null;
};

export default async function shorten(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { url, alias } = req.body;

  !alias.match(/^[a-zA-Z0-9]*$/) &&
    res.status(400).json({
      error: "Alias must be alphanumeric",
    });

  try {
    await dbConnect();
    const aliasExists = await URL.exists({ alias });
    if (!aliasExists) {
      const urlShorten = await URL.create({ url, alias });
      res.json({
        url: `${process.env.BASE_URL}/url/${urlShorten?.alias}`,
      } as Data);
    } else {
      res.status(400).json({
        error: "Alias already exists",
      });
    }
  } catch (e: any) {
    res.status(400).json({
      error: "Something went wrong",
    });
  }
}
