import useSWR from "swr";

export function getPostsSwr(param?: string | undefined) {
  const url = param
    ? process.env.NEXT_PUBLIC_API_BASE_URL! + param
    : process.env.NEXT_PUBLIC_API_BASE_URL!;

  async function fetcher(end: string) {
    const res = await fetch(end);
    const data = await res.json();
    return data;
  }
  return useSWR(url, fetcher);
}
