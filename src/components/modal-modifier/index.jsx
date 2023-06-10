import { FaRegWindowClose } from "react-icons/fa";
import "./styles.modal.css";

export default function ModalModifier({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close text-5xl" onClick={onClose}>
          <FaRegWindowClose />
        </button>
        <div className="modal-iner-content">{children}</div>
      </div>
    </div>
  );
}
