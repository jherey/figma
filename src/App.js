import React, { Component, Fragment } from 'react';
import toastr from "toastr";
import SuggestionsPage from './components/SuggestionsPage';
import FeedbackModal from "./components/FeedbackModal";
import CancelModal from "./components/CancelModal";
import './App.css';

class App extends Component {
  state = {
    submitted: false,
  }

  onSubmit = () => {
    const feedback = document.getElementById("modalContent").value;
    const sanitizedFeedback = feedback.trim();
    const headers = new Headers({
      "content-type": "application/json"
    });

    const feedbackData = {
      emailaddress: "otutudinma1995@gmail.com",
      details: sanitizedFeedback,
    };
    
    if (sanitizedFeedback !== '') {
      this.setState({ submitted: true });
      fetch("https://api.vencru.com/api/admin/addfeedback", {
        method: "POST",
        body: JSON.stringify(feedbackData),
        headers
      })
        .then(res => res.json())
        .then(data => {
          toastr.success("Thank you for the feedback!");
          document.getElementById('closeModal').click();
          document.getElementById("modalContent").value = '';
          this.setState({ submitted: false });
        })
        .catch(error => {
          toastr.error("Feedback not sent!");
          this.setState({ submitted: false });
        });
    } else {
      toastr.info('Please write a feedback');
    }
  };

 render() {
   const { onSubmit } = this;
   const { submitted } = this.state;
   return (
     <Fragment>
        <SuggestionsPage />
        <FeedbackModal onSubmit={onSubmit} submitted={submitted} />
        <CancelModal />
     </Fragment>
   );
 }
}

export default App;