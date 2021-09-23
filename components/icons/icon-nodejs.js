import { faNode } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function IconNodeJS() {
  return (
    <div className="flex rounded-full">
      <FontAwesomeIcon
        color="#68A063"
        icon={faNode}
        className="text-2xl transform scale-125"
      />
    </div>
  );
}
