import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { FormEvent, useState } from "react";

const AddService = () => {
  const [serviceName, setServiceName] = useState("");
  const {mutateAsync,isError,isSuccess} = useMutation({
    mutationFn: async (data) => {
      return await fetch("http://localhost:5000/api/v1/services", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
        },
      });
    },
  });


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(serviceName);
    const serviceData = {
      name: serviceName,
      description: "Replace any Description here",
      devices: ["Macbook Pro", "Macbook air", "iPad pro"],
      price: 306.48,
    };
    await mutateAsync(serviceData)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border-2 p-3 rounded-lg "
          onChange={(e) => setServiceName(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default AddService;
