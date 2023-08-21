import { notFound } from "next/navigation";
import Head from "./Head";
import Tail from "./Tail";

export default function page() {
  const num = Math.round(Math.random() * 1000) % 3; // dice roll

  if (num == 0) notFound();

  return num == 1 ? <Head /> : <Tail />;
}
