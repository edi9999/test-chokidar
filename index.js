chokidar = require('chokidar');

options = {
  ignoreInitial:false,
  persistent:true,
  interval:5000,
  usePolling:true
};

watcher = chokidar.watch('./watched/',options)

watcher
  .on('add',console.log)
  .on('change',console.log)