exports.seed = function (knex) {
  return knex("issues").insert([
    {
      category: "Engine",
      problem: "Engine Won't Start",
      symptoms: "Loss of power, rough idling",
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
  ]);
};
