import { useGetServices } from "@/api/admin/service/serviceHook";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Trash2 } from "lucide-react";
import { useState } from "react";

const ServiceList = () => {

  const [serviceName, setServiceName] = useState("");

  const queryClient = useQueryClient()

  const {mutateAsync,isError:postErr,isSuccess} = useMutation({
    mutationFn: async (data) => {
      return await fetch("http://localhost:5000/api/v1/services", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
        },
      });
    },
    onSuccess: ()=> {
      queryClient.invalidateQueries({queryKey: ["services"]})
    }
  });

  console.log(postErr,isSuccess);

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

  const { data: services, isLoading, isError } = useGetServices();

  if (isLoading) {
    return <h1 className="text-rose-800 text-center mt-6">Loading...</h1>;
  }

  if (isError) {
    return (
      <h1 className="bg-rose-700 font-bold text-4xl text-center mt-10">
        Something went wront
      </h1>
    );
  }

  // {data?.data?.data.map((service) => {
  //   return <h1 key={service._id}>{service.name}</h1>;
  // })}
  return (
    <Container className="pt-14 rounded-2xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map((service) => (
            <TableRow key={service.id}>
              <TableCell className="font-medium">{service.name}</TableCell>
              <TableCell>{service.description}</TableCell>
              <TableCell>{service.price}</TableCell>
              <TableCell className="text-right">
                <Button className="p-2" variant={"destructive"}>
                  <Trash2 />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total Services</TableCell>
            <TableCell className="text-right">{services.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
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
    </Container>
  );
};

export default ServiceList;
