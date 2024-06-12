import Dashboard from "./Dashboard";

function Payment() {
  return (
    <Dashboard>
      <div>
        <p>Payment History (24)</p>
        <table>
          <thead>
            <tr className="flex border gap-[100px]">
              <th>Payment Invoice</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="flex border ">
            <tr className="flex gap-[150px]">
              <td>INV001</td>
              <td>$100.00</td>
              <td>2024-06-11</td>
              <td>Paid</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Dashboard>
  );
}

export default Payment;
