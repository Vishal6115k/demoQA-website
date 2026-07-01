const fs = require("fs");

const report = JSON.parse(
  fs.readFileSync("test-results/results.json", "utf8")
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
            case "passed":
              passed++;
              break;
            case "failed":
              failed++;
              break;
            case "skipped":
              skipped++;
              break;
            case "flaky":
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

const total = passed + failed + skipped + flaky;

const html = `
<h2>Playwright Automation Test Report</h2>

<table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
<tr>
<th>Total</th>
<th>Passed</th>
<th>Failed</th>
<th>Skipped</th>
<th>Flaky</th>
</tr>

<tr align="center">
<td>${total}</td>
<td>${passed}</td>
<td>${failed}</td>
<td>${skipped}</td>
<td>${flaky}</td>
</tr>
</table>

<br>

<b>Repository:</b> ${process.env.GITHUB_REPOSITORY}<br>
<b>Branch:</b> ${process.env.GITHUB_REF_NAME}<br>
<b>Workflow:</b> ${process.env.GITHUB_WORKFLOW}<br>
<b>Run Number:</b> ${process.env.GITHUB_RUN_NUMBER}<br>
<b>Triggered By:</b> ${process.env.GITHUB_ACTOR}<br>

<br>

<a href="${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID}">
View GitHub Action Run
</a>
`;

fs.writeFileSync("summary.html", html);

console.log(`Passed : ${passed}`);
console.log(`Failed : ${failed}`);
console.log(`Skipped: ${skipped}`);
console.log(`Flaky  : ${flaky}`);