import './App.css';
import PasswordValidator from './components/Password-Validator/Password.Validator.component';


const optionsSample = [
  'specialChar',
  'uppercase',
  'number',
  'noConsecutiveLetters'
]

function App() {
  return (
    <PasswordValidator options={optionsSample} />
  );
}

export default App;
