const getData = async () => {
  const data = await fetch(
    "https://my-json-server.typicode.com/LuisAngel98/DB_JSON/productos"
  );
  const res = await data.json();
  return res;
};
export default getData;
