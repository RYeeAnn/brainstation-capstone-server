exports.seed = function (knex) {
  return knex("solutions").insert([
    {
      issue_id: 1,
      solution: "Check if the battery is charged and connected properly.",
      instructions:
        "1. Open the hood...\n2. Check the battery...\n3. If the battery is dead...",
      tools_required: "Multimeter, wrench",
    },
    {
      issue_id: 1,
      solution: "Ensure that the fuel tank has enough fuel.",
      instructions:
        "1. Open the fuel cap...\n2. Check the fuel gauge...\n3. Refill the tank if needed...",
      tools_required: "Fuel",
    },

    {
      issue_id: 2,
      solution: "Inspect the coolant level and radiator cap.",
      instructions:
        "1. Open the hood...\n2. Locate the coolant reservoir...\n3. Check the coolant level...\n4. Inspect the radiator cap...",
      tools_required: "Coolant, radiator cap tester",
    },
    {
      issue_id: 2,
      solution: "Check for coolant leaks in the cooling system.",
      instructions:
        "1. Inspect the hoses...\n2. Look for signs of coolant leakage...\n3. Repair any leaks...",
      tools_required: "Flashlight, coolant",
    },

    {
      issue_id: 3,
      solution: "Inspect the brake pads for wear and damage.",
      instructions:
        "1. Lift the car...\n2. Remove the wheel...\n3. Inspect the brake pads for thickness and wear...\n4. Replace if necessary...",
      tools_required: "Jack, lug wrench, brake pads",
    },
    {
      issue_id: 3,
      solution:
        "Apply anti-squeal brake lubricant to the back of the brake pads.",
      instructions:
        "1. Remove the brake pads...\n2. Apply a thin layer of anti-squeal brake lubricant...\n3. Reinstall the brake pads...",
      tools_required: "Brake lubricant",
    },
  ]);
};
