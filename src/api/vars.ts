export async function fetchEnvVars() {
  const res = await fetch("http://localhost:3000/api/env/env-vars");
  if (res.status !== 200) {
    throw new Error("something went wrong with getting vars");
  }
  return res.json();
}
