import React from 'react';
// import logo from './logo.svg';
import './App.css';
import AppBar from './components/Appbar'
import Table from './components/Table'
import axios from 'axios';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';

// import Menu from './components/Menu'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items : [],
      open : false,
      value : null
    }
  }

  
  componentDidMount() {
    axios.get('http://localhost:3000/admin').then(resp => {
    
      this.setState({
        items : resp.data.items
     
      })
     
    })
  }

  handleLogout = () => {
  
    window.location.replace("http://localhost:3000/users/login");
  }
  handleOpen = (sd) => {
    
    
    this.setState({
      open :true,
      value : sd
    })
  }
  handleClose = () => {
    this.setState({
      open : false
    })
  }
  render() {
    console.log('stat',this.state.items)
    return (
                        <AppBar handleLogout = {this.handleLogout}>
                          <Table handleOpen={this.handleOpen} data={this.state.items}/>
                          {/* <Menu /> */}
                          <Modal 
                                  onClose={this.handleClose}

                          open={this.state.open}>
                            <Paper className="paper" >

                              <p><span><b>1.Full Name:</b></span></p>
                              <p><span><b>2.Mobile Number:{this.state.contact}</b></span></p>
                              <p><span><b>3.Adhar Number:</b></span></p>
                              <p><span><b>4.Pan Number:</b></span></p>
                              <p><span><b>5.BankAccount:</b></span></p>

                    {/* <h1>{JSON.stringify(this.state.value)}</h1> */}
      </Paper>
                        
                    </Modal>
                      </AppBar>


    )
  }
}

export default App;
