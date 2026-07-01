const fs = require('fs');

const report = JSON.parse(
  fs.readFileSync('test-results/results.json', 'utf8')
);

let passed = 0;
let failed = 0;
let skipped = 0;
let flaky = 0;

function processSuite(suite) {
  if (suite.specs) {
    suite.specs.forEach(spec => {
      spec.tests.forEach(test => {
        test.results.forEach(result => {
          switch (result.status) {
            case 'passed':
              passed++;
              break;
            case 'failed':
              failed++;
              break;
            case 'skipped':
              skipped++;
              break;
            case 'flaky':
              flaky++;
              break;
          }
        });
      });
    });
  }

  if (suite.suites) {
    suite.suites.forEach(processSuite);
  }
}

report.suites.forEach(processSuite);

const summary = `
Test cases Passed=${passed}
Test Cases Failed=${failed}
Test Cases Skipped=${skipped}
Flaky Tests=${flaky}
`;

fs.writeFileSync('summary.txt', summary);

console.log(summary);