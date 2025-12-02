const API_BASE = "https://miracleregen.com/wp-json/wp/v2";

export async function fetchPosts({ page = 1, per_page = 10, category } = {}) {
  const params = new URLSearchParams({ _embed: "1", page, per_page });
  if (category) params.append("categories", category);
  const res = await fetch(`${API_BASE}/posts?${params.toString()}`);
  if (!res.ok) throw new Error(`Failed to fetch posts: ${res.status}`);
  const json = await res.json();
  const total = res.headers.get("X-WP-Total");
  const totalPages = res.headers.get("X-WP-TotalPages");
  return { data: json, total: Number(total), totalPages: Number(totalPages) };
}

export async function fetchPostBySlug(slug) {
  const params = new URLSearchParams({ slug, _embed: "1" });
  const res = await fetch(`${API_BASE}/posts?${params.toString()}`);
  if (!res.ok) throw new Error(`Failed to fetch post: ${res.status}`);
  const json = await res.json();
  if (!json.length) throw new Error("Post not found");
  return json[0];
}
