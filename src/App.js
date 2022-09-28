import { useState } from "react";
import "./App.css";

function App() {
  const [billAmount, setBillAmount] = useState("");
  const [amountPaid, setAmountPaid] = useState("");
  const [error, setError] = useState("");
  const no_of_denominations = document.querySelectorAll(".no-of-denominations");

  const denominations = [2000, 500, 100, 20, 10, 5, 1];

  function denominationHandler(amount) {
    for (let i = 0; i < denominations.length; i++) {
      const denominationCount = Math.trunc(amount / denominations[i]);
      amount = amount % denominations[i];
      no_of_denominations[i].innerText = denominationCount;
    }
  }

  const calculateChange = (billAmt, cashPaid) => {
    const intBillAmt = parseInt(billAmount);
    const intCashPaid = parseInt(cashPaid);
    if (
      billAmt === "" ||
      cashPaid === "" ||
      billAmt === "0" ||
      cashPaid === "0" ||
      billAmt < 0 ||
      cashPaid < 0
    )
      setError("Please enter correct values in the fields⛔");
    else {
      if (intBillAmt > intCashPaid)
        setError(
          "Bill amount should always be less than or equal to cash paid"
        );
      else {
        let amount = intCashPaid - intBillAmt;
        denominationHandler(amount);
        setError("");
      }
    }
  };

  return (
    <div className="container">
      <div className="calculator-container">
        <h1>Cash Register Manager</h1>
        <div className="main">
          <input
            type="number"
            placeholder="Enter the bill amount"
            value={billAmount}
            required
            onChange={(e) => setBillAmount(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter the cash paid"
            value={amountPaid}
            required
            onChange={(e) => setAmountPaid(e.target.value)}
          />
          <button
            onClick={() => calculateChange(billAmount, amountPaid)}
            className="btn"
          >
            Generate Change
          </button>
          <button onClick={() => window.location.reload()} className="reset">
            Reset
          </button>
          <table className="table">
            <tr>
              <th>Denomination</th>
              <td>2000</td>
              <td>500</td>
              <td>100</td>
              <td>20</td>
              <td>10</td>
              <td>5</td>
              <td>1</td>
            </tr>
            <tr>
              <th>No. of Notes</th>
              <td className="no-of-denominations"></td>
              <td className="no-of-denominations"></td>
              <td className="no-of-denominations"></td>
              <td className="no-of-denominations"></td>
              <td className="no-of-denominations"></td>
              <td className="no-of-denominations"></td>
              <td className="no-of-denominations"></td>
            </tr>
          </table>
          <p className="error">{error}</p>
        </div>
      </div>
      <div className="social-icons">
        <p className="footer">Copyright &copy; 2022 - Gurudatt Puranik</p>
        <a href="https://twitter.com/PuranikGurudatt">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/in/gurudatt-puranik-0933b0195/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/gurudatt_puranik/">
          <i className="fa-brands fa-square-instagram"></i>
        </a>
        <a href="https://github.com/gurudattpuranik25">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <p className="responsiveFooter">
        Copyright &copy; 2022 - Gurudatt Puranik
      </p>
    </div>
  );
}

export default App;
