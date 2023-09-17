import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';

/**
 * Có 2 kiểu component : class/function(function/arrow)
 * cú pháp JSX
 */
//Function
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <MyComponent />
      </header>
      <div></div>
    </div>
  );
}
//Function Arrow
const AppArrow = () => {
  return <h1>Đây là component function arrow</h1>;
};
export { App, AppArrow };
