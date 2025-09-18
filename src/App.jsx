import { Suspense } from "react";
import "./App.css";
import Countries from "./components/countries/Countries";

const url = "https://openapi.programming-hero.com/api/all";

const fetchCountries = async () => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

function App() {
  const countriesPromise = fetchCountries();
  return (
    <>
      <div>
        <Suspense fallback={<p>Data is Loading...</p>}>
          <Countries countriesPromise={countriesPromise} />
        </Suspense>
      </div>
    </>
  );
}

export default App;
