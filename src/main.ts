import "./style.css";
import { setupTempoTap as setupTempoTap } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
  
    <h1>
      BPM Wizard
    </h1>

    <button id="tap">Tap</button>
  
  </div>
`;

setupTempoTap(document.querySelector<HTMLButtonElement>("#tap")!);
