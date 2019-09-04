import React, {Component} from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import './App.css';
import drawerToggleButton from './components/SideDrawer/DrawerToggleButton';

class App extends Component {
  state = {
    sideDrawerOpen:false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen};
    })
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOper:false})
  }
  render(){
   
    let backdrop=null;

    if(this.state.sideDrawerOpen) {     
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

  return (
    <div className="App"> 
      <NavBar drawerClickHandler={this.drawerToggleClickHandler}/>
     <SideDrawer show={this.state.sideDrawerOpen}/>
     {backdrop}
 
      
       <main style={{marginTop:'64px'}}>
          <Banner/>
       </main>
       
       
 
    </div>
  );
}}

export default App;
