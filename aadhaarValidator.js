// ekrishi/backend/services/aadhaarValidator.js

// Simple Aadhaar format validator (12 digits)
exports.validateAadhaar = (aadhaar) => {
    const aadhaarRegex = /^\d{12}$/;
    return aadhaarRegex.test(aadhaar);
  };
  