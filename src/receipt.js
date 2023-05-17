module.exports = function createReceipt(printer){
  printer
    // Set config printer default
    .font('b')
    .encode('EUC-KR')
    .align('RT')
    .size(1, 1)
    .textLn('210110-00123')
    .align('CT')
    .textLn('Receipt Name')
    // Reset font size and align after print receipt title
    .size(0, 0)
    .dashedLine()
    .tableRow([
      { text: 'Phone', width: 0.3 },
      { text: ': 0123456789' }
    ])
    .tableRow([
      { text: 'Adrress', width: 0.3 },
      { text: ': 경남 김김ㄱ미기미미해시 창산소아ㅓ마ㅓㄴㅇㄹ;' }
    ])
    
    .dashedLine()
    .feed(3)
    .cut();
};