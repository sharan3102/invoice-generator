import React from 'react';
import { text, image, barcodes } from "@pdfme/schemas";
import { generate } from "@pdfme/generator";
import InvoiceForm from './components/Form/InvoiceForm'

function App() {
  const generatePDF = async (formData) => {
    // Load base PDF dynamically
    const basePdfResponse = await fetch('src/assets/EmptyInvoiceFinal.pdf');
    const basePdfData = await basePdfResponse.arrayBuffer();
    const CHUNK_SIZE = 0xFFFF; // Chunk size to avoid Maximum call stack size exceeded error

    function arrayBufferToBase64(buffer) {
      let binary = '';
      const bytes = new Uint8Array(buffer);

      for (let i = 0; i < bytes.byteLength; i += CHUNK_SIZE) {
        const chunk = bytes.subarray(i, i + CHUNK_SIZE);
        binary += String.fromCharCode.apply(null, chunk);
      }

      return btoa(binary);
    }

const basePdfBase64 = arrayBufferToBase64(basePdfData);


    // Template definition
    const template = {
      schemas: [
        {
          date: {
            "type": "text",
            "position": {
              "x": 119,
              "y": 216
            },
            "width": 40,
            "height": 16,
            "fontSize": 10,
            "fontColor": "#000E8A"
          }
        },
      ],
      basePdf: `data:application/pdf;base64,${basePdfBase64}`,
    };

    // Plugins
    const plugins = { text, image, qrcode: barcodes.qrcode };

    // Inputs
    const inputs = [formData];

    // Generate PDF
    const pdf = await generate({ template, plugins, inputs });

    // Download the PDF
    const blob = new Blob([pdf.buffer], { type: 'application/pdf' });
    const fileName = 'invoice.pdf';

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <InvoiceForm generatePDF={generatePDF} />
    </div>
  );
}

export default App;
