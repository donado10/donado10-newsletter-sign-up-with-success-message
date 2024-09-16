import "./App.css";
import { useState } from "react";
import { ISubscribe, Subscribe, SubscribeSuccess } from "./Components/Suscribe";

function App() {
  const [suscribeData, setSuscribeData] = useState<ISubscribe>({
    mail: null,
    isSuccess: false,
  });
  return (
    <main className="w-full text-primary md:flex md:items-center md:justify-center">
      {!suscribeData.isSuccess && (
        <Subscribe onSubscribeHandler={setSuscribeData} />
      )}
      {suscribeData.isSuccess && (
        <SubscribeSuccess
          onSubscribeHandler={setSuscribeData}
          mail={suscribeData.mail!}
        />
      )}
    </main>
  );
}

export default App;
