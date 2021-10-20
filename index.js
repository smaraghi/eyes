#!/usr/bin/env node

const readline = require('readline')
const axios = require('axios').default
const whois = require('whois')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const logo = `
███████╗██╗   ██╗███████╗███████╗
██╔════╝╚██╗ ██╔╝██╔════╝██╔════╝
█████╗   ╚████╔╝ █████╗  ███████╗
██╔══╝    ╚██╔╝  ██╔══╝  ╚════██║
███████╗   ██║   ███████╗███████║
╚══════╝   ╚═╝   ╚══════╝╚══════╝
`

const menu = () => { 
  console.log(`
    1.  Whois Lookup
    2.  DNS Lookup + Cloudflare Detector
    3.  Zone Transfer
    4.  Port Scan
    5.  HTTP Header Grabber
    6.  Honeypot Detector
    7.  Robots.txt Scanner
    8.  Link Grabber
    9.  IP Location Finder
    10. Traceroute
    11. Domain-to-IP Lookup
    12. About program
    13. Exit program
  `)
}

const prompt = () => {
  menu()
  eyes()
}

const eyes = () => {
  rl.question('Please select an option ', choice => {
    switch (choice) {
      case '1': 
        rl.question('Enter a domain (e.g. google.com): ', target => {
          whois.lookup(target, (err, data) => {
            console.log(data)
            prompt()
          })
        })
      default:
        console.log('Please select a valid option')
        prompt()
    }
  })
}

console.log(logo)
prompt()