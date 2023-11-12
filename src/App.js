import './App.css';
import PasswordValidator from './components/password-validator/password.validator.component';


const optionsSample = [
  'specialChar',
  'uppercase'
]

function App() {
  return (
    <PasswordValidator options={optionsSample} />
  );
}

export default App;
