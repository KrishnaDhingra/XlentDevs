import './App.css';
import { Heading1Primary, Heading2Primary, Heading2Secondary, TitlePrimary, TitleSecondary, SubTitlePrimary, SubTitleSecondary, DescriptionPrimary, DescriptionSecondary } from './components/text'
import { PrimaryButton1, PrimaryButton2, SecondaryButton1, SecondaryButton2 } from './components/buttons.js'
import SignUp from './pages/signUp';

function App() {
  return (
    <div className="bg-gray-50 h-screen w-screen">
      <SignUp/>
    </div>
  );
}

export default App;
