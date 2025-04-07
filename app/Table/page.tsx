import Link from "next/link";
import styles from "./table.module.css";

export default function Table() {
  // ສ້າງ array ຂອງຕາຕະລາງ (1-10)
  const tables = Array.from({ length: 20 }, (_, index) => index + 1);

  return (
    <div className={styles.container}>
      {/* Header with Navigation */}
      <header className="bg-blue-300 p-4 flex justify-between items-center">

        <Link href="/">Home</Link><br/>
        <Link href="/Category">Munu</Link><br/>
        <Link href="/Table">Table</Link><br/>
        <Link href="/product">Seles history</Link><br/>
        <Link href="/components">Cart</Link><br/>
      </header>


      {/* Table Grid */}
      <main className={styles.main}>
        <div className={styles.tableGrid}>
          {tables.map((table) => (
            <Link key={table} href={`/table/${table}`} className={styles.tableButton}>
              {table}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}