import { parseISO, format } from 'date-fns';

export default function DateFormatter({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time className="font-mono" dateTime={dateString}>
      {format(date, 'LLLL	d, yyyy')}
    </time>
  );
}
