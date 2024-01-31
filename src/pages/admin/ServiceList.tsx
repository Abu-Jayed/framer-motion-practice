import { useEffect, useState } from "react";

const ServiceList = () => {
  const [data, setData] = useState([]);

  console.log("service list", data);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/services")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  return <div>This is service list</div>;
};

export default ServiceList;
