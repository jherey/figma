import React, { Component, Fragment } from 'react';
import toastr from "toastr";
import SuggestionsPage from './components/SuggestionsPage';
import FeedbackModal from "./components/FeedbackModal";
import CancelModal from "./components/CancelModal";
import './App.css';

class App extends Component {
  state = {
    submitted: false,
    isCollapsed: false,
    style: {}
  }

  componentDidMount() {
    this.handleWidthChange()
    window.addEventListener('resize', this.handleWidthChange, false);
  }
  
  handleWidthChange = () => {
    const { isCollapsed } = this.state;
    if (window.innerWidth < 580 && !isCollapsed) {
      return this.setState({ style: {
        lastHack: {
          display: 'none'
        }
      }})
    }
    return this.setState({ style: {
      display: 'block'
    }})
  }

  toggleSideNav = () => {
    this.setState(prevState => ({
      isCollapsed: !prevState.isCollapsed,
    }), () => {
      const { isCollapsed } = this.state;
      this.collapseContent(isCollapsed)}
    );
  }

  collapseContent(isCollapsed) {
    if (isCollapsed) {
      if (window.innerWidth < 580) {
        return this.setState({
          style: { 
            display: 'block',
            navWidth: {
              width: '223px',
              position: 'absolute'
            },
            contentArea: {
              width: '100%'
            }
          }
        })
      }
      return this.setState({
        style: { 
          display: 'none',
          navWidth: {
            width: '83px'
          },
          contentArea: {
            width: '100%'
          }
        }
      })
    }
    this.handleWidthChange()
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
   const { submitted, style } = this.state;
   return (
     <Fragment>
        <SuggestionsPage
          toggleSideNav={this.toggleSideNav}
          style={style}
        />
        <FeedbackModal onSubmit={onSubmit} submitted={submitted} />
        <CancelModal />
     </Fragment>
   );
 }
}

export default App;