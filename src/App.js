import React from 'react';
import { jsPDF } from 'jspdf'; // will automatically load the node version
import img from './images/goku.jpg';

const App = () => {
  const generatePDF = async() => {
    const doc = new jsPDF();

    doc.setFontSize(40);
    doc.setFont('courier')

    doc.text(30, 25, 'My PDF');
    /**
     * <><> text <><>
     * 1º -> horizontal margin
     * 2º -> vertical margin
     * 3º -> text
     */

    doc.setFontSize(27);
    doc.text(30, 40, 'a goku to brighten your day');
    
    doc.addImage(img, 15, 50, 180, 140);
    /**
     * <><> image <><>
     * 1º -> image location
     * 2º -> horizontal margin
     * 3º -> vertical margin
     * 4º -> width
     * 5º -> height
     */

    doc.save("myPDF.pdf"); // will save the file in the current working director
  }

  return (
    <div>
      <button onClick={() => generatePDF()}>Generate PDF</button>
    </div>
  );
}

export default App;
