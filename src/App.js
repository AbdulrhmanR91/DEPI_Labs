import "./App.css";
import ComponentOne from "./components/componentsContextq/componentOne/componentOne";
import Register from "./components/form/Regrestration";
// import Products from './components/Products';
// import Counter from './components/counter/counter';
import { Provider } from "./components/context/Context";
import PostComponent from "./components/get_post_Components/postComponent";
import GetComponent from "./components/get_post_Components/getComponent";

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      {/* <Products /> */}

      <Register></Register>

      {/* <Provider value={
        {
          name: "Abdulrhman",
          Email: "Abdulrhman@gmail.com",
          Address:"Egypt",
          age:21,
          Gender:"male"
        }
      }>
        <ComponentOne  />
      </Provider> */}

      {/* <GetComponent/> */}

      {/* <PostComponent/> */}
    </div>
  );
}

export default App;
