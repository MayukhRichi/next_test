import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.redirect(
    new URL(`/test/${request.nextUrl.pathname}`, request.url)
  );
}

export const config = {
  matcher: "/(test[0-9]+)",
};
