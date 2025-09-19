import { Bar } from "react-chartjs-2";
import {
    Chart as chartjs,
     CategoryScale,
      LinearScale, 
      BarElement, 
      Title, 
      Tootip,
       Legend,
     } from "chart.js";

chartjs.register(CategoryScale, LinearScale, BarElement, Title, Tootip, Legend);

export default function TrafficChart(){
    const data = {
        labels: ["192.168.0.1", "192.168.0.2", "192.168.0.3"],
        datasets: [
            {
                label: "inbound",
                data: [120, 200, 150],
                backgroundColor: "rgba(54, 162, 235, 0.6)",
            },
            {
                label: "Outbound",
                data: [100, 180, 90],
                backgroundColor: "rgba(255, 99, 132, 0.6)",
            },
        ],
    };

    return (<Bar data={data} options={{ responsive: true, plugins: {legend: { position: "top"} } }} />);
}