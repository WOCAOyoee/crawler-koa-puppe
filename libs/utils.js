const cp = require('child_process');
const { resolve } = require('path');

module.exports = {
	startProcess(options) {
		const script = resolve(__dirname, options.path);
		const child = cp.fork(script, []);
		let invoked = false;

		child.on('message', (data) => {
			options.message(data);
		});

		child.on('exit', (code) => {
			if (invoked){
				return;
			}
			invoked = true;
			options.exit(code);

		});

		child.on('error', (err) => {
      if (invoked){
				return;
			}
      invoked = true;
      options.error(err);
		});
	}
};

