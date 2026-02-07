import sendTelegramMessage from "../api-connections/telegram.js";

export function backendDown(data) {
  const message = `
    Backend down: [${new Date().toLocaleDateString()}]
    IP_address: ${data.commonLabels.instance} 
    status: ${data.status}
    criticality: ${data.commonLabels.severity} 
    down: ${data.alerts[0].startsAt}
    up: ${data.status === "firing" ? "-" : data.alerts[0].startsAt}
  `;
  console.log(message);
  sendTelegramMessage(message);
}
