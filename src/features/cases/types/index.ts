export type MedicalStatus = "Ready for Assignment" | "Signed" | "Scheduled";

export type CaseStatus = "Active" | "Pending" | "In Progress";

export type Case = {
  id: string;
  client_name: string;
  doa: string;
  medical_status: MedicalStatus;
  client_status: CaseStatus;
  law_firm: string;
};
