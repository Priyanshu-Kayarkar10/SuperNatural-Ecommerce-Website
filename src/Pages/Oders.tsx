import { ReactElement } from "react";

type DataType = {
  id: string;
  amount: number;
  quantity: number;
  discount: number;
  status: ReactElement;
  action: ReactElement;
};

// const column: Column<DataType>[] = [
//   {
//     Header: "ID",
//     accessor: "id",
//   },
//   {
//     Header: "Quantity",
//     accessor: "quantity",
//   },
//   {
//     Header: "Discount",
//     accessor: "discount",
//   },
//   {
//     Header: "Amount",
//     accessor: "amount",
//   },
//   {
//     Header: "Status",
//     accessor: "status",
//   },
//   {
//     Header: "Action",
//     accessor: "action",
//   },
// ];

const Oders = () => {
  return (
    <div className="w-full h-screen pt-[6rem] md:pt-[8rem] lg:pt-[10rem] bg-green-100 px-5 md:px-[3rem] lg:px-[5rem] font-space ">
      <h1 className="uppercase font-semibold text-xl ">My Orders</h1>
    </div>
  );
};

export default Oders;
