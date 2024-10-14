import { Loading } from "@/components/loading/index";
import { Home } from "@/app/home";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_800ExtraBold
} from '@expo-google-fonts/poppins'
import React from "react";

export default function App() {
  const [fontsLodead] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });

  if(!fontsLodead) {
    return <Loading />
  }

  return <Home />;
}