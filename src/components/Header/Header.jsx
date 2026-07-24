import { formatDate } from '../formatDate';

export const Header = () => {
  return (
    <div>
      <h2>NEWS</h2>
      <p>{formatDate(new Date())}</p>
    </div>
  );
};
