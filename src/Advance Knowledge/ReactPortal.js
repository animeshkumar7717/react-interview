import React, { useState } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ isOpen, children, onClose }) => {
    if (!isOpen) {
        return null;
    }

    return createPortal(
        <div className='modal'>
            <h2 className='heading'>This is react portal using createPortal from react...</h2>
            <div>
                <span className="close-button" onClick={onClose}>X</span>
                <div className='modal-content'>{children}</div>
            </div>
        </div>,
        document.getElementById("modal")
    );
};

const ReactPortal = () => {
    const [isOpenPortal, setIsOpenPortal] = useState(false);
    console.log('isOpenPortal', isOpenPortal);

    const handleCloseModal = () => {
        setIsOpenPortal(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission (page reload)
        setIsOpenPortal(false); // Close the modal
    };

    return (
        <div>
            <h3>React Portal</h3>
            <button onClick={() => setIsOpenPortal(true)}>Open Portal</button>
            <Modal isOpen={isOpenPortal} onClose={handleCloseModal}>
                <form className='login-form' onSubmit={handleSubmit}>
                    <section>
                        <label>Email</label>
                        <input type='email' />
                    </section>
                    <section>
                        <label>Password</label>
                        <input type='password' />
                    </section>
                    <button type="submit">Submit</button>
                </form>
            </Modal>
        </div>
    );
};

export default ReactPortal;
