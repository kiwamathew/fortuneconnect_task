"use client";

import { useEffect, useState } from "react";
import Notifications from "@/components/Notifications";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";
import { Portfolio } from "@/components/types/portfolio";


const UserPage = () => {

  const [items, setItems] = useState<Portfolio[]>([]);

  const getAllPortfolios = async () => {

    const response = await fetch("https://run.mocky.io/v3/edb4f3b0-346b-4f71-afe9-f2870361bd38");
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllPortfolios();
      setItems(data);
    };

    fetchData();
  }, []);

  return (
    <div id="dashboard" className="p-4 flex gap-4 flex-col md:flex-row">

        <div className="w-full lg:w-2/3 flex flex-col gap-8">
            

            <div className="w-full h-[500px]">
              <FinanceChart />
            </div>

            <div className="w-full flex gap-4 justify-between flex-wrap">
              {items.map((item: Portfolio, index : number) => (
                    <UserCard key={index} title={item.title} amount={item.amount} dateOfYear={item.dateOfYear} />
                  ))}
            </div>   
            
        </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <Notifications/>
      </div>

    </div>
  );
}

export default UserPage;