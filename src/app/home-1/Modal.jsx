'use client'
import React from 'react';
// import './Modal.css';  // Add custom styles for the modal

const Modal = ({ isOpen, closeModal, imageSrc }) => {
  if (!isOpen) return null; // Don't render if the modal is closed

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={closeModal}>&times;</span>
        <img src={imageSrc} alt="Modal" className="modal-image" />
      </div>
    </div>
  );
};

export default Modal;
