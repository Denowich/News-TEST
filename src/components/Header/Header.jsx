import { formatDate } from '../FormatDate';

export const Header = () => {
  return (
    <div>
      <h2>NEWS</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, officia.
        Facilis accus
      </p>
      {formatDate(new Date())}
    </div>
  );
};
