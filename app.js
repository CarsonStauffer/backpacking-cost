function onLoad() {
  generatePricesTable();

}

function calculateTotal(countryName) {
  return countries[countryName].beer;
}

function clearTable() {
  $("#prices tr").remove();
}

function generatePricesRow(countryName) {
  return '<tr><td>' + countryName + '</td><td>$' + calculateTotal(countryName) + '/day</td></tr>';
}

function generatePricesTable() {
  clearTable();
  var tbody = $('#prices').find('tbody:last');
  tbody.append(generatePricesRow("vietnam"));
  tbody.append(generatePricesRow("cambodia"));
  tbody.append(generatePricesRow("singapore"));
  tbody.append(generatePricesRow("thailand"));
  tbody.append(generatePricesRow("laos"));
  tbody.append(generatePricesRow("malaysia"));
  tbody.append(generatePricesRow("indonesia"));
}