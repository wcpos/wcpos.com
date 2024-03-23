import { MetaTagsDto } from "~/application/dtos/seo/MetaTagsDto";

export async function getSeoMetaTags(request?: Request): Promise<MetaTagsDto> {
  const pathname = request ? new URL(request.url).pathname : "";
  return getSeoMetaTagsFromPathname(pathname);
}

async function getSeoMetaTagsFromPathname(pathname: string) {
  const title = "WooCommerce POS";
  const description = "A WordPress plugin for taking WooCommerce orders at the Point of Sale.";
  const keywords = "";
  const image = "https://yahooder.sirv.com/remixblocks/page-blocks/cover.png";
  const twitterImage = "https://yahooder.sirv.com/remixblocks/page-blocks/thumbnail.png";
  const twitterCreator = "@wcpos";
  const twitterSite = "@wcpos";

  const metaTags: MetaTagsDto = [
    {
      charset: "utf-8",
      title,
      description,
      keywords,
      "og:title": title,
      "og:type": "website",
      "og:url": pathname,
      "og:image": image,
      "og:card": "summary_large_image",
      "og:creator": twitterCreator,
      // "og:site": request ? new URL(request.url).host : "",
      "og:description": description,
      "twitter:image": twitterImage,
      "twitter:card": "summary_large_image",
      "twitter:creator": twitterCreator,
      "twitter:site": twitterSite,
      "twitter:title": title,
      "twitter:description": description,
    },
  ];

  return metaTags;
}
