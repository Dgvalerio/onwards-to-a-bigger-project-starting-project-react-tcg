import MeetupDetail from '../../components/meetups/MeetupDetail';
import { DUMMY_ITEMS } from '../index';

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
