const mailer = (to) => (subject) => (body) =>
  console.log(`Mail sent to ${to} with subject ${subject} and body ${body}`);

mailer("a@gmail.com")("Hello")("How are you?");
