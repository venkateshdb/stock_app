
const validateRange = (from, to, setToastMessage, setToastType, setShowToast) => {
    if (to < from) {
      setToastMessage("The 'To' value cannot be less than the 'From' value.");
      setToastType("error");
      setShowToast(true);
      return false;
    }
    setToastMessage("Filter applied successfully!");
    setToastType("success");
    setShowToast(true);
    return true;
  };
  