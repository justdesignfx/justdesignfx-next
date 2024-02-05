import { NextSeo, NextSeoProps } from "next-seo"
import NextHead from "next/head"

type Props = {
  canonical: NextSeoProps["canonical"]
  title: NextSeoProps["title"]
  description: NextSeoProps["description"]
  image?: { width: number; height: number; url: string }
  keywords?: string[]
  twitter?: NextSeoProps["twitter"]
  themeColor?: NextSeoProps["themeColor"]
}
export default function CustomHead({
  canonical,
  title,
  description,
  image,
  keywords,
  themeColor = "#007538",
  twitter = { handle: "@chamaeleonvc" },
}: Props) {
  return (
    <>
      <NextHead>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        <meta
          name="robots"
          content={process.env.NEXT_PUBLIC_NODE_ENV !== "development" ? "index,follow" : "noindex,nofollow"}
        />
        <meta
          name="googlebot"
          content={process.env.NEXT_PUBLIC_NODE_ENV !== "development" ? "index,follow" : "noindex,nofollow"}
        />

        <meta name="keywords" content={`${keywords && keywords.length ? keywords.join(",") : keywords}`} />
        <meta name="author" content="Chamaeleon VC" />
        <meta name="referrer" content="no-referrer" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="US" />

        {/* START FAVICON */}
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png" />
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
        <link rel="mask-icon" href="/img/favicon/favicon-32x32.png" color={themeColor} />
        <meta name="msapplication-TileColor" content={themeColor} />
        <meta name="theme-color" content={themeColor} />
        <link rel="icon" href="/img/favicon/favicon.ico" />
        {/* END FAVICON */}

        <link rel="canonical" href={canonical}></link>

        <title>{title}</title>
      </NextHead>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          type: "website",
          locale: "en_US",
          images: [
            {
              url: image ? image.url : "/img/chamaeleon-c.png",
              width: image?.width ? image.width : 750,
              height: image?.height ? image.height : 652,
              alt: title,
            },
          ],
          defaultImageWidth: 750,
          defaultImageHeight: 652,
          site_name: "chamaeleon.vc",
        }}
        twitter={{
          handle: twitter.handle,
          cardType: "summary_large_image",
        }}
      />
    </>
  )
}
