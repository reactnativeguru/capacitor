export interface Payslip {
    id: string;
    fromDate: string;
    toDate: string;
    file: {
      fileName: string;
      fileType: string;
      fileUrl: string;
    };
  }
  

export interface PayslipItemProps {
  item: Payslip;
  onClick: (id: string) => void;
}