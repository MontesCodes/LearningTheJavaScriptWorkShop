// Free Home Delivery Eligibility Validation
function isEligible(distance, membershipstatus) {
  if (
    distance < 1 ||
    (membershipstatus === 'active' && distance > 10) ||
    (membershipstatus === 'inactive' && distance > 5)
  ) {
  }
}
