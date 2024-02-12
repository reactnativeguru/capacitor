import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import payslipData from '../assets/data/mock.json'
import { Payslip, PayslipItemProps } from '../interfaces/Payslip';
import { Capacitor } from '@capacitor/core';

const PayslipItem = ({item, onClick}: PayslipItemProps) => {
  return (
    <div onClick={() => onClick(item.id)}>
      <div style={styles.payslipContainer}>
        <p style={styles.payslipId}>{item.id}</p>
        <p>{`From: ${item.fromDate} To: ${item.toDate}`}</p>
        <p style={styles.fileName}>{item.file.fileName}</p>
      </div>
    </div>
  );
};

const PayslipScreen = () => {
  const platform = Capacitor.getPlatform();
  const navigate = useNavigate();
  const [payslips, setPayslips] = useState<Payslip[]>([]);
  
  const router = {
    push: (pathname: string) => {
      navigate(pathname);
    },
  };

  useEffect(() => {
    setPayslips(payslipData.data);
  }, [payslipData.data]);

  return (
    <div style={platform === 'ios' ? styles.iOSContainer : styles.container}>
      <p style={styles.header}>Payslips</p>
      {payslips.map((item: Payslip) => (
        <PayslipItem key={item.id} item={item} onClick={(id) => router.push(`/payslipDetail/${id}`)} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    padding: 16,
  },
  iOSContainer: {
    padding: 16,
    marginTop: 40,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  payslipContainer: {
    padding: 16,
    marginBottom: 8,
    border: '1px solid #ccc',
    borderRadius: 8,
  },
  payslipId: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  fileName: {
    color: 'blue',
    textDecoration: 'underline',
  },
};

export default PayslipScreen;
