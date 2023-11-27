export function getMaxChargeRate(value) {
  if (value < 50) {
    return 1;
  } else if (value < 100) {
    return 2;
  } else if (value < 200) {
    return 3;
  } else {
    return 4;
  }
}

export function getRange(value) {
  if (value < 150) {
    return 1;
  } else if (value < 250) {
    return 2;
  } else if (value < 350) {
    return 3;
  } else {
    return 4;
  }
}

export function getLeaseDetail(item, leaseLength) {
  return (
    item.lease_options.data.attributes.lease_details.find(
      (v) => v.lease_months === leaseLength
    ) || {}
  );
}
