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

                // Look at the final outcome of the test
                switch (test.outcome) {

                    case "expected":
                        passed++;
                        break;

                    case "unexpected":
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
    }

    if (suite.suites) {
        suite.suites.forEach(processSuite);
    }
}

report.suites.forEach(processSuite);

const total = passed + failed + skipped + flaky;

const html = `
<h2>Playwright Automation Report</h2>

<table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
<tr style="background:#f2f2f2">
<th>Total</th>
<th>Passed</th>
<th>Failed</th>
<th>Skipped</th>
<th>Flaky</th>
</tr>

<tr align="center">
<td>${total}</td>
<td style="color:green"><b>${passed}</b></td>
<td style="color:red"><b>${failed}</b></td>
<td>${skipped}</td>
<td style="color:orange"><b>${flaky}</b></td>
</tr>
</table>
`;

fs.writeFileSync("summary.html", html);

console.log("Summary generated");