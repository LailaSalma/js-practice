const base = {
  firstname: "Anna",
  lastname: "Meyer",
  totalprice: 100,
  depositpaid: true,
  bookingdates: { checkin: "2026-12-01", checkout: "2026-12-05" },
};

const invalidPrice = {...base, totalprice: -1};
console.log(invalidPrice.totalprice);
console.log(base.totalprice);

const withExtra = {...base, additionalneeds: "Breakfast"};
console.log(withExtra.additionalneeds);

const smoke = [200, 201];
const error = [400, 404];
const all = [...smoke, ...error];
console.log(all);

const copy = {...base};
copy.bookingdates.checkin = "2027-01-01";
console.log(base.bookingdates.checkin);
