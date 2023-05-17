module.exports = function createReceipt(printer){
  //console.log(printer)
  let data = printer.data;
  printer
    // Set config printer default
    .font('b')
    .encode('EUC-KR')
    .align('RT')
    .size(1, 1)
    .textLn(data.rgd)
    .align('CT')
    .textLn(data.name)
   // Reset font size and align after print receipt title
    .size(0, 0)
    .dashedLine()
    .tableRow([
      { text: 'Phone', width: 0.3 },
      { text: data.phone }
    ])
    .tableRow([
      { text: 'Adrress', width: 0.3 },
      { text: ': ' + data.address}
    ])
    .dashedLine();
    data.foods.map(food => {
      printer.tableRow([
        { text: food.food_name, width: 0.5 },
        { text: food.quantity, width: 0.2, align: 'CENTER' },
        { text: food.total_price, align: 'RIGHT' }
      ]);
    });
    // Print Memo
    printer.dashedLine()
    .tableRow([
      { text: 'Total', width: 0.3 },
      { text: ': ' + data.total}
    ])
    .feed(3)
    .cut();
};