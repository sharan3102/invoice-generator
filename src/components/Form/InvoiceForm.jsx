import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const InvoiceForm = ({ generatePDF }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    billNo: '',
    date: '',
    vehicleNo: '',
    typeOfVehicle: '',
    driverName: '',
    closingKm: '',
    startingKm: '',
    totalKm: '',
    closingTime: '',
    startingTime: '',
    totalHoursUsed: '',
    particularsOfDuty: '',
    arrangedBy: '',
    reportedTo: '',
    hireCharges: '',
    fuelChargesPerKm: '',
    excessPerKm: '',
    parkingCharges: '',
    driversBatta: '',
    permitCharges: '',
    nightHaltCharges: '',
    totalCharges: '',
    lessAdvance: '',
    balance: '',
    moneyInRupees: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGeneratePDF = () => {
    generatePDF(formData);
  };

  return (
    <div className="container mt-5">
      <h4 className="mb-5">Invoice Generator 💌</h4>
      <form>
        {/* Company Name */}
        <div className="form-group">
          <label htmlFor="companyName">Company Name:</label>
          <select className="form-control" id="companyName" name="companyName" required value={formData.companyName} onChange={handleInputChange}>
            <option value="">Select Company Name</option>
            <option value="KT">Kumar Travels</option>
            <option value="VT">Viveka Travels</option>
          </select>
        </div>

        {/* Bill No. */}
        <div className="form-group">
          <label htmlFor="billNo">Bill No:</label>
          <input type="text" className="form-control" id="billNo" name="billNo" value={formData.billNo} onChange={handleInputChange} required />
        </div>

        {/* Date */}
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input type="date" className="form-control" id="date" name="date" value={formData.date} onChange={handleInputChange} required />
        </div>

        {/* Vehicle No */}
        <div className="form-group">
          <label htmlFor="vehicleNo">Vehicle No:</label>
          <input type="text" className="form-control" id="vehicleNo" name="vehicleNo" value={formData.vehicleNo} onChange={handleInputChange} required />
        </div>

        {/* Type of Vehicle */}
        <div className="form-group">
          <label htmlFor="typeOfVehicle">Type of Vehicle:</label>
          <input type="text" className="form-control" id="typeOfVehicle" name="typeOfVehicle" value={formData.typeOfVehicle} onChange={handleInputChange} required />
        </div>

        {/* Driver Name */}
        <div className="form-group">
          <label htmlFor="driverName">Driver Name:</label>
          <input type="text" className="form-control" id="driverName" name="driverName" value={formData.driverName} onChange={handleInputChange} required />
        </div>

        {/* Closing KM */}
        <div className="form-group">
          <label htmlFor="closingKm">Closing Km:</label>
          <input type="text" className="form-control" id="closingKm" name="closingKm" value={formData.closingKm} onChange={handleInputChange} required />
        </div>

        {/* Starting KM */}
        <div className="form-group">
          <label htmlFor="startingKm">Starting Km:</label>
          <input type="text" className="form-control" id="startingKm" name="startingKm" value={formData.startingKm} onChange={handleInputChange} required />
        </div>

        {/* Total KM */}
        <div className="form-group">
          <label htmlFor="totalKm">Total Km:</label>
          <input type="text" className="form-control" id="totalKm" name="totalKm" value={formData.totalKm} onChange={handleInputChange} required />
        </div>

        {/* Closing Time */}
        <div className="form-group">
          <label htmlFor="closingTime">Closing Time:</label>
          <input type="text" className="form-control" id="closingTime" name="closingTime" value={formData.closingTime} onChange={handleInputChange} required />
        </div>

        {/* Starting Time */}
        <div className="form-group">
          <label htmlFor="startingTime">Starting Time:</label>
          <input type="text" className="form-control" id="startingTime" name="startingTime" value={formData.startingTime} onChange={handleInputChange} required />
        </div>

        {/* Total Hours Used */}
        <div className="form-group">
          <label htmlFor="totalHoursUsed">Total Hours Used:</label>
          <input type="text" className="form-control" id="totalHoursUsed" name="totalHoursUsed" value={formData.totalHoursUsed} onChange={handleInputChange} required />
        </div>

        {/* Particulars */}
        <div className="form-group">
          <label htmlFor="particularsOfDuty">Particulars of Duty:</label>
          <input
            type="text"
            className="form-control"
            id="particularsOfDuty"
            name="particularsOfDuty"
            value={formData.particularsOfDuty}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Arranged By */}
        <div className="form-group">
          <label htmlFor="arrangedBy">Arranged By:</label>
          <input type="text" className="form-control" id="arrangedBy" name="arrangedBy" value={formData.arrangedBy} onChange={handleInputChange} required />
        </div>

        {/* Reported To */}
        <div className="form-group">
          <label htmlFor="reportedTo">Reported To:</label>
          <input type="text" className="form-control" id="reportedTo" name="reportedTo" value={formData.reportedTo} onChange={handleInputChange} required />
        </div>

        {/* Hire Charges */}
        <div className="form-group">
          <label htmlFor="hireCharges">Hire Charges:</label>
          <input type="text" className="form-control" id="hireCharges" name="hireCharges" value={formData.hireCharges} onChange={handleInputChange} required />
        </div>

        {/* Fuel Charges Per Km */}
        <div className="form-group">
          <label htmlFor="fuelChargesPerKm">Fuel Charges Per Km:</label>
          <input
            type="text"
            className="form-control"
            id="fuelChargesPerKm"
            name="fuelChargesPerKm"
            value={formData.fuelChargesPerKm}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Excess Per Km */}
        <div className="form-group">
          <label htmlFor="excessPerKm">Excess Per Km:</label>
          <input type="text" className="form-control" id="excessPerKm" name="excessPerKm" value={formData.excessPerKm} onChange={handleInputChange} required />
        </div>

        {/* Parking Charges */}
        <div className="form-group">
          <label htmlFor="parkingCharges">Parking Charges:</label>
          <input
            type="text"
            className="form-control"
            id="parkingCharges"
            name="parkingCharges"
            value={formData.parkingCharges}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Driver's Batta */}
        <div className="form-group">
          <label htmlFor="driversBatta">Driver's Batta:</label>
          <input type="text" className="form-control" id="driversBatta" name="driversBatta" value={formData.driversBatta} onChange={handleInputChange} required />
        </div>

        {/* Permit Charges */}
        <div className="form-group">
          <label htmlFor="permitCharges">Permit Charges:</label>
          <input type="text" className="form-control" id="permitCharges" name="permitCharges" value={formData.permitCharges} onChange={handleInputChange} required />
        </div>

        {/* Night Halt Charges */}
        <div className="form-group">
          <label htmlFor="nightHaltCharges">Night Halt Charges:</label>
          <input
            type="text"
            className="form-control"
            id="nightHaltCharges"
            name="nightHaltCharges"
            value={formData.nightHaltCharges}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Total Charges */}
        <div className="form-group">
          <label htmlFor="totalCharges">Total Charges:</label>
          <input type="text" className="form-control" id="totalCharges" name="totalCharges" value={formData.totalCharges} onChange={handleInputChange} required />
        </div>

        {/* Less Advance */}
        <div className="form-group">
          <label htmlFor="lessAdvance">Less Advance:</label>
          <input type="text" className="form-control" id="lessAdvance" name="lessAdvance" value={formData.lessAdvance} onChange={handleInputChange} required />
        </div>

        {/* Balance */}
        <div className="form-group">
          <label htmlFor="balance">Balance:</label>
          <input type="text" className="form-control" id="balance" name="balance" value={formData.balance} onChange={handleInputChange} required />
        </div>

        {/* Money in Rupees */}
        <div className="form-group">
          <label htmlFor="moneyInRupees">Money in Rupees:</label>
          <input
            type="text"
            className="form-control"
            id="moneyInRupees"
            name="moneyInRupees"
            value={formData.moneyInRupees}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Driver Sign */}
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="driver-sign" required />
          <label className="form-check-label" htmlFor="driver-sign">
            Driver Sign
          </label>
        </div>

        {/* Customer Sign */}
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="customer-sign" required />
          <label className="form-check-label" htmlFor="customer-sign">
            Customer Sign
          </label>
        </div>

        {/* Manager Sign */}
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="manager-sign" required />
          <label className="form-check-label" htmlFor="manager-sign">
            Sign as Manager
          </label>
        </div>

        {/* Generate Button */}
        <button type="button" className="btn btn-primary mb-5" onClick={handleGeneratePDF}>
          Generate Invoice
        </button>
      </form>
    </div>
  );
};

export default InvoiceForm;
