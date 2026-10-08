const user = {
  id: 3,
  name: "Marta",
  role: "qa",
  address: { city: "Berlin", country: "Germany" },
};
const statusCodes = [200, 404, 500];

const {name, role} = user;
console.log(name, role);

const {id: userId} = user;
console.log(userId);

const {age = 30} = user;
console.log(age);

const { address: {city} } = user;
console.log(city);

const[ok, notFound] = statusCodes;
console.log(ok, notFound);
