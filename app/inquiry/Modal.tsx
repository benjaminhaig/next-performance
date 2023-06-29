'use client'
import { signOut } from 'firebase/auth';
interface ModalProps {
    onClose: () => void;
}

const Modal = ({ onClose }: ModalProps) => {
    console.log(signOut)
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-md">
                <h2 className="text-lg font-bold mb-4">Thank You</h2>
                <p>Thank you for your submission!</p>
                <button
                    className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
