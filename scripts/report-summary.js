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
<h2>Playwright Automation Test Report</h2>

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

<br>

<b>Repository:</b> ${process.env.GITHUB_REPOSITORY}<br>
<b>Branch:</b> ${process.env.GITHUB_REF_NAME}<br>
<b>Workflow:</b> ${process.env.GITHUB_WORKFLOW}<br>
<b>Run Number:</b> ${process.env.GITHUB_RUN_NUMBER}<br>
<b>Status:</b> ${process.env.GITHUB_JOB}<br>

<br>

<a href="${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID}">
View GitHub Action Run
</a>
`;

fs.writeFileSync("summary.html", html);

console.log("summary.html generated successfully");