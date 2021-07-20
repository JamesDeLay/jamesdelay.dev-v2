import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function IconJS() {
  return (
    <div className="bg-black flex">
      <FontAwesomeIcon
        color="#f7df1e"
        icon={faJsSquare}
        className="text-2xl transform scale-125"
      />
    </div>
  );
}
