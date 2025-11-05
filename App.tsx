import { Loading } from "@/components/Loading";
import { Home } from "@/screens/Home";
// import { Initial } from "@/screens/Initial";
import {
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_900Black,
  useFonts,
} from "@expo-google-fonts/poppins";

export default function App() {
  const fontLoaded = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_900Black,
  });
  if (!fontLoaded) {
    return <Loading />;
  }
  return <Home />;
}
