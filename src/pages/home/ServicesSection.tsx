import Container from "@/components/Container";
import BatteryReplacement from "@/components/ServiceTiles/BatteryReplacement";
import ChipsetReplacement from "@/components/ServiceTiles/ChipsetReplacement";
import DataRecovery from "@/components/ServiceTiles/DataRecovery";
import React from "react";

const ServicesSection = () => {
  return (
    <Container className="my-40">
      <div className="text-center flex flex-col justify-center items-center">
        <h1>Services that we provide.</h1>
        <p className="max-w-[80ch] mt-10 mb-20">
          All our technicians are fully qualified and licensed. Moreover,
          theyare incredibly skillful and proficient in various aspects of
          computer repair.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <BatteryReplacement></BatteryReplacement>
        <ChipsetReplacement></ChipsetReplacement>
        <DataRecovery></DataRecovery>
        <div className="h-[415px] col-span-12 bg-fuchsia-500 rounded-2xl"></div>
        <div className="h-[415px] col-span-12 md:col-span-6 lg:col-span-4 bg-fuchsia-500 rounded-2xl"></div>
        <div className="h-[415px] col-span-12 md:col-span-6 lg:col-span-4 bg-fuchsia-500 rounded-2xl"></div>
        <div className="h-[415px] col-span-12 md:col-span-12 lg:col-span-4 bg-fuchsia-500 rounded-2xl"></div>
      </div>
    </Container>
  );
};

export default ServicesSection;
