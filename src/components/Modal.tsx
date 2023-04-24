import { ReactNode, MouseEventHandler } from "react";
interface Modal {
  children: ReactNode;
  visible: boolean;
  onClose(): void;
}
const Modal = ({ children, visible, onClose }: Modal) => {
  if (!visible) return null;

  const handleOnBackDropClick = (e: any) => {
    let button = e.target as HTMLButtonElement;

    if (button.id === "backdrop") onClose && onClose();
  };

  return (
    <div
      id="backdrop"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm duration-100"
      onClick={handleOnBackDropClick}
    >
      {children}
    </div>
  );
};

export default Modal;
