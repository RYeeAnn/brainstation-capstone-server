exports.seed = function (knex) {
  return knex("issues").insert([
    {
      category: "Electrical",
      problem: "Dead Battery Jump Start",
      symptoms: "Car won't start, clicking sound, dim lights",
    },
    {
      category: "Tires",
      problem: "Flat Tire",
      symptoms: "Visible puncture, loss of tire pressure",
    },
    {
      category: "Cooling System",
      problem: "Car Overheating",
      symptoms: "Temperature gauge in the red zone",
    },
    {
      category: "Brakes",
      problem: "Brakes Squeaking",
      symptoms: "High-pitched noise when braking",
    },
    {
      category: "Electrical",
      problem: "Battery Drains Quickly",
      symptoms: "Car won't start, dim lights",
    },
    {
      category: "Electrical",
      problem: "Dim Headlights",
      symptoms: "Headlights are very dim, reducing visibility at night",
    },
    {
      category: "Fuel",
      problem: "Stuck Gas Cap",
      symptoms: "The gas cap won't open or close properly",
    },
    {
      category: "Windshield",
      problem: "Windshield Wipers Replacement",
      symptoms: "Wipers don't move or smear the windshield",
    },
    {
      category: "Air Condition",
      problem: "Car Smells Unpleasant",
      symptoms: "A foul odor inside the car, especially when the air conditioner is on",
    },
    {
      category: "Engine",
      problem: "Squeaky Serpentine Belt",
      symptoms: "A high-pitched sqeaking noise when the engine runs",
    },
  ]);
};
