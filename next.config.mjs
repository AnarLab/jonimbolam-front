/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // Repo root isn't the workspace root; avoid picking up other lockfiles.
  outputFileTracingRoot: new URL(".", import.meta.url).pathname,
}

export default nextConfig

