import type { CSSProperties } from "react";

// Image slots. `src` = Higgsfield CDN. Gradient stays as load fallback.

export type ImageSlot = {
  src?: string;
  gradient: string;
  label: string;
};

const CDN =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38kTTIwiU4fsn0QovoiLFUafZHg";

export const images: Record<string, ImageSlot> = {
  hero: {
    src: `${CDN}/hf_20260628_084408_6be15ee0-3395-4607-b8d5-ae51d9fd015a.png`,
    gradient: "linear-gradient(135deg, #f0e7da 0%, #c8a98a 55%, #a8927a 100%)",
    label: "UPRIGHT kit — compression socks and daily minerals on oat linen",
  },
  product: {
    src: `${CDN}/hf_20260628_084408_6be15ee0-3395-4607-b8d5-ae51d9fd015a.png`,
    gradient: "linear-gradient(160deg, #faf6f0 0%, #f0e7da 60%, #c8a98a 100%)",
    label: "The UPRIGHT Kit, flat lay",
  },
  socks: {
    src: `${CDN}/hf_20260628_084418_09f8e714-9240-481b-9d97-ecc2e5c05991.png`,
    gradient: "linear-gradient(150deg, #f0e7da 0%, #a8927a 100%)",
    label: "Graduated compression socks worn",
  },
  minerals: {
    src: `${CDN}/hf_20260628_084410_6709c535-ab67-4ad8-8170-f575076c6265.png`,
    gradient: "linear-gradient(150deg, #faf6f0 0%, #8b9a7d 120%)",
    label: "Daily electrolyte sticks",
  },
  binder: {
    src: `${CDN}/hf_20260628_084411_fd26e4bf-455e-440c-b6bf-1fef686d51a4.png`,
    gradient: "linear-gradient(150deg, #faf6f0 0%, #c8a98a 110%)",
    label: "Adjustable compression binder",
  },
  lifestyle: {
    src: `${CDN}/hf_20260628_084416_d442099e-63ef-4973-a345-43edca2cc2c2.png`,
    gradient: "linear-gradient(135deg, #6f5d49 0%, #a8927a 60%, #f0e7da 100%)",
    label: "Woman by a sunlit window with her morning electrolyte drink",
  },
};

export function slotStyle(img: ImageSlot): CSSProperties {
  return img.src
    ? {
        backgroundImage: `url(${img.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : { background: img.gradient };
}
