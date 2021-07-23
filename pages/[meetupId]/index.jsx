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
