export function getUserName(): string {
  return "Bantony";
}

export function getUserStatus(isActive: boolean): string {
  if (isActive) {
    return "Active";
  }

  return "Inactive";
}
