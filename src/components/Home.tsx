import Auth from "./Auth";
import { AuroraBackground } from "../components/ui/aurora-background";
const Home: React.FC = () => {
    return (
        <AuroraBackground showRadialGradient={true}>
        <div className="text-center font-poppins text-black">
          <h1 className="text-4xl font-poppins font-bold">Welcome to Student Portal </h1>
          <p className="mt-4 text-lg font-poppins"> Keep an eye on your grades</p>
        </div>
            <Auth/>
      </AuroraBackground>
    );
}

export default Home;
