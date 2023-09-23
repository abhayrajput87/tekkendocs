import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  V2_MetaFunction,
} from "@remix-run/react";
import stylesUrl from "~/global.css";

export const links = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export const headers = () => ({
  "Cache-Control": "public, max-age=10, s-maxage=60",
});

export const meta: V2_MetaFunction = () => [{
  title: "TekkenDocs | Frame data for Tekken",
},
{
  description: "Frame data and usefull resources for Tekken"
}];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}