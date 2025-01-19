import { ReactElement } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { X } from "lucide-react";

interface ModalPorps {
  isOpen?: boolean;
  onClose?: () => void;
  body?: ReactElement;
  footer?: ReactElement;
}

const Modal = ({ body, footer, isOpen, onClose }: ModalPorps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-black">
        <button className="p-1 border-0 text-white hover:opacity-70 w-fit transition">
          <X size={28} />
        </button>
        <div className="mt-4">{body}</div>
        {footer && <div className="mt-4">{footer}</div>}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
