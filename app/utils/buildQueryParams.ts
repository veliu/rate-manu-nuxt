export default function buildQueryParams(obj: any, prefix = ""): any {
  const params: any = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      const prefixedKey = prefix ? `${prefix}[${key}]` : key;

      if (typeof value === "object" && !Array.isArray(value)) {
        // Recursively handle nested objects
        Object.assign(params, buildQueryParams(value, prefixedKey));
      } else if (Array.isArray(value)) {
        // Handle arrays, adding index in the query string
        value.forEach((item, index) => {
          Object.assign(
            params,
            buildQueryParams(item, `${prefixedKey}[${index}]`),
          );
        });
      } else {
        // Add simple key-value pairs
        params[prefixedKey] = value;
      }
    }
  }

  return params;
}
