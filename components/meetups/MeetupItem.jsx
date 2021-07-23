import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

const MeetupItem = ({ image, title, address }) => (
  <li className={classes.item}>
    <Card>
      <div className={image}>
        <img src={image} alt={title} />
      </div>
      <div className={classes.content}>
        <h3>{title}</h3>
        <address>{address}</address>
      </div>
      <div className={classes.actions}>
        <button type="button">Show Details</button>
      </div>
    </Card>
  </li>
);

export default MeetupItem;
