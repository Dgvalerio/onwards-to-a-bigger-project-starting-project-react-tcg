import { useRouter } from 'next/router';

import MeetupDetail from '../../components/meetups/MeetupDetail';
import { DUMMY_ITEMS } from '../index';

const MeetupDetails = () => {
  const router = useRouter();

  const { meetupId: id } = router.query;

  const { title, address, description, image } = DUMMY_ITEMS.find(
    (item) => item.id === id
  );

  if (!id) return <p>Loading...</p>;

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

export default MeetupDetails;
