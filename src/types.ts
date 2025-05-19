import { MCPRequest } from "./types/protocols.js";

export * from "./types/protocols.js";

// Existing interfaces...

export interface ProgressParams {
  progressToken: string | number;
  progress: number;
  total?: number;
}

export interface NotificationMessage {
  jsonrpc: "2.0";
  method: string;
  params?: any;
}

export interface ErrorNotification extends NotificationMessage {
  method: "notifications/error";
  params: {
    code: number;
    message: string;
    data?: any;
  };
}

export interface ProgressNotification extends NotificationMessage {
  method: "notifications/progress";
  params: ProgressParams;
}

export interface ShutdownRequest extends MCPRequest {
  method: "shutdown";
}

export interface ExitNotification extends NotificationMessage {
  method: "exit";
}

export interface ServerCapabilities {
  experimental?: Record<string, any>;
  prompts?: { listChanged?: boolean };
  resources?: { subscribe?: boolean; listChanged?: boolean };
  tools?: { listChanged?: boolean };
  logging?: Record<string, any>;
}

export interface ServerInfo {
  name: string;
  version: string;
}

export interface InitializeResult {
  protocolVersion: string;
  serverInfo: ServerInfo;
  capabilities: ServerCapabilities;
}
