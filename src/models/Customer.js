import React from 'react';
import firebase from 'firebase';
// eslint-disable-next-line
import firestore from "../config/Firestore";

class Customer extends React.Component {

    constructor() {
     super();
      this.state = {
        fullname: "",
        email: "",
        businessname: "",
      };
      this.updateInput = this.updateInput.bind(this);
      this.addUser = this.addUser.bind(this);
    }

    updateInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

      addUser = e => {
        e.preventDefault();
        const db = firebase.firestore();
        db.settings({
          timestampsInSnapshots: true
        });
        // eslint-disable-next-line
        db.collection("customers").add({
          fullname: this.state.fullname,
          email: this.state.email,
          businessname: this.state.businessname
        });  
        this.setState({
          fullname: "",
          email: "",
          businessname: "",
        });
      };

      getCustomers = e => {
        e.preventDefault();
        const db = firebase.firestore();
        db.collection("items").get().then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            console.log(doc.id, " => ", doc.data());
          });
        });
      }

  render() {
    return (
        <form onSubmit={this.addUser}>
          <input
            type="text"
            name="fullname"
            placeholder="Full name"
            onChange={this.updateInput}
            value={this.state.fullname}

          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={this.updateInput}
            value={this.state.email}
          />
          <input
            type="text"
            name="businessname"
            placeholder="Business Name"
            onChange={this.updateInput}
            value={this.state.businessname}
          />
          <button type="submit">Submit</button>
        </form>
        
        );
      }
   }
export default Customer;