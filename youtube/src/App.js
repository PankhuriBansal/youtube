import "./App.css"
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from './components/utils/store'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";

const appRouter = createBrowserRouter([{
  path: "/" ,
  element: <Body/>,            //rendering body when the route is "/"
  children :[                    //these children will go where my outlet is present and outlet is crested in body
    { 
      path: "/",                 //as body is having 2 children, the path is "/" it will render the maincontainer 
      element: <MainContainer/>
    },
    {
      path: "/watch",          //if path is watchpage it will render the watch page 
      element: <WatchPage/>
    },
    {
      path: "/demo",          //if path is watchpage it will render the watch page 
      element:<><Demo/><Demo2/></> 
    }
  ]
}])

function App() {
  return (
    <Provider store = {store}>
    <div >
     <Head/>
    <RouterProvider router={appRouter}/>                    
    {/* //providing router here as the component changes according to my app router, router provider will load the body and children from the body will go according to the outlet present in the body */}
    </div>
    </Provider>
  );
}

export default App;

/*
Head
Body 
  sidebar 
    menu items
  main container 
    buttons list 
    video container 
        video card 
*/
