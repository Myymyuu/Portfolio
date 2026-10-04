/** URL prefix for project-site hosting (e.g. GitHub Pages `/Portfolio`). */
export function getBasePath(): string {
  const fromEnv = process.env.NEXT_PUBLIC_BASE_PATH;
  if (fromEnv !== undefined) {
    return fromEnv;
  }
  if (process.env.GITHUB_REPOSITORY === "Myymyuu/Portfolio") {
    return "/Portfolio";
  }
  return "";
}
