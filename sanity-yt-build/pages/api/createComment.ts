// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import SanityClientConstructor, { SanityClient } from "@sanity/client"
export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATABASE,
    projectId: process.env.NEXT_PUBLIC_SANITY_ID,
    useCdn: process.env.NODE_ENV === "production",
    token: process.env.SANITY_API_TOKEN
}
const client: SanityClient = SanityClientConstructor(config);
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const { _id, name, email, comment} = req.body;

    try{
        await client.create({
            _type: 'comment',
            post: {
                _type: 'reference',
                _ref: _id
            },
            name,
            email,
            comment
        });
    } catch(e){
        console.log(e);
        res.status(500).json({message: "Couldn't submit comment", e});
    }
    console.log("Comment submitted");
  res.status(200).json({ message: 'Comment submitted' })
}
