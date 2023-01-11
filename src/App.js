//import Button from 'react-bootstrap/Button';
//import MDBBtn from 'mdb-react-ui-kit';
import Layout from './component/layout';
import backgroundImage from './files/website_background.png'

const backgroundStyle={
  width: '100vw',
  height: '100vh',
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}

function App() {
  return (
    <div style={backgroundStyle}>
      <Layout/>
    </div>
  );
}

export default App;
