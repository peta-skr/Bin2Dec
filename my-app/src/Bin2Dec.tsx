import { useState } from "react";
import "./Bin2Dec.css";

function Bin2Dec() {
  const [binaryInput, setBinaryInput] = useState("");
  const [decimalOutput, setDecimalOutput] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: any) => {
    setBinaryInput(e.target.value);
    setErrorMessage("");
    setDecimalOutput(null);
  };

  const handleConvert = () => {
    const trimmedInput = binaryInput.trim();
    if (!/^[01]{1,8}$/.test(trimmedInput)) {
      setErrorMessage("Please enter a valid binary number (up to 8 digits).");
      return;
    }

    let decimal: number = 0;
    const length = trimmedInput.length;
    for (let i = 0; i < length; i++) {
      if (trimmedInput[length - 1 - i] === "1") {
        decimal += Math.pow(2, i);
      }
    }

    setDecimalOutput(decimal);
  };

  return (
    <div className="bin2dec-container">
      <div className="binary-dots"></div>
      <h2 className="bin2dec-title">Bin2Dec</h2>
      <div className="input-container">
        <input
          type="text"
          value={binaryInput}
          onChange={handleChange}
          placeholder="Enter up to 8 binary digits"
          maxLength={8}
          className="binary-input"
        />
      </div>
      <button onClick={handleConvert} className="convert-button">
        Convert
      </button>

      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {decimalOutput !== null && (
        <div className="result-container">
          <div className="result-label">Decimal Result</div>
          <div className="result-value">{decimalOutput}</div>
        </div>
      )}
    </div>
  );
}

export default Bin2Dec;
