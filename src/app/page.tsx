import { Suspense } from "react";
import { Table } from "./components/Table";

export default async function Home() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        {/* @ts-expect-error Server Component */}
        <Table />
      </Suspense>
    </>
  );
}
