import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PDFviewer({ file }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);
  
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="mt-4">
      <Button
	    variant="primary"
        disabled={pageNumber === 1}
        onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
      >
        👈
      </Button>
	  &nbsp; {pageNumber} of {numPages} &nbsp;
      <Button
	    variant="primary"
        disabled={pageNumber === numPages}
        onClick={() => setPageNumber((p) => Math.min(numPages, p + 1))}
      >
       👉
      </Button>
      {/* <button onClick={() => setScale((s) => s + 1)}>Zoom In</button>
      <button onClick={() => setScale((s) => s - 1)}>Zoom Out</button> */}
      <div id="container" style={{ width: "90vw" }}>
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
          <Page
            scale={scale}
            width={document.querySelector("#container")?.offsetWidth}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            pageNumber={pageNumber}
          />
        </Document>
      </div>
    </div>
  );
}
