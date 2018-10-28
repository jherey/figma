import React, { Component, Fragment } from 'react';
import toastr from "toastr";
import SuggestionsPage from './components/SuggestionsPage';
import FeedbackModal from "./components/FeedbackModal";
import CancelModal from "./components/CancelModal";
import './App.css';

class App extends Component {
  onSubmit = () => {
    const feedback = document.getElementById("modalContent").value;
    const headers = new Headers({
      "content-type": "application/json"
    });

    const feedbackData = {
      emailaddress: "otutudinma1995@gmail.com",
      details: feedback,
    };

    if (feedback !== '') {
      fetch("https://api.vencru.com/api/admin/addfeedback", {
        method: "POST",
        body: JSON.stringify(feedbackData),
        headers
      })
        .then(res => res.json())
        .then(data => {
          toastr.success("Thank you for the feedback!");
          document.getElementById("modalContent").value = '';
          document.getElementById('closeModal').click();
        })
        .catch(error => toastr.error("Feedback not sent!"));
    } else {
      toastr.info('Please write a feedback');
    }
  };

 render() {
   return (
     <Fragment>
        <SuggestionsPage />
        <FeedbackModal onSubmit={this.onSubmit} />
        <CancelModal />
     </Fragment>
   );
 }
}

export default App;