import React, { Fragment } from "react";
import vencruLogo from '../assets/vencru-logo.png';

const FeedbackModal = ({ onSubmit, submitted }) => (
  <Fragment>
    {/* modal */}
    <div
      className="modal fade"
      id="exampleModalCenter"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-parent" role="document">
        <div className="modal-content" id="content">
          <div className="modal-body" id="modal-body">
            <h5 className="modal-title">
              Feedback
            </h5>
            <textarea
              name=""
              id="modalContent"
              placeholder="Please Share Your Comments Or Suggestions"
              cols="62"
              rows="8"
            />
            <div className="action-buttons">
              <button
                type="button"
                id="closeModal"
                data-dismiss="modal"
                data-toggle="modal"
                data-target={submitted ? null : "#cancelModal"}
              >
                Cancel
              </button>
              <button
                onClick={onSubmit}
                id="saveButton"
              >
                { submitted ? <div className="loader"></div> : 'Save'}
              </button>
            </div>
            <div className="logo">
              <img src={vencruLogo} alt="" />

            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default FeedbackModal;
