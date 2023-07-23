import { siteConfig } from "@/config/site";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";

import "./globals.css";

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          {/* <!-- Begin Inspectlet Asynchronous Code --> */}
          <Script type="text/javascript" id="inspectlet-code">
            {`(function() {
                  window.__insp = window.__insp || [];
                  __insp.push(['wid', 179419067]);
                  var ldinsp = function(){
                  if(typeof window.__inspld != "undefined") return; window.__inspld = 1; var insp = document.createElement('script'); insp.type = 'text/javascript'; insp.async = true; insp.id = "inspsync"; insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cdn.inspectlet.com/inspectlet.js?wid=179419067&r=' + Math.floor(new Date().getTime()/3600000); var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(insp, x); };
                  setTimeout(ldinsp, 0);
              })();`}
          </Script>
          {/* <!-- End Inspectlet Asynchronous Code --> */}
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-WVXW8DQXW5" />
          {/* Google Tag Manager */}
          <Script id="gtag">
            {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-WVXW8DQXW5');
              `}
          </Script>
          {/* End Google Tag Manager */}
        </head>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          {/* <Google Tag Manager (noscript) */}

          {/* End Google Tag Manager (noscript) */}
          <ThemeProvider
            attribute="class"
            enableSystem={false}
            defaultTheme="dark"
          >
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">{children}</div>
              <SiteFooter />
            </div>
            {/* <TailwindIndicator /> */}
          </ThemeProvider>
          <Toaster />
        </body>
      </html>
    </>
  );
}
