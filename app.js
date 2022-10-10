let select = document.querySelector("#kredihesap");
let h2 = document.querySelector("#h2");
let tablo = document.querySelector("#tablo");

let installment = document.querySelector("#installment");
let form = document.querySelector("form");
let section = document.querySelector("section");

let amount = document.querySelector("form #amount");
let button = document.querySelector("#button");

let amountofInstallment;
let interestRate;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    select.value == "Seciniz" ||
    amount.value === "" ||
    installment.value === ""
  ) {
    return alert("insert all values");
  }

  if (select.value == "Housing Loan" && confirm("are you sure?")) {
    interestRate = 1.29;
    amountofInstallment =
      amount.value *
      ((interestRate * (1 + interestRate) ** installment.value) /
        ((1 + interestRate) ** installment.value - 1));
  }
  if (select.value == "Personal Finance Loan") {
    interestRate = 1.99;

    amountofInstallment =
      amount.value *
      ((interestRate * (1 + interestRate) ** installment.value) /
        ((1 + interestRate) ** installment.value - 1));
  }
  if (select.value == "Car Loan") {
    interestRate = 1.79;
    amountofInstallment =
      amount.value *
      ((interestRate * (1 + interestRate) ** installment.value) /
        ((1 + interestRate) ** installment.value - 1));
  }

  console.log(amountofInstallment);

  const text = document.createTextNode("Loan Information");
  h2.appendChild(text);

  tablo.innerHTML = `
  <tbody>
      <tr>
      <th >Amount</th>
        <td >${amount.value}$</td>
        <th >Installment</th>
        <td >${select.value}</td>
      </tr>
      <tr>
        <th >Installment</th>
        <td >${installment.value}$ </td>
        <th >Interest Rate</th>
        <td >${interestRate}</td>
      </tr>
      <tr>
       
        <th >Amount of Installment</th>
        <td >${Math.floor(amountofInstallment)}$ </td>
      </tr>
    </tbody>
   `;
});
