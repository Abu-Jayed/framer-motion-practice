import { getServices } from "@/api/admin/service/service.api";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { Trash2 } from "lucide-react";

const ServiceList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });

  if (isLoading) {
    return <h1 className="text-rose-800 text-center mt-6">Loading...</h1>;
  }
  const services = data?.data.data.map((item) => ({
    id: item._id,
    name: item.name,
    description: item.description,
    price: item.price,
  }));

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
                <Button className="p-2" variant={"destructive"}><Trash2 /></Button>
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
    </Container>
  );
};

export default ServiceList;
