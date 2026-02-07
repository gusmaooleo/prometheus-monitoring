import { backendDown } from "./backend-down.js";
import { externalApiDown } from "./api-down.js";

const knwonCases = {
  "backend-off": (data) => backendDown(data),
  external_api_down: (data) => externalApiDown(data),
};

export function handleCase(data) {
  console.log(`[${new Date().toDateString()}] Received alert`);
  const caseFunction = knwonCases[data.commonLabels.alertname];
  caseFunction(data);
}
