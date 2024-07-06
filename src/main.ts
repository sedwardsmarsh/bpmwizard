import "./style.css";
import { setupTempoTap as setupTempoTap } from "./tempoTap.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
  
    <h1>
      BPM Wizard
    </h1>

    <div id="readout">
      <p id="meanBpm">mean : 0</p>
      <p id="medianBpm">median : 0</p>
      <p id="modeBpm">mode : 0</p>
      <p id="stddBpm">stdd : 0</p>
    </div>

    <button id="tap"/>
  
  </div>
`;

setupTempoTap(
    document.querySelector<HTMLButtonElement>("#tap")!,
    document.querySelector<HTMLParagraphElement>("#meanBpm")!,
    document.querySelector<HTMLParagraphElement>("#medianBpm")!,
    document.querySelector<HTMLParagraphElement>("#modeBpm")!,
    document.querySelector<HTMLParagraphElement>("#stddBpm")!
);
