export async function getPosts(endpoint?: string | undefined) {
  const url = endpoint
    ? process.env.NEXT_PUBLIC_API_BASE_URL! + endpoint
    : process.env.NEXT_PUBLIC_API_BASE_URL!;
  const res = await fetch(url);
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Postingan gagal dimuat");
  }
}
