import "./style.css";
import { setupTempoTap as setupTempoTap } from "./tempoTap.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="parent">
  
    <h1>
      BPM Wizard
    </h1>

    <div class="readout">

      <div class="statRow">
        <p class="desc">meanBpm</p> 
        <p class="data meanBpm">0</p>
      </div>

      <div class="statRow">
        <p class="desc">medianBpm</p> 
        <p class="data medianBpm">0</p>
      </div>

      <div class="statRow">
        <p class="desc">modeBpm</p> 
        <p class="data modeBpm">0</p>
      </div>

      <div class="statRow">
        <p class="desc">stddBpm</p> 
        <p class="data stddBpm">0</p>
      </div>
      
    </div>

    <button class="tap"/>Tap Me</button>
  
  </div>
`;

// Initialize calculation engine.
setupTempoTap(
  document.querySelector<HTMLButtonElement>(".tap")!,
  document.querySelector<HTMLParagraphElement>(".meanBpm")!,
  document.querySelector<HTMLParagraphElement>(".medianBpm")!,
  document.querySelector<HTMLParagraphElement>(".modeBpm")!,
  document.querySelector<HTMLParagraphElement>(".stddBpm")!
);

// Spacebar triggers tap button.
document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    // Prevent the default spacebar action (scrolling down the page)
    event.preventDefault();

    // Trigger the button click
    const button = document.querySelector<HTMLButtonElement>(".tap");
    if (button) {
      // Add the class that simulates the active state
      button.classList.add("active-style");

      // Remove the class after a short delay to simulate the :active state
      setTimeout(() => {
        button.classList.remove("active-style");
        button.classList.add("")
      }, 100); // 100ms is an arbitrary short delay

      // Programmatically trigger the button click
      button.click();
    }
  }
});
