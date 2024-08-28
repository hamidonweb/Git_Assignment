import { Link } from 'react-router-dom';

export default function Button({ btnText, btnUrl, variant }) {
  return (
    <Link to={btnUrl} className={variant}>
      <span>{btnText}</span>
    </Link>
  );
}
