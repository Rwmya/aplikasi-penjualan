export default async function aya() {
  const tangkap = await fetch("http://localhost:3000/api/register");
  const data = await tangkap.json();
  return <>{`${data.response}`}</>;
}
