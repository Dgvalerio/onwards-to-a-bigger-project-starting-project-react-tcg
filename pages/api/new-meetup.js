import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  if (req.map === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://dgvalerio:eRY1RrtpOPm8xxfQ@cluster0.sshuh.mongodb.net/meetups?retryWrites=true&w=majority'
    );

    const db = client.db();

    const meetupsCollections = db.collections('meetups');

    const result = await meetupsCollections.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({
      message: 'Meetup inserted!',
    });
  }
};

export default handler;
