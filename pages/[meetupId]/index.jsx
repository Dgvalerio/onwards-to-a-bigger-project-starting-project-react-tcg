import MeetupDetail from '../../components/meetups/MeetupDetail';

const DUMMY_ITEMS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 10, 12445 Some City',
    description: 'This is a second meetup!',
  },
];

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

export const getStaticPaths = () => {
  const meetupsData = DUMMY_ITEMS.map((item) => ({
    params: { meetupId: item.id },
  }));

  return {
    fallback: false, // false se tiver todas as possibilidades a serem carregadas aqui, caso não, true
    paths: meetupsData,
  };
};

export const getStaticProps = (context) => {
  const { meetupId } = context.params;

  const meetupData = DUMMY_ITEMS.find((item) => item.id === meetupId);

  return {
    props: {
      meetupData,
    },
  };
};

export default MeetupDetails;
