import { useState } from 'react';

const useModal = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '35%',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    return { open, handleOpen, handleClose, style };
};

export default useModal;