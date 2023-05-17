module.exports = function action_printUSB(deviceInfo){
  //console.log(deviceInfo);
  let { path = '0.0', width = 42, autoFind = true } = deviceInfo;
  let device;
  let data = deviceInfo.order;
  //console.log(data);
  width = +width;

  const Printer = require('./printer');

  if (autoFind){
    device = new Printer.USB();
  }
  else{
    path = path.split('.');
    let vid = +path[0];
    let pid = +path[1];

    vid = '0x' + vid.toString(16);
    pid = '0x' + pid.toString(16);

    device = new Printer.USB(vid, pid);
  }

  let printer = new Printer(device, { width}, data);

  device.open(function(){
    //console.log(printer);
    require('./receipt')(printer);
    
    setTimeout(function(){
      printer.close();
    }, 1000);

  });

};