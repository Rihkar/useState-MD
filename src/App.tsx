import './App.scss';
import EzCalc2 from './Components/EzCalc2/EzCalc2';
import EzCalc1 from './Components/EzCalc1/EzCalc1';
import Pica from './Components/Pica/Pica';
import './Style/Reset.scss';
import ColorAndTextChange from './Components/Color&TextChange/Color&TextChange';
import Input from './Components/Input/Input';
import NumberArray from './Components/NumberArray/NumberArray';
import Kartinas from './Components/Kartinas/Kartinas';

const App = () => (
  <section className="container">
    <EzCalc1 />
    <EzCalc2 />
    <Pica />
    <ColorAndTextChange />
    <Input />
    <NumberArray />
    <Kartinas />
  </section>
);

export default App;
