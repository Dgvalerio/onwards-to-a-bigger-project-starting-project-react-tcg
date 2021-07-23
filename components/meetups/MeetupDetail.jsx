import classes from './MeetupDetail.module.css';

const MeetupDetail = ({ image, title, address, description }) => (
  <div className={classes.detail}>
    <img src={image} alt={title} />
    <h1>{title}</h1>
    <address>{address}</address>
    <p>{description}</p>
  </div>
);

export default MeetupDetail;
