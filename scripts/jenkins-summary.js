const fs = require("fs");

const report = JSON.parse(
    fs.readFileSync("test-results/results.json", "utf8")
);

console.log("========== REPORT.STATS ==========");
console.log(report.stats);

const stats = report.stats;

const passed = stats.expected;
const failed = stats.unexpected;
const skipped = stats.skipped;
const flaky = stats.flaky;
const total = passed + failed + skipped + flaky;

console.log("\n========== SUMMARY ==========");
console.log("Passed :", passed);
console.log("Failed :", failed);
console.log("Skipped:", skipped);
console.log("Flaky  :", flaky);
console.log("Total  :", total);

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

console.log("\n========== GENERATED HTML ==========");
console.log(html);

fs.writeFileSync("email-summary.html", html);

console.log("\nemail-summary.html created successfully.");