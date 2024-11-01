import '../APP.css'
import Router from "./Router/Router";
import BASE_URL from "../config.ts"
export default function App() {
  console.log("BASE_URL:", BASE_URL);

  return (
     <div className='flex justify-start items-start flex-col w-screen'>
            <Router />
    </div> 

  )
}


