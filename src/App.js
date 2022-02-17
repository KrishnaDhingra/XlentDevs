import './App.css';
import { Heading1Primary, Heading2Primary, Heading2Secondary, TitlePrimary, TitleSecondary, SubTitlePrimary, SubTitleSecondary, DescriptionPrimary, DescriptionSecondary } from './components/text'
import { PrimaryButton1, PrimaryButton2, SecondaryButton1, SecondaryButton2 } from './components/buttons.js'

function App() {
  return (
    <div className="bg-gray-50 h-screen w-screen">
      <Heading1Primary/>
      <Heading2Primary/>
      {/* <Heading2Secondary/> */}
      <TitlePrimary/>
      {/* <TitleSecondary/> */}
      <SubTitlePrimary/>
      {/* <SubTitleSecondary/> */}
      <DescriptionPrimary/>
      {/* <DescriptionSecondary/> */}
      <div className="flex gap-3">
        <PrimaryButton1/>
        <PrimaryButton2/>
        <SecondaryButton1/>
        <SecondaryButton2/>
      </div>
    </div>
  );
}

export default App;
