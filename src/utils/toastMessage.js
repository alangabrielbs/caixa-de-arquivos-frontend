import { toast } from 'react-toastify';

const toastMessage = (type, message, position) => {
  toast[type](message, {
    position,
    draggable: true,
    autoClose: 5000,
    closeOnClick: true,
    pauseOnHover: true,
    progress: undefined,
    className: `rounded ${type}`,
    hideProgressBar: false,
  });
};

export default toastMessage;
