
exports.seed = function(knex) {
  return knex('solutions').insert([
    { issue_id: 1, solution: 'Replace spark plugs', instructions: '1. Lift the hood\n2. Locate the spark plugs\n3. Remove old plugs\n4. Install new plugs', tools_required: 'Socket wrench, new spark plugs' },
    { issue_id: 2, solution: 'Replace brake pads', instructions: '1. Lift the car\n2. Remove old brake pads\n3. Install new brake pads', tools_required: 'Jack, wrench, new brake pads' },
    // Add more solution data
  ]);
};