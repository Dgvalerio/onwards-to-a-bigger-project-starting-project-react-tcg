import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';

const HomePage = ({ meetups }) => <MeetupList meetups={meetups} />;

// export const getServerSideProps = async (context) => {
//   const { req } = context;
//   const { res } = context;
//
//   return {
//     props: {
//       meetups: DUMMY_ITEMS,
//     },
//   };
// };

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://dgvalerio:eRY1RrtpOPm8xxfQ@cluster0.sshuh.mongodb.net/meetups?retryWrites=true&w=majority'
  );

  const db = client.db();

  const meetupsCollections = db.collection('meetups');

  const meetups = await meetupsCollections.find().toArray();

  await client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        // eslint-disable-next-line no-underscore-dangle
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
      })),
    },
    revalidate: 10, // Time in seconds
  };
};

export default HomePage;
