exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('logs')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('logs').insert([
        {
          supervisor_id: '00u2lh0bsAliwLEe75d6',
          family_id: 1,
          checked_in: true,
          on_site_7pm: true,
          on_site_10pm: true,
          date: '2020-10-09T17:38:31.123Z',
          time: '2020-12-09T17:38:31.123Z',
          beds_reserved: 5,
          actual_beds_reserved: 5
        },
        {
          supervisor_id: '00u2lh0bsAliwLEe75d6',
          family_id: 1,
          checked_in: true,
          on_site_7pm: true,
          on_site_10pm: true,
          date: '2020-12-10T18:01:40.038Z',
          time: '2020-12-10T18:01:40.038Z',
          beds_reserved: 5,
          actual_beds_reserved: 5
        },
        {
          supervisor_id: '00u2lh0bsAliwLEe75d6',
          family_id: 1,
          checked_in: true,
          on_site_7pm: true,
          on_site_10pm: true,
          date: '2020-12-11T17:38:31.123Z',
          time: '2020-12-11T17:38:31.123Z',
          beds_reserved: 5,
          actual_beds_reserved: 5
        },
        {
          supervisor_id: '00u2lh0bsAliwLEe75d6',
          family_id: 1,
          checked_in: true,
          on_site_7pm: true,
          on_site_10pm: true,
          date: '2020-12-12T17:38:31.123Z',
          time: '2020-12-12T17:38:31.123Z',
          beds_reserved: 5,
          actual_beds_reserved: 5
        },
      ]);
    });
};
