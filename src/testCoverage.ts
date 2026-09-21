function checkAge(age: number): string {
  if (age >= 18) {
    return "Adult";
  }

  return "Minor";
}

export default checkAge;
