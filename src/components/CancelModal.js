import React, { Fragment } from "react";

const CancelModal = () => (
  <Fragment>
    <div
      className="modal fade"
      id="cancelModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-parent" role="document">
        <div className="modal-content" id="cancelModalContent">
          <div id="cancel-modal-body">
            <p id="cancelText">Are you sure you want to cancel</p>
            <div className="cancel-action-buttons">
              <button
                type="button"
                id="yesButton"
                data-dismiss="modal"
                data-toggle="modal"
                data-target="#cancelModal"
              >
                Yes
              </button>
              <button
                type="button"
                id="noButton"
                data-dismiss="modal"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default CancelModal;
