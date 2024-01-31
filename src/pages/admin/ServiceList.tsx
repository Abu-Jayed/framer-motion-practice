import { getServices } from "@/api/admin/service/service.api";
import { useQuery } from "@tanstack/react-query";

const ServiceList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });


  if (isLoading) {
    return <h1 className="text-rose-800 text-center mt-6">Loading...</h1>;
  }
  console.log(data?.data.data);

  if (isError) {
    return (
      <h1 className="bg-rose-700 font-bold text-4xl text-center mt-10">
        Something went wront
      </h1>
    );
  }
  
    return (
      <div>
        {data?.data?.data.map((service) => {
          return <h1 key={service._id}>{service.name}</h1>;
        })}
      </div>
    );
};

export default ServiceList;
