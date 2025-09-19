import TrafficChart from "./components/TrafficChart";

function App() {
  return (
    <div style={{ width: "80%", margin: "50px auto", textAlign: "center" }}>
      <h1>Monitor de Tráfego em Tempo Real</h1>
      <TrafficChart />
    </div>
  );
}

export default App;
