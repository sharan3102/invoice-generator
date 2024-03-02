import React from 'react';
import { text, image } from "@pdfme/schemas";
import { generate } from "@pdfme/generator";
import InvoiceForm from './components/Form/InvoiceForm';
import { schema } from './schema';

function App() {
  const generatePDF = async (formData) => {
    // Load base PDF & Signed Seal dynamically
    const basePdfResponse = await fetch(`https://raw.githubusercontent.com/sharan3102/invoice-generator/main/src/assets/${formData.companyName}EmptyInvoice.pdf`);
    const basePdfData = await basePdfResponse.arrayBuffer();
    const signedSealResponse = await fetch(`https://raw.githubusercontent.com/sharan3102/invoice-generator/main/src/assets/${formData.companyName}signedSeal.png`);
    const signedSealData = await signedSealResponse.arrayBuffer();

    // Chunk size to avoid Maximum call stack size exceeded error 
    const CHUNK_SIZE = 0xFFFF; 

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
    const signedSealBase64 = arrayBufferToBase64(signedSealData);
    formData.seal = `data:image/png;base64,${signedSealBase64}`;

    // Template definition
    const template = {
      schemas: schema,
      basePdf: `data:application/pdf;base64,${basePdfBase64}`,
    };

    // Plugins
    const plugins = { text, image };

    // Inputs
    const inputs = [formData];

    // Generate PDF
    const pdf = await generate({ template, plugins, inputs });

    // Download the PDF
    const blob = new Blob([pdf.buffer], { type: 'application/pdf' });
    const fileName = `${formData.billNo}.pdf`;

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
