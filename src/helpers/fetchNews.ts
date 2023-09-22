export const fetchNews = async (url: any) => {
  const res = await fetch(url);
  const data = await res.json();
  // console.log("ENEWS--------------",data)
  return { data };
};
