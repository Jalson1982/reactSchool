import React from 'react'
import {
    Modal,
    Button

} from "react-bootstrap";
import ModalStyle from './style'

const ModalHeader = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div style={ModalStyle.layout}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        THE JOURNEY START HERE! FASTEN YOUR SEAT BELT
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <div
                        className="video"
                        style={{
                            position: "relative",
                            paddingBottom: "56.25%" /* 16:9 */,
                            paddingTop: 25,
                            height: 0
                        }}
                    >
                        <iframe
                            style={ModalStyle.frame}
                            src={`https://www.youtube.com/embed/gWYSkxeZ_EM?autoplay=1`}
                            frameBorder="0"
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </div>
        </Modal>
    );
}

export default ModalHeader;