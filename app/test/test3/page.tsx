export default function page() {
  const end = Date.now() + 2000;
  while (Date.now() < end) continue;

  return <div>load testing success</div>;
}
