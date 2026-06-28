// Image slots. Swap `src` with Higgsfield CDN URLs when ready — gradients keep
// the site fully designed and shippable in the meantime.

export type ImageSlot = {
  src?: string;
  gradient: string;
  label: string;
};

export const images: Record<string, ImageSlot> = {
  hero: {
    gradient: "linear-gradient(135deg, #f0e7da 0%, #c8a98a 55%, #a8927a 100%)",
    label: "UPRIGHT kit — compression socks and daily minerals on a soft oat surface",
  },
  product: {
    gradient: "linear-gradient(160deg, #faf6f0 0%, #f0e7da 60%, #c8a98a 100%)",
    label: "The UPRIGHT Kit, flat lay",
  },
  socks: {
    gradient: "linear-gradient(150deg, #f0e7da 0%, #a8927a 100%)",
    label: "Graduated compression socks",
  },
  minerals: {
    gradient: "linear-gradient(150deg, #faf6f0 0%, #8b9a7d 120%)",
    label: "Daily electrolyte sticks",
  },
  lifestyle: {
    gradient: "linear-gradient(135deg, #6f5d49 0%, #a8927a 60%, #f0e7da 100%)",
    label: "Calm morning routine",
  },
};
