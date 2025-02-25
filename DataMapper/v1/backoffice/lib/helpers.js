export function stringToList(str, block) {
  var out = "";
  if (!str) return "";
  const parts = str.split(",");
  parts.map(function (prop, i) {
    out += block.fn({ value: `"${prop}"${i < parts.length - 1 ? "," : ""}` });
  });
  return out;
}

export function getInstant() {
  return new Date().toISOString();
}

export function lookup(configurationArray, key) {
  for (let i = 0; i < configurationArray.length; i++) {
    if (configurationArray[i].key === key) {
      return configurationArray[i].value;
    }
  }
  return "";
}

export function getUuid() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}


