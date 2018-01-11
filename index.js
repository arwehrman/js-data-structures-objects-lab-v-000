const driver = {};
function updateDriverWithKeyAndValue(driver, key, value) {
  const new_driver = {...driver};
  new_driver[key] = value;
  return new_driver
};
