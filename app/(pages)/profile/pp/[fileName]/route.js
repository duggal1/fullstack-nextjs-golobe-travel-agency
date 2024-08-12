import { getBucketPhotoUrl } from "@/lib/storage";
import { ImageResponse } from "next/og";
export async function GET(req, { params }) {
  const { fileName } = params;
  const url = await getBucketPhotoUrl(fileName, "pp");

  return new ImageResponse(
    <img width={512} height={512} src={url} alt={"profilePic"} />,
    {
      width: 512,
      height: 512,
    }
  );
}