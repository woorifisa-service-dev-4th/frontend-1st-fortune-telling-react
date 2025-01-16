import { DefaultLayout } from "./layouts/DefaultLayout";
import  FortuneHeader  from "./components/fortuneHeader"
import FortuneBody from "./components/fortuneBody";
import FortuneName from "./components/fortuneName";
import FortuneKind from "./components/fortuneKind";
import FortuneBirth from "./components/fortuneBirth";
import FortuneButton from "./components/fortuneButton";


export default function App() {
  return (
    <DefaultLayout>
      <FortuneHeader/>
      <FortuneBody>
      <FortuneName/>
      <FortuneKind/>
      <FortuneBirth/>
      <FortuneButton/>
      </FortuneBody>
    </DefaultLayout>
  )
}