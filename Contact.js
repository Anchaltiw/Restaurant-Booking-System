import { Component } from 'react'
import React,{useState}  from 'react'
import { NavLink } from 'react-router-dom'


class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      submitted: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Form data:', this.state);

  
    this.setState({ submitted: true });

    
    alert('Form submitted!');

   
    window.location.reload();
  };


  render() {
    const { submitted } = this.state;

    return (
      <>
      <Nav/>
      <div style={styles.container}>
        <h1 style={styles.heading}>For your Queries....</h1>
        <form onSubmit={this.handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="message" style={styles.label}>Your Queries :)</label>
            <textarea
              id="message"
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
              style={styles.textarea}
            />
          </div>
          <button type="submit" style={{ backgroundColor: "#841C05", color:"#FFC300" }}>Submit</button>
        </form>
        {submitted && (
          <p style={styles.submittedMessage}>Thank you for submitting the form! <br></br> We'll reach out✌️</p>
        )}
      </div>
      </>
    );
  }
}

function Nav() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary" >
      <div class="container-fluid" style={{backgroundColor:"#841C05"}}>
      <a class="navbar-brand ms-5" href="/" style={{color:"#FFC300" }}> <h4>Restaurant Booking</h4></a>
          <ul className='navbar-nav justify-content-end'>
              <div className='mx-2 p-2'><li className='nav-item'><NavLink to="/" className='nav-link' style={{color:"#FFC300"}}> <h4>Home</h4> </NavLink></li></div>
              <div className='mx-2 p-2'><li className='nav-item'><NavLink to="/bookanappointment" className='nav-link' style={{color:"#FFC300"}}> <h4>Order Food</h4> </NavLink></li></div>
              <div className='mx-2 p-2'><li className='nav-item'><NavLink to="/Contact" className='nav-link' style={{color:"#FFC300"}}> <h4>Contact Us</h4> </NavLink></li></div>

          </ul>
      </div>
    </nav>

    <div>
      <h1 class="text-center mt-3">Contact Us</h1>
      <p class="lead text-center ms-4">
      For further queries, reach us at:
      </p>
    </div>


    </>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f7f0e1'
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    color:'#694802'
  },
  formGroup: {
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  submittedMessage: {
    marginTop: '20px',
    color: 'green',
    fontWeight: 'bold',
  },
};

export default Contact;