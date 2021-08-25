import React from 'react';
import { Modal } from 'react-bootstrap';

const ModalDetect = (props) => {
    return (
        <Modal show={props.isPopupDetect} onHide={() => { props.updateDataContract({ isPopupDetect: false }) }} id="noticeModal" centered className="modal g-modal-content fade simple modal-notice">
            <button type="button" className="btn btn-close btn-effect-hover" onClick={() => { props.updateDataContract({ isPopupDetect: false }) }}><span>Close</span></button>
            <div className="modal-inner">
                <div className="modal-body">
                    <div className="content text-center">
                        <h3 className="text-notice">Notice</h3>
                        <p>Please connect Binance Smart Chain!</p>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default ModalDetect;