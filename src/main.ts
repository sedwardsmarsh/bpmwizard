import "./style.css";
import { setupTempoTap as setupTempoTap } from "./tempoTap.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
  
    <h1>
      BPM Wizard
    </h1>

    <p id="meanBpm">mean : 0<p>
    <p id="medianBpm">median : 0<p>
    <p id="modeBpm">mode : 0<p>
    <p id="stddBpm">stdd : 0<p>

    <button id="tap"/>
  
  </div>
`;

setupTempoTap(document.querySelector<HTMLButtonElement>("#tap")!);
