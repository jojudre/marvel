export const getSlug = (name: string) => {
  return name.replace(/\s+/g, "-").toLowerCase();
}