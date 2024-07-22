import "./style.css";
import { setupTempoTap as setupTempoTap } from "./tempoTap.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="parent">
  
    <h1>
      BPM Wizard
    </h1>

    <div id="readout">

      <div class="statRow">
        <p class="desc">meanBpm</p> 
        <p class="data" id="meanBpm">0</p>
      </div>

      <div class="statRow">
        <p class="desc">medianBpm</p> 
        <p class="data" id="medianBpm">0</p>
      </div>

      <div class="statRow">
        <p class="desc">modeBpm</p> 
        <p class="data" id="modeBpm">0</p>
      </div>

      <div class="statRow">
        <p class="desc">stddBpm</p> 
        <p class="data" id="stddBpm">0</p>
      </div>
      
    </div>

    <button id="tap"/>Tap Me</button>
  
  </div>
`;

setupTempoTap(
    document.querySelector<HTMLButtonElement>("#tap")!,
    document.querySelector<HTMLParagraphElement>("#meanBpm")!,
    document.querySelector<HTMLParagraphElement>("#medianBpm")!,
    document.querySelector<HTMLParagraphElement>("#modeBpm")!,
    document.querySelector<HTMLParagraphElement>("#stddBpm")!
);
