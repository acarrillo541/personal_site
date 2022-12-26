//import Button from 'react-bootstrap/Button';
//import MDBBtn from 'mdb-react-ui-kit';
import  { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button>hello</button>
        <MDBBtn floating size='lg' style={{ backgroundColor: '#333333' }} >
          <MDBIcon fab icon='github'/>
        </MDBBtn>
        <MDBBtn floating size='lg' style={{ backgroundColor: '#dd4b39' }} >
          <MDBIcon fab icon='google'/>
        </MDBBtn>
        <MDBBtn floating size='lg' style={{ backgroundColor: '#0082ca' }} >
          <MDBIcon fab icon='linkedin'/>
        </MDBBtn>
        
        <p>
          Starting from here
        </p>
      </header>
    </div>
  );
}

export default App;
