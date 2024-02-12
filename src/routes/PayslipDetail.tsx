import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Capacitor } from '@capacitor/core';
import { Payslip } from "../interfaces/Payslip";
import payslipData from "../assets/data/mock.json";
import Header from "../components/Header";

const PayslipDetailScreen = () => {
  let { id } = useParams();
  const platform = Capacitor.getPlatform();
  const payslips = payslipData.data;

  const [payslip, setPayslip] = useState<Payslip>({
    id: "",
    fromDate: "",
    toDate: "",
    file: {
      fileName: "",
      fileType: "",
      fileUrl: "",
    },
  });

  useEffect(() => {
    const data = payslips.find((item: Payslip) => item.id === id);
    if (data) {
      setPayslip(data);
    }
  }, [id, payslips]);

  const openFile = () => {
    window.open(payslip.file.fileUrl, "_blank");
  };

  return (
    <div style={platform === 'ios' ? styles.iOSContainer : {}}>
      <Header title="Payslip Details" />
      <div style={styles.container}>
        <h1 style={styles.header}>{id}</h1>
        <div style={styles.detailContainer}>
          <p style={styles.label}>ID:</p>
          <p style={styles.value}>{payslip.id}</p>

          <p style={styles.label}>From Date:</p>
          <p style={styles.value}>{payslip.fromDate}</p>

          <p style={styles.label}>To Date:</p>
          <p style={styles.value}>{payslip.toDate}</p>

          <p style={styles.label}>File Name:</p>
          <p style={{ ...styles.value, ...styles.fileName }} onClick={openFile}>
            {payslip.file.fileName}
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: 16,
  },
  iOSContainer: {
    marginTop: 60,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  detailContainer: {
    border: "1px solid #ccc",
    borderRadius: 8,
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    marginBottom: 12,
  },
  fileName: {
    color: "blue",
    textDecoration: "underline",
    cursor: "pointer",
  },
};

export default PayslipDetailScreen;
