"use client";
import { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
const ResumePage = () => {
  const [width, setWidth] = useState(1200);
  const [height, setHeight] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  const onButtonClick = () => {
    fetch("/Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Utkarsh's Resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <>
      <div className="flex justify-center p-6">
        <button
          className="bg-[#7d12ff] opacity-90 hover:opacity-100 rounded-2xl py-2 px-7"
          onClick={onButtonClick}
        >
          Download CV
        </button>
      </div>
      <div className="flex py-4 justify-center">
        <Document file="/Resume.pdf" className="d-flex  w-80 ml-[-240px]">
          <Page
            pageNumber={1}
            scale={width > 786 ? 1.95 : 0.6}
            renderAnnotationLayer={false}
            height={300}
            width={300}
            renderTextLayer={false}
          />
        </Document>
      </div>
    </>
  );
};
export default ResumePage;
