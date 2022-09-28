// Database design for Zen class programme.

// users
db.users.insertMany([
  {
    user_id: 1,
    name: "Vignesh K",
    email: "vignesh@gmail.com",
    mentor_id: 1,
  },
  {
    user_id: 2,
    name: "Manikandan S",
    email: "mani@gmail.com",
    mentor_id: 2,
  },
  {
    user_id: 3,
    name: "Priadharshini J",
    email: "priyaj@gmail.com",
    mentor_id: 3,
  },
  {
    user_id: 4,
    name: "Ananya M",
    email: "ananya@gmail.com",
    mentor_id: 4,
  },
  {
    user_id: 5,
    name: "Vettri S",
    email: "vettri@gmail.com",
    mentor_id: 5,
  },
]);

// codekata
db.codekata.insertMany([
  {
    user_id: 1,
    no_of_problems_solved: 124,
  },
  {
    user_id: 2,
    no_of_problems_solved: 107,
  },
  {
    user_id: 3,
    no_of_problems_solved: 85,
  },
  {
    user_id: 4,
    no_of_problems_solved: 142,
  },
  {
    user_id: 5,
    no_of_problems_solved: 97,
  },
]);

// attendance
db.attendance.insertMany([
  {
    user_id: 1,
    topic_id: 1,
    present: true,
  },
  {
    user_id: 2,
    topic_id: 2,
    present: false,
  },
  {
    user_id: 3,
    topic_id: 3,
    present: true,
  },
  {
    user_id: 4,
    topic_id: 4,
    present: true,
  },
  {
    user_id: 5,
    topic_id: 5,
    present: false,
  },
]);

// topics
db.topics.insertMany([
  {
    topic_id: 1,
    topic: "HTML",
    topic_date: new Date("2020-10-04"),
  },
  {
    topic_id: 2,
    topic: "CSS",
    topic_date: new Date("2020-10-12"),
  },
  {
    topic_id: 3,
    topic: "Javascript",
    topic_date: new Date("2020-10-18"),
  },
  {
    topic_id: 4,
    topic: "ReactJS",
    topic_date: new Date("2020-10-22"),
  },
  {
    topic_id: 5,
    topic: "NodeJS",
    topic_date: new Date("2020-10-26"),
  },
]);

// tasks
db.tasks.insertMany([
  {
    task_id: 1,
    topic_id: 1,
    user_id: 1,
    task: "HTML task",
    due_date: new Date("2020-10-08"),
    submitted: true,
  },
  {
    task_id: 2,
    topic_id: 2,
    user_id: 2,
    task: "CSS task",
    due_date: new Date("2020-10-18"),
    submitted: false,
  },
  {
    task_id: 3,
    topic_id: 3,
    user_id: 3,
    task: "Javascript task",
    due_date: new Date("2020-10-23"),
    submitted: false,
  },
  {
    task_id: 4,
    topic_id: 4,
    user_id: 4,
    task: "ReactJS task",
    due_date: new Date("2020-10-25"),
    submitted: true,
  },
  {
    task_id: 5,
    topic_id: 5,
    user_id: 5,
    task: "NodeJS task",
    due_date: new Date("2020-10-29"),
    submitted: true,
  },
]);

// company_drives
db.company_drives.insertMany([
  {
    user_id: 1,
    drive_date: new Date("2020-10-06"),
    company_name: "Amazon",
  },
  {
    user_id: 1,
    drive_date: new Date("2020-10-11"),
    company_name: "Microsoft",
  },
  {
    user_id: 2,
    drive_date: new Date("2020-10-17"),
    company_name: "Google",
  },
  {
    user_id: 3,
    drive_date: new Date("2020-10-24"),
    company_name: "Facebook",
  },
  {
    user_id: 5,
    drive_date: new Date("2020-10-30"),
    company_name: "Twitter",
  },
]);

// mentors
db.mentors.insertMany([
  {
    mentor_id: 1,
    mentor_name: "Anbu S",
    mentor_email: "anbu@gmail.com",
    mentee_count: 35,
  },
  {
    mentor_id: 2,
    mentor_name: "Govind G",
    mentor_email: "govind@gmail.com",
    mentee_count: 25,
  },
  {
    mentor_id: 3,
    mentor_name: "Suryakala K",
    mentor_email: "suryakala@gmail.com",
    mentee_count: 28,
  },
  {
    mentor_id: 4,
    mentor_name: "Rajesh kumar N",
    mentor_email: "rajesh@gmail.com",
    mentee_count: 15,
  },
  {
    mentor_id: 5,
    mentor_name: "Yalini T",
    mentor_email: "yalini@gmail.com",
    mentee_count: 17,
  },
]);
