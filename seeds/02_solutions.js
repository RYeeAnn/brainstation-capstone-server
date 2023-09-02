require("dotenv").config();
const { SERVER_URL, PORT } = process.env;

exports.seed = function (knex) {
  return knex("solutions").insert([
    {
      issue_id: 1,
      solution: "Jump start the car using jumper cables.",
      instructions: `
        If your car won't start due to a dead battery, you can jump-start it using jumper cables. Follow these steps:
        <ol>
          <img class="content-img" src="${SERVER_URL}:${PORT}/assets/jumpstart.png" alt="jumpstart" />
          <li>Locate a car with a working battery and park it close to your car, facing each other.</li>
          <li>Turn off both cars and set the parking brakes.</li>
          <li>Open the hoods of both cars.</li>
          <li>Attach the red (positive) cable clamp to the positive terminal (+) of the dead battery.</li>
          <li>Attach the other red (positive) cable clamp to the positive terminal (+) of the working battery.</li>
          <li>Attach the black (negative) cable clamp to the negative terminal (-) of the working battery.</li>
          <li>Attach the other black (negative) cable clamp to an unpainted metal surface on your car's engine block, away from the battery and fuel system.</li>
          <li>Start the engine of the working car and let it run for a few minutes.</li>
          <li>Try starting your car. If it doesn't start, check the connections and make sure the cables are securely attached.</li>
          <li>Once your car starts, keep it running for a few minutes to charge the battery.</li>
          <li>Remove the cables in reverse order: Start by removing the black cable from the unpainted metal surface, then the black cable from the working battery, the red cable from the working battery, and finally the red cable from your car's dead battery.</li>
        </ol>
      `,
      tools_required: "Jumper cables, working car",
    },

    {
      issue_id: 2,
      solution: "Replace the flat tire with the spare tire.",
      instructions: `
      If you have a flat tire, you can replace it with the spare tire. Follow these steps:
      <ol>
      <li>Locate the spare tire, jack, and lug wrench in your car's trunk.</li>
      <li>Loosen the lug nuts on the flat tire slightly using the lug wrench. Do not remove them completely.</li>
      <li>Place the jack under the car's frame near the flat tire and raise the car off the ground.</li>
      <li>Completely remove the lug nuts and pull the flat tire off the wheel hub.</li>
      <li>Align the holes on the spare tire with the wheel bolts and push the spare tire onto the wheel hub.</li>
      <li>Hand-tighten the lug nuts onto the wheel bolts.</li>
      <li>Lower the car back to the ground using the jack.</li>
      <li>Use the lug wrench to tighten the lug nuts in a crisscross pattern. Make sure they are securely fastened.</li>
      </ol>`,
      tools_required: "Jack, lug wrench, spare tire",
    },

    {
      issue_id: 3,
      solution: "Inspect the coolant level and radiator cap.",
      instructions: `
      If your car is overheating or running hot, it could be due to low coolant or a faulty radiator cap. Follow these steps to inspect the coolant level and radiator cap:
      <ol>
      <li>Open the hood of your car and let the engine cool down for at least 30 minutes.</li>
      <li>Locate the coolant reservoir. It's a translucent plastic container near the radiator with minimum and maximum level markings.</li>
      <li>Check the coolant level by comparing it to the minimum and maximum marks on the reservoir. The level should be between these marks.</li>
      <li>If the coolant level is low, carefully remove the radiator cap when the engine is cool. Slowly add a mixture of coolant and water to the radiator until it reaches the proper level. Use a 50/50 mixture of coolant and distilled water for optimal performance.</li>
      <li>Inspect the radiator cap for any signs of damage, cracks, or worn seals. A faulty radiator cap can lead to coolant leaks and overheating.</li>
      <li>Before reinstalling the radiator cap, make sure the rubber gasket or seal is in good condition and properly seated.</li>
      <li>Close the radiator cap securely and close the hood.</li>
      </ol>`,
      tools_required: "Coolant, radiator cap tester",
    },

    {
      issue_id: 3,
      solution: "Check for coolant leaks in the cooling system.",
      instructions: `
      To identify and address coolant leaks in your car's cooling system, follow these steps:
      <ol>
      <li>To identify and address coolant leaks in your car's cooling system, follow these steps:</li>
      <li>Look for signs of coolant leakage, such as puddles or spots under the car after it has been parked.</li>
      <li>If you discover a leak, identify the source. It could be a damaged hose, a loose connection, or a cracked component.</li>
      <li>Depending on the severity of the leak, you may need to repair or replace the affected part. Consult a professional mechanic if needed.</li>
      </ol>`,
      tools_required: "Flashlight, coolant",
    },

    {
      issue_id: 4,
      solution: "Inspect the brake pads for wear and damage.",
      instructions: `
      Regularly inspecting your car's brake pads is essential for safe driving. Follow these steps:
      <ol>
      <li>Lift the car using a jack and secure it with jack stands.</li>
      <li>Remove the wheel to access the brake components.</li>
      <li>Inspect the brake pads for thickness and wear. If they are worn down close to the indicator, it's time to replace them.</li>
      <img class="content-img" src="${SERVER_URL}:${PORT}/assets/brakepads-compare.jpeg" alt="Brakepads" />
      <li>If the brake pads are worn unevenly or if you notice any damage, consider replacing them.</li>
      <li>Reinstall the wheel and lower the car.</li>
      </ol>`,
      tools_required: "Jack, lug wrench, brake pads",
    },

    {
      issue_id: 4,
      solution:
        "Apply anti-squeal brake lubricant to the back of the brake pads.",
      instructions: `
        If you're experiencing brake noise or squealing, applying anti-squeal brake lubricant can help. Follow these steps:
        <ol>
        <li>Remove the brake pads from the caliper. Refer to your vehicle's manual for guidance.</li>
        <li>Apply a thin, even layer of anti-squeal brake lubricant to the back of each brake pad.</li>
        <li>Reinstall the brake pads in the caliper.</li>
        <li>Make sure the brake pads are properly seated and secured.</li>
        </ol>`,
      tools_required: "Brake lubricant",
    },

    {
      issue_id: 5,
      solution: "Check for parasitic electrical drains.",
      instructions: `
      If your car's battery is frequently draining, a parasitic electrical drain may be the cause. Follow these steps to diagnose and address the issue:
      <ol>
      <li>Use a multimeter set to measure current (amps) to check the current draw from the battery.</li>
      <li>Start by disconnecting the negative battery cable and connecting the multimeter in series.</li>
      <li>If the current draw is higher than normal (usually around 50 milliamps or less), start removing fuses one by one to identify the circuit that's causing the excessive draw.</li>
      <li>Once you've identified the circuit, inspect the components connected to it for possible causes of the drain. Common culprits include interior lights, radio, power windows, and other accessories.</li>
      <li>Repair or replace any faulty components causing the parasitic drain.</li>
      </ol>`,
      tools_required: "Multimeter",
    },

    {
      issue_id: 5,
      solution: "Inspect and clean battery terminals and connections.",
      instructions: `
      Corroded or loose battery terminals can lead to starting issues. Follow these steps to inspect and clean the battery terminals and connections:
      <ol>
      <li>Open the hood and locate the battery. Make sure the engine is turned off.</li>
      <li>Identify the battery terminals: the positive terminal (+) is usually red, and the negative terminal (-) is black.</li>
      <li>Loosen the nut on the negative terminal (-) using a wrench. Remove the negative cable from the terminal.</li>
      <li>Repeat the same process for the positive terminal (+).</li>
      <li>Use a wire brush to gently scrub the battery posts and terminals. Remove any corrosion or buildup.</li>
      <li>If the terminals are severely corroded, you can create a mixture of baking soda and water, apply it to the terminals, and scrub again.</li>
      <li>Rinse the terminals with clean water and dry them with a cloth.</li>
      <li>Reconnect the positive terminal (+) first, then the negative terminal (-). Tighten the nuts securely.</li>
      </ol>`,
      tools_required: "Wire brush, battery terminal cleaner",
    },
  ]);
};
