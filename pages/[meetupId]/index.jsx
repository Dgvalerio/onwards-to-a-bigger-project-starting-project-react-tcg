/* eslint-disable no-underscore-dangle */
import { MongoClient, ObjectId } from 'mongodb';

import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = ({ meetupData }) => {
  const { title, address, description, image } = meetupData;

  return (
    <>
      <MeetupDetail
        description={description}
        address={address}
        title={title}
        image={image}
      />
    </>
  );
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://dgvalerio:eRY1RrtpOPm8xxfQ@cluster0.sshuh.mongodb.net/meetups?retryWrites=true&w=majority'
  );

  const db = client.db();

  const meetupsCollections = db.collection('meetups');

  const meetups = await meetupsCollections.find({}, { _id: 1 }).toArray();

  await client.close();

  const meetupsData = meetups.map((item) => ({
    params: { meetupId: item._id.toString() },
  }));

  return {
    fallback: false, // false se tiver todas as possibilidades a serem carregadas aqui, caso não, true
    paths: meetupsData,
  };
};

export const getStaticProps = async (context) => {
  const { meetupId } = context.params;

  const client = await MongoClient.connect(
    'mongodb+srv://dgvalerio:eRY1RrtpOPm8xxfQ@cluster0.sshuh.mongodb.net/meetups?retryWrites=true&w=majority'
  );

  const db = client.db();

  const meetupsCollections = db.collection('meetups');

  const selectedMeetup = await meetupsCollections.findOne({
    _id: ObjectId(meetupId),
  });

  await client.close();

  return {
    props: {
      meetupData: {
        // eslint-disable-next-line no-underscore-dangle
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
};

export default MeetupDetails;
