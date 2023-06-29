import "../styles/globals.css";
//INTRNAL IMPORT
import { NavBar} from "../components/componentsindex";
import { EvidanceProvider } from "../Context/EvidanceContext";



const MyApp = ({ Component, pageProps }) => (
  <EvidanceProvider>
      <NavBar />
      <Component {...pageProps} />
  </EvidanceProvider>
);

export default MyApp;
