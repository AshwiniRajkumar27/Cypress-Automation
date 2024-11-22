const report = require("multiple-cucumber-html-reporter");


report.generate({
  jsonDir: "./cypress/cucumber-json/",
  reportPath: "./cypress/Cucumber-Report",
  metadata: {
    browser:{
       name: "chrome",
    },
    device: "Local Test Machine",
    platform:{
      name: "window"
    },
  },
  customData: {
    title: "Run Info",
    data: [
      { label: "Project", value: "GCM " },
      { label: "Release", value: "Sprint 8" },
      {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: ''},
            {label: 'Execution End Time', value: ''}
     
      
    ],
  },
  pageTitle: "GCM Project",
  reportName: "GCM Report",
  displayDuration: true,
  displayReportTime: true,

  })

