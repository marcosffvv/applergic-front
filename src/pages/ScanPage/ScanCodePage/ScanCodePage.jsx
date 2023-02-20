import React, { useState } from "react";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";

export default function ScanCodePage() {
  const [data, setData] = useState("Not Found");

  return (
    <>
      <BarcodeScannerComponent
        onUpdate={(err, result) => {
          if (result) setData(result.text);
          else setData("Not Found");
        }}
      />
      <p>{data}</p>
    </>
  );
}


