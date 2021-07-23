import MeetupList from '../components/meetups/MeetupList';

export const DUMMY_ITEMS = [
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

const HomePage = () => <MeetupList meetups={DUMMY_ITEMS} />;

export default HomePage;
