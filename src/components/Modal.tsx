import { ReactNode } from "react";
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

export const PhotoModal = ({
  visible,
  onClose,
  photo,
}: {
  visible: boolean;
  onClose(): void;
  photo: string | undefined;
}) => {
  return (
    <Modal visible={visible} onClose={onClose}>
      <img
        id="modalImage"
        src={photo}
        alt="Family Member"
        className="rounded-md w-1/2 h-5/6 mt-20  cursor-pointer"
      ></img>
    </Modal>
  );
};
export default Modal;
