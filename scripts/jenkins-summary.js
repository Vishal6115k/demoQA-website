const fs = require("fs");

const report = JSON.parse(
    fs.readFileSync("test-results/results.json", "utf8")
);

const passed = report.stats.expected || 0;
const failed = report.stats.unexpected || 0;
const skipped = report.stats.skipped || 0;
const flaky = report.stats.flaky || 0;

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
<td>${flaky}</td>
</tr>
</table>
`;

fs.writeFileSync("summary.html", html);

console.log("summary.html generated");