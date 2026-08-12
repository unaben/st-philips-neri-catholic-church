const UK_POSTCODE_PATTERN =
  /\b(GIR ?0AA|[A-PR-UWYZ]([0-9]{1,2}|[A-HK-Y][0-9]([0-9ABEHMNPRV-Y])?|[0-9][A-HJKPS-UW])\s?[0-9][ABD-HJLNP-UW-Z]{2})\b/i;

function extractDigits(value: string): string {
  return (value.match(/\d/g) ?? []).join("");
}

function extractLetters(value: string): string {
  return (value.match(/[A-Za-z]/g) ?? []).join("").toUpperCase();
}

function extractPostcodeLetters(source: string): string {
  const match = source.match(UK_POSTCODE_PATTERN);
  return match ? extractLetters(match[0]) : "";
}

function addressLetterFallback(address: string): string {
  return address
    .replace(/[^a-zA-Z]/g, "")
    .slice(-3)
    .toUpperCase();
}

function randomDigits(length: number): string {
  let out = "";
  for (let i = 0; i < length; i += 1) {
    out += Math.floor(Math.random() * 10).toString();
  }
  return out;
}

interface GenerateReferenceIdArgs {
  phone?: string;
  postcode?: string;
  address?: string;
}

export function generateReferenceId({
  phone = "",
  postcode = "",
  address = "",
}: GenerateReferenceIdArgs): string {
  const phoneDigits = extractDigits(phone).slice(-4);
  const postcodeLetters = postcode
    ? extractLetters(postcode)
    : extractPostcodeLetters(address) || addressLetterFallback(address);
  const suffix = randomDigits(6);

  return [postcodeLetters, phoneDigits, suffix].filter(Boolean).join("");
}
