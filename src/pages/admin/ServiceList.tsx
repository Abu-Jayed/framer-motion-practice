import { getServices } from "@/api/admin/service/service.api";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const ServiceList = () => {
  // const [data, setData] = useState([]);
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);

  // console.log("service list", data);
  // const getData = async() => {}

  // useEffect(() => {
  //   fetch("http://localhost:5000/api/v1/services")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.data));
  // }, []);

  

  const { data, isLoading, isError } = useQuery({
    queryKey: ["services"],
    queryFn: getServices
  });
  console.log(data);

  return <div>This is service list</div>;
};

export default ServiceList;
