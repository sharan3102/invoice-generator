// InvoiceForm.js
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const InvoiceForm = ({ generatePDF }) => {
  return (
    <div className="container mt-5">
      <h4 className="mb-5">Invoice Generator 💌</h4>
      <form>
        {/* Company Name */}
        <div className="form-group">
          <label htmlFor="companyName">Company Name:</label>
          <select className="form-control" id="companyName" name="companyName" required defaultValue="">
            <option defaultValue="">Select Company Name</option>
            <option defaultValue="Kumar Travels">Kumar Travels</option>
            <option defaultValue="Viveka Travels">Viveka Travels</option>
          </select>
        </div>

        {/* Bill No. */}
        <div className="form-group">
          <label htmlFor="billNo">Bill No:</label>
          <input type="text" className="form-control" id="billNo" name="billNo" defaultValue="0" required />
        </div>

        {/* Date */}
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input type="date" className="form-control" id="date" name="date" defaultValue="0" required />
        </div>

        {/* Vehicle No */}
        <div className="form-group">
          <label htmlFor="vehicleNo">Vehicle No:</label>
          <input type="text" className="form-control" id="vehicleNo" name="vehicleNo" defaultValue="0" required />
        </div>

        {/* Type of Vehicle */}
        <div className="form-group">
          <label htmlFor="typeOfVehicle">Type of Vehicle:</label>
          <input type="text" className="form-control" id="typeOfVehicle" name="typeOfVehicle" defaultValue="0" required />
        </div>

        {/* Driver Name */}
        <div className="form-group">
          <label htmlFor="driverName">Driver Name:</label>
          <input type="text" className="form-control" id="driverName" name="driverName" defaultValue="0" required />
        </div>

        {/* Closing KM */}
        <div className="form-group">
          <label htmlFor="closingKm">Closing Km:</label>
          <input type="text" className="form-control" id="closingKm" name="closingKm" defaultValue="0" required />
        </div>

        {/* Starting KM */}
        <div className="form-group">
          <label htmlFor="startingKm">Starting Km:</label>
          <input type="text" className="form-control" id="startingKm" defaultValue="0" name="startingKm" required />
        </div>

        {/* Total KM */}
        <div className="form-group">
          <label htmlFor="totalKm">Total Km:</label>
          <input type="text" className="form-control" id="totalKm" defaultValue="0" name="totalKm" required />
        </div>

        {/* Closing Time */}
        <div className="form-group">
          <label htmlFor="closingTime">Closing Time:</label>
          <input type="text" className="form-control" id="closingTime" name="closingTime" defaultValue="0" required />
        </div>

        {/* Starting Time */}
        <div className="form-group">
          <label htmlFor="startingTime">Starting Time:</label>
          <input type="text" className="form-control" id="startingTime" name="startingTime" defaultValue="0" required />
        </div>

        {/* Total Hours Used */}
        <div className="form-group">
          <label htmlFor="totalHoursUsed">Total Hours Used:</label>
          <input type="text" className="form-control" id="totalHoursUsed" name="totalHoursUsed" defaultValue="0" required />
        </div>

        {/* Particulars */}
        <div className="form-group">
          <label htmlFor="particularsOfDuty">Particulars of Duty:</label>
          <input
            type="text"
            className="form-control"
            id="particularsOfDuty"
            name="particularsOfDuty"
            defaultValue="0"
            required
          />
        </div>

        {/* Arranged By */}
        <div className="form-group">
          <label htmlFor="arrangedBy">Arranged By:</label>
          <input type="text" className="form-control" id="arrangedBy" name="arrangedBy" defaultValue="0" required />
        </div>

        {/* Reported To */}
        <div className="form-group">
          <label htmlFor="reportedTo">Reported To:</label>
          <input type="text" className="form-control" id="reportedTo" defaultValue="0" name="reportedTo" required />
        </div>

        {/* Hire Charges */}
        <div className="form-group">
          <label htmlFor="hireCharges">Hire Charges:</label>
          <input type="text" className="form-control" id="hireCharges" defaultValue="0" name="hireCharges" required />
        </div>

        {/* Fuel Charges Per Km */}
        <div className="form-group">
          <label htmlFor="fuelChargesPerKm">Fuel Charges Per Km:</label>
          <input
            type="text"
            className="form-control"
            id="fuelChargesPerKm"
            defaultValue="0"
            name="fuelChargesPerKm"
            required
          />
        </div>

        {/* Excess Per Km */}
        <div className="form-group">
          <label htmlFor="excessPerKm">Excess Per Km:</label>
          <input type="text" className="form-control" id="excessPerKm" defaultValue="0" name="excessPerKm" required />
        </div>

        {/* Parking Charges */}
        <div className="form-group">
          <label htmlFor="parkingCharges">Parking Charges:</label>
          <input
            type="text"
            className="form-control"
            id="parkingCharges"
            defaultValue="0"
            name="parkingCharges"
            required
          />
        </div>

        {/* Driver's Batta */}
        <div className="form-group">
          <label htmlFor="driversBatta">Driver's Batta:</label>
          <input type="text" className="form-control" defaultValue="0" id="driversBatta" name="driversBatta" required />
        </div>

        {/* Permit Charges */}
        <div className="form-group">
          <label htmlFor="permitCharges">Permit Charges:</label>
          <input type="text" defaultValue="0" className="form-control" id="permitCharges" name="permitCharges" required />
        </div>

        {/* Night Halt Charges */}
        <div className="form-group">
          <label htmlFor="nightHaltCharges">Night Halt Charges:</label>
          <input
            type="text"
            className="form-control"
            id="nightHaltCharges"
            defaultValue="0"
            name="nightHaltCharges"
            required
          />
        </div>

        {/* Total Charges */}
        <div className="form-group">
          <label htmlFor="totalCharges">Total Charges:</label>
          <input type="text" className="form-control" id="totalCharges" name="totalCharges" defaultValue="0" required />
        </div>

        {/* Less Advance */}
        <div className="form-group">
          <label htmlFor="lessAdvance">Less Advance:</label>
          <input type="text" className="form-control" id="lessAdvance" name="lessAdvance" defaultValue="0" required />
        </div>

        {/* Balance */}
        <div className="form-group">
          <label htmlFor="balance">Balance:</label>
          <input type="text" className="form-control" id="balance" name="balance" defaultValue="0" required />
        </div>

        {/* Money in Rupees */}
        <div className="form-group">
          <label htmlFor="moneyInRupees">Money in Rupees:</label>
          <input
            type="text"
            className="form-control"
            id="moneyInRupees"
            name="moneyInRupees"
            defaultValue="0"
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
        <button type="button" className="btn btn-primary mb-5" onClick={generatePDF}>
          Generate Invoice
        </button>
      </form>
    </div>
  );
};

export default InvoiceForm;
