import sitedetails from "@/lib/constant/sitedetails";
import Head from "next/head";

export default function Header({ title = sitedetails.position }) {
  return (
    <Head>
      <link rel="icon" href={sitedetails.favivon} />
      <title>
        {sitedetails.fullname} - {title}
      </title>
      <meta name="description" content={sitedetails.about} />
      <meta name="author" content={sitedetails.fullname} />
      <meta
        name="keywords"
        content={`${sitedetails.fullname}, ${sitedetails.position}`}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta name="url" property="og:url" content={sitedetails.link} />
      <meta
        name="site_name"
        property="og:site_name"
        content={sitedetails.fullname}
      />
      <meta
        name="description"
        property="og:description"
        content={sitedetails.about}
      />
      <meta
        name="secure_url"
        property="og:image:secure_url"
        content="https://nicolumibao.pages.dev/images/nico.jpg"
      />
      <meta
        name="image"
        property="og:image"
        content="https://nicolumibao.pages.dev/images/nico.jpg"
      />
      <meta name="type" property="og:image:type" content="jpg" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={sitedetails.fullname} />
      <meta name="twitter:creator" content={sitedetails.fullname} />
      <meta name="twitter:title" content={sitedetails.fullname} />
      <meta name="twitter:description" content={sitedetails.about} />
      <meta
        name="twitter:image"
        content="https://nicolumibao.pages.dev/images/nico.jpg"
      />
      <meta name="twitter:domain" content={sitedetails.link} />
    </Head>
  );
}
