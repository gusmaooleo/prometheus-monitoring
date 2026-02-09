import sendTelegramMessage from "../api-connections/telegram.js";

export function backendCameraOffine(data) {
  const message = `
Camera down: [${new Date().toLocaleDateString()}] 
client: ${data.commonLabels.clientName} 
client_ip: ${data.commonLabels.instance}
camera_name: ${data.commonLabels.cameraName}
camera_ip: ${data.commonLabels.cameraIp}
status: ${data.status}
criticality: ${data.commonLabels.severity} 
down: ${data.alerts[0].startsAt}
up: ${data.status === "firing" ? "-" : data.alerts[0].startsAt}`;
  sendTelegramMessage(message)
}
