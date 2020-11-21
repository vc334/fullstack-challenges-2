attributes = {};

[].forEach((attribute) => {
  console.log(attribute);
  const matchData = attribute.match(/data-(.+)="(.+)"/);
  console.log(matchData);
  attributes[matchData[1]] = testData(matchData[2]);
});

console.log(attributes);
