export async function POST(req) {
  const body = await req.json();

  console.log("User Data:", body);

  return new Response(
    JSON.stringify({ message: "User registered successfully" }),
    { status: 200 }
  );
}