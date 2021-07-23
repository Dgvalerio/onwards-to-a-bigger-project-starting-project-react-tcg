/* eslint-disable no-unused-vars */
const handler = (req, res) => {
  if (req.map === 'POST') {
    const data = req.body;

    const { title, image, address, description } = data;
  }
};

export default handler;
