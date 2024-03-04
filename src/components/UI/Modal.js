import { Fragment } from 'react';
import ReactDom from 'react-dom';
import { Backdrop } from './Loader';

const Modal = () => {
    return (
        <Fragment>
        {
            ReactDom.createPortal(
                <Fragment>
                    <Backdrop/>
                    <div className="modal">
                        Modal Content!
                    </div>
                </Fragment>
                ,
                document.getElementById("modal-root")
            )
        }
        </Fragment>
    )
}

export default Modal;