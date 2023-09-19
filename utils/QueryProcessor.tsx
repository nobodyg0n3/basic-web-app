export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("your name")) {
    return "sara";
  }

  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  const multMatch = query.match(/What is (\d+) multiplied by (\d+)/);
  if (multMatch) {
    const x: number = parseInt(multMatch[1]);
    const y: number = parseInt(multMatch[2]);
    return (x*y).toString();
  }

  const minMatch = query.match(/What is (\d+) minus (\d+)/);
  if (minMatch) {
    const x: number = parseInt(minMatch[1]);
    const y: number = parseInt(minMatch[2]);
    return (x-y).toString();
  }

  const powOf = query.match(/What is (\d+)) to the power of (\d+)/);
  if (powOf) {
    const x: number = parseInt(powOf[1]);
    const y: number = parseInt(powOf[2]);
    return (x**y).toString();
  }

  return "";
}