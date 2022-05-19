import { Container } from 'react-bootstrap';
import AppRouter from './Routers/AppRouter'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return ( 
      <>
        <AppRouter/>
        <Container>
          <div>
            &#169; Camila's Store CR 2022
          </div>
        </Container>
      </>
  );
}

export default App;
 