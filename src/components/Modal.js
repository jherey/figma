import React, { Fragment } from "react";

const Modal = ({ onSubmit }) => (
  <Fragment>
    {/* modal */}
    <div
      className="modal fade bd-example-modal-lg"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Feedback
            </h5>
            <textarea
              name=""
              id="modalContent"
              placeholder="Please Share Your Comments Or Suggestions"
              cols="70"
              rows="9"
            />
            <div>
              <button
                type="button"
                className="btn"
                id="closeModal"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={onSubmit}
                className="btn"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default Modal;
