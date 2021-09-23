import { faPython } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function IconPython() {
  return (
    <div className="flex rounded-full" style={{ background: `#ffd343` }}>
      <FontAwesomeIcon
        color="#3776ab"
        icon={faPython}
        className="text-2xl transform scale-125"
      />
    </div>
  );
}
