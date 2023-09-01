exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('comments')
      .insert([
        { name: 'John Doe', comment: 'This is a great website!' },
        { name: 'Jane Smith', comment: 'Helped me solve my car issue. Thanks!' },
        // Add more seed comments as needed
      ]);
    });
};
