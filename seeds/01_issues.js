exports.seed = function (knex) {
  return knex("issues").insert([
    {
      category: "Electrical",
      problem: "Dead Battery",
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
  ]);
};
