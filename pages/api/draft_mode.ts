import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.setPreviewData({});
    res.redirect('/posts/test');
}
