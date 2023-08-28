
exports.seed = function(knex) {
  return knex('issues').insert([
    { category: 'Engine', problem: 'Engine Misfires', symptoms: 'Loss of power, rough idling' },
    { category: 'Brakes', problem: 'Squeaky Brakes', symptoms: 'High-pitched noise when braking' },
    // Add more issue data
  ]);
};