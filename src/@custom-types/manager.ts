export interface ShowModal {
  type?: "add" | "fix" | "delete" | "detail" | "download";
  show: boolean;
  data?: any;
  title?: string;
  onConfirm?: () => void;
}