import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { Users } from "@/cms/collections/users";
import { Media } from "@/cms/collections/media";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    components: {
      graphics: {
        Icon: "/cms/components/flyingcode/icon.tsx",
        Logo: "/cms/components/flyingcode/logo.tsx",
      },
    },
    avatar: {
      Component: "/cms/components/flyingcode/profile.tsx",
    },
    meta: {
      titleSuffix: "- Flyingcode CMS",
      description: "Flyingcode CMS",
      icons: [
        {
          url: "/cms/favicon.ico",
        },
      ],
      openGraph: {
        title: "Flyingcode CMS",
        siteName: "Flyingcode CMS",
        description: "Flyingcode CMS",
        images: [
          {
            url: "/cms/assets/logo/icon.svg",
            width: 1200,
            height: 630,
            alt: "Flyingcode CMS",
          },
        ],
      },
    },

    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  sharp,
  plugins: [payloadCloudPlugin()],
});
