import { NextRequest, NextResponse } from "next/server";

const invoices = [
  {
    invoiceId: "1",
    title: "Payment for a plate of rice",
    description: "Bought fast food from Royal Kitchen",
    amount: 6000,
    currency: {
      name: "USD",
      symbol: "$",
    },
  },
];

export const GET = async (
  request: NextRequest,
  { params }: { params: { invoiceId: string } }
) => {
  const invoiceId = (await params)?.invoiceId;

  return NextResponse.json({ ...invoices?.[0], invoiceId });
};
