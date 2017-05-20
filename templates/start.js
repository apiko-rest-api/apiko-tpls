'use strict'

const exec = require('child_process').exec
const readline = require('readline')
const fs = require('fs')

module.exports = {
  title: "Apiko Starter",
  description: "A bare minimum Apiko server template with a little example code.",
  create () {
    return new Promise((resolve, reject) => {
      let cmd = exec('git clone https://github.com/apiko-rest-api/apiko-template-start.git ' + process.argv[3])

      if (g.config.verbosity >= 2) {
        cmd.stdout.pipe(process.stdout)
        cmd.stderr.pipe(process.stderr)
      }

      cmd.on('close', (code) => {
        resolve(code)
      })
    })
  },
  setup () {
    g.cli.templates.list['start'].create().then((code) => {
      if (code === 0) {
        // change to the created directory
        process.chdir(process.argv[3])

        // npm install
        let cmd = exec('npm install')

        if (g.config.verbosity >= 2) {
          cmd.stdout.pipe(process.stdout)
          cmd.stderr.pipe(process.stderr)
        }

        cmd.on('close', (code) => {
          g.interface.question('Your API server will now start automatically. To start your server next time you will need to change directory to your project (cd ' + process.argv[3] +') and start the server with: "apiko dev", ok? [Enter]', (answer) => {
            g.cli.run.handler('dev')
          })
        })
      } else {
        g.log.e(0, 'The setup failed. Does the specified directory already exist?')
        process.exit(0)
      }
    })
  }
}