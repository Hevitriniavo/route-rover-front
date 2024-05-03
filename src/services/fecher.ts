const fecher = async <T>(
  url: string,
  options: RequestInit = {}
): Promise<T> => {
  const defaultOptions: RequestInit = {
    method: "GET",
    ...options,
  };

  const res = await fetch(url, defaultOptions);
  if (!res.ok) {
    throw new Error(`Erreur HTTP ! Statut : ${res.status}`);
  }

  return (await res.json()) as T;
};

export default fecher;
